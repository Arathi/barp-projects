import SchaleDBApi from './schale-db-api';

const api = new SchaleDBApi({});

describe('SchaleDB API', () => {
  test('getStudents', async () => {
    const students = await api.getStudents({});
    console.info(`获得学生信息 ${students.length} 条`);
    const aris = students.find(stu => stu.PathName === 'Aris');
    expect(aris?.Id).toBe(10015);
    expect(aris?.School).toBe('Millennium');
  });

  test('getItems', async () => {
    const items = await api.getItems({});
    console.info(`获得物品信息 ${items.length} 条`);
    const machine = items.find(it => it.Name === '世界上最没用的机器');
    expect(machine?.Id).toBe(5019);
    expect(machine?.Icon).toBe('item_icon_favor_19');
  });
});

function exportStrings(name: string, values: Set<string>, allowOthers = false) {
  const lines: string[] = Array.from(values).map(v => `  | '${v}'`);
  if (allowOthers) {
    lines.push(`  | string`);
  }
  console.info(`export type ${name} =
${lines.join('\n')}
;`);
}

function exportEnum(name: string, values: Set<string>) {
  const lines: string[] = Array.from(values).map(v => `  ${v} = '${v}',`);
  const enumDefine = `export enum ${name} {
${lines.join('\n')}
};`;
  console.info(enumDefine);
}

describe('Student', () => {
  test('strings', async () => {
    const students = await api.getStudents({});
    const schools = new Set<string>();
    const weapons = new Set<string>();
    students.forEach(stu => {
      schools.add(`${stu.School}`);
      weapons.add(`${stu.WeaponType}`);
    });
    exportStrings('School', schools, true);
    exportStrings('WeaponType', weapons, true);
  });

  test('enums', async () => {
    const students = await api.getStudents({});
    const squadTypes = new Set<string>();
    const roles = new Set<string>();
    const positions = new Set<string>();
    const attacks = new Set<string>();
    const armors = new Set<string>();
    students.forEach(stu => {
      squadTypes.add(`${stu.SquadType}`);
      roles.add(`${stu.TacticRole}`);
      positions.add(`${stu.Position}`);
      attacks.add(`${stu.BulletType}`);
      armors.add(`${stu.ArmorType}`);
    });
    exportEnum('SquadType', squadTypes);
    exportEnum('TacticRole', roles);
    exportEnum('Position', positions);
    exportEnum('BulletType', attacks);
    exportEnum('ArmorType', armors);
  });

  test('slots', async () => {
    const students = await api.getStudents({});
    const etSlot1 = new Set<string>();
    const etSlot2 = new Set<string>();
    const etSlot3 = new Set<string>();
    students.forEach(stu => {
      const [slot1, slot2, slot3] = stu.Equipment;
      etSlot1.add(`${slot1}`);
      etSlot2.add(`${slot2}`);
      etSlot3.add(`${slot3}`);
    });
    exportEnum('EquipmentTypeSlot1', etSlot1);
    exportEnum('EquipmentTypeSlot2', etSlot2);
    exportEnum('EquipmentTypeSlot3', etSlot3);
  });
});
