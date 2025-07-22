import { test } from "vitest";
import axios from "axios";
import { JSONPathJS } from "jsonpath-js";

// type Dict = Record<string, object>;
type Json = Parameters<JSONPathJS['find']>[0];

test("生成Student", async () => {
  const url = `https://schaledb.com/data/cn/students.min.json`;
  const resp = await axios.get(url, {
    proxy: {
      host: "127.0.0.1",
      port: 8118,
      protocol: "http"
    }
  });

  const typePaths: Record<string, string | string[]> = {
    "School": "$.*.School",
    "SquadType": "$.*.SquadType",
    "TacticRole": "$.*.TacticRole",
    "Position": "$.*.Position",
    "BulletType": "$.*.BulletType",
    "ArmorType": "$.*.ArmorType",
    "BattleAdaptation": ["$.*.StreetBattleAdaptation", "$.*.OutdoorBattleAdaptation", "$.*.IndoorBattleAdaptation"],
    "WeaponType": "$.*.WeaponType",
    "EquipmentSlot1": "$.*.Equipment[0]",
    "EquipmentSlot2": "$.*.Equipment[1]",
    "EquipmentSlot3": "$.*.Equipment[2]",
  };

  function findAll(name: string, dict: Json, path: string) {
    const query = new JSONPathJS(path);
    const result = query.find(dict);
    const valueSet = new Set();
    if (Array.isArray(result)) {
      for (const element of result) {
        switch (typeof element) {
          case "string":
            valueSet.add(`"${element}"`);
            break;
          default:
            valueSet.add(element);
            break;
        }
      }
    }
    const valueList: any[] = [];
    valueSet.forEach((value) => valueList.push(value))
    const def = `type ${name} = ${valueList.join(" | ")};`;
    console.info(def);
  }

  const json = await resp.data as Json;
  for (const typeName in typePaths) {
    const paths = typePaths[typeName];
    if (typeof paths === 'string') {
      findAll(typeName, json, paths);
    } else if (Array.isArray(paths)) {
      for (const path of paths) {
        findAll(typeName, json, path);
      }
    }
  }
});
