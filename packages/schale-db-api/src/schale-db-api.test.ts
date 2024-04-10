/* eslint-disable max-lines */
import SchaleDBApi from './schale-db-api';
import { Summon, Skill, Weapon, Gear } from './schema/student';
import { Language, Server } from './types';

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

class Struct {
  name: string;

  fields: Field[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addType(fieldName: string, fieldType: string | null = null) {
    const exists = this.fields.find(f => f.name === fieldName);
    if (exists === undefined) {
      const field = new Field(fieldName);
      field.amount = 1;
      if (fieldType !== null) {
        field.addType(fieldType);
      }
      this.fields.push(field);
    } else {
      exists.amount++;
      if (fieldType !== null) {
        exists.addType(fieldType);
      }
    }
  }
}

class Field {
  name: string;

  amount: number = 0;

  types: string[] = [];

  nullable: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  addType(type: string): boolean {
    const exists = this.types.findIndex(t => t === type) >= 0;
    if (exists) {
      return false;
    }
    this.types.push(type);
    return true;
  }
}

function exportStruct(struct: Struct) {
  console.info(`export type ${struct.name} = {
${struct.fields
  .map(f => `  ${f.name}${f.nullable ? '?' : ''}: ${f.types.join(' | ')};`)
  .join('\n')}
};`);
}

function getArrayType(elements: any[]): string | null {
  const types = new Set<string>();
  elements.forEach(element => {
    types.add(typeof element);
  });
  const typeList = Array.from(types);
  if (typeList.length === 0) {
    return null;
  }
  if (typeList.length === 1) {
    return `${typeList[0]}[]`;
  }
  // return `(${typeList.map(t => `${t}`).join('|')})`;
  return 'any[]';
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

  test('check FavorStatValue', async () => {
    const students = await api.getStudents({
      lang: Language.Japanese,
      server: Server.Japan,
    });

    students.forEach(student => {
      const fsv = student.FavorStatValue;
      expect(fsv.length).toBe(7);
      fsv.forEach(vs => {
        // expect(Array.isArray(vs)).toBe(true);
        expect(vs.length).toBe(2);
      });
    });
  });

  test('struct Student', async () => {
    const students = await api.getStudents({
      lang: Language.Japanese,
      server: Server.Japan,
    });

    const struct = new Struct('Student');
    students.forEach(student => {
      const keys = Object.keys(student);
      keys.forEach(fieldName => {
        // @ts-expect-error
        const value: any = student[fieldName];
        let type: string | null = typeof value;
        if (type === 'object' && Array.isArray(value)) {
          type = getArrayType(value);
        }
        struct.addType(fieldName, type);
      });
    });

    const types: Record<string, string> = {
      IsReleased: 'Released',
      School: 'School',
      SquadType: 'SquadType',
      TacticRole: 'TacticRole',
      Summons: 'Summon[]',
      Position: 'Position',
      BulletType: 'BulletType',
      ArmorType: 'ArmorType',
      Equipment: 'EquipmentTypeSlots',
      CharHeightImperial: 'any',
      Skills: 'Skill[]',
      FavorStatValue: 'FavorStatValues', // 2-5, 6-10, 11-15, 16-20, 21-30, 31-40, 41-50
      FurnitureInteraction: 'any',
      Weapon: 'Weapon',
      Gear: 'Gear | Empty',
      SkillExMaterial: 'number[][]',
      SkillExMaterialAmount: 'number[][]',
      SkillMaterial: 'number[][]',
      SkillMaterialAmount: 'number[][]',
    };

    struct.fields.forEach(f => {
      const type = types[f.name];
      if (type !== undefined) {
        f.types = [type];
      }
      f.nullable = f.amount < students.length;
    });

    exportStruct(struct);
  });

  test('struct Summon', async () => {
    const students = await api.getStudents({
      lang: Language.Japanese,
      server: Server.Japan,
    });

    const summons: Summon[] = [];
    students.forEach(s => summons.push(...s.Summons));
    console.info(`共计获得召唤物信息 ${summons.length} 个`);

    const struct = new Struct('Summon');
    summons.forEach(summon => {
      const keys = Object.keys(summon);
      keys.forEach(fieldName => {
        // @ts-expect-error
        const value: any = summon[fieldName];
        let type: string | null = typeof value;
        if (type === 'object' && Array.isArray(value)) {
          type = getArrayType(value);
        }
        struct.addType(fieldName, type);
      });
    });

    const types: Record<string, string> = {
      InheritCasterAmount: 'number[][]',
    };
    struct.fields.forEach(f => {
      const type = types[f.name];
      if (type !== undefined) {
        f.types = [type];
      }
      f.nullable = f.amount < summons.length;
    });

    exportStruct(struct);
  });

  // TODO Skill结构
  test('struct Skill', async () => {
    const students = await api.getStudents({
      lang: Language.Japanese,
      server: Server.Japan,
    });

    const skills: Skill[] = [];
    students.forEach(s => skills.push(...s.Skills));
    console.info(`共计获得技能信息 ${skills.length} 个`);

    const struct = new Struct('Skill');
    skills.forEach(skill => {
      const keys = Object.keys(skill);
      keys.forEach(fieldName => {
        // @ts-expect-error
        const value: any = skill[fieldName];
        let type: string | null = typeof value;
        if (type === 'object' && Array.isArray(value)) {
          type = getArrayType(value);
        }
        struct.addType(fieldName, type);
      });
    });

    const types: Record<string, string> = {
      Effects: 'SkillEffect[]',
    };
    struct.fields.forEach(f => {
      const type = types[f.name];
      if (type !== undefined) {
        f.types = [type];
      }
      f.nullable = f.amount < skills.length;
    });

    exportStruct(struct);
  });

  test('struct Weapon', async () => {
    const students = await api.getStudents({
      lang: Language.Japanese,
      server: Server.Japan,
    });
    const weapons: Weapon[] = [];
    students.forEach(s => weapons.push(s.Weapon));
    console.info(`共计获得专武信息 ${weapons.length} 个`);

    const struct = new Struct('Weapon');

    weapons.forEach(weapon => {
      const keys = Object.keys(weapon);
      keys.forEach(fieldName => {
        // @ts-expect-error
        const value: any = weapon[fieldName];
        let type: string | null = typeof value;
        if (type === 'object' && Array.isArray(value)) {
          type = getArrayType(value);
        }
        struct.addType(fieldName, type);
      });
    });

    const types: Record<string, string> = {};
    struct.fields.forEach(f => {
      const type = types[f.name];
      if (type !== undefined) {
        f.types = [type];
      }
      f.nullable = f.amount < weapons.length;
    });

    exportStruct(struct);
  });

  test('struct Gear', async () => {
    const students = await api.getStudents({
      lang: Language.Japanese,
      server: Server.Japan,
    });

    const gears: Gear[] = [];
    students.forEach(s => {
      const gear = s.Gear;
      if (Object.keys(gear).length > 0) {
        gears.push(gear as Gear);
      }
    });
    console.info(`共计获得爱用品信息 ${gears.length} 个`);

    const struct = new Struct('Gear');

    gears.forEach(gear => {
      const keys = Object.keys(gear);
      keys.forEach(fieldName => {
        // @ts-expect-error
        const value: any = gear[fieldName];
        let type: string | null = typeof value;
        if (type === 'object' && Array.isArray(value)) {
          type = getArrayType(value);
        }
        struct.addType(fieldName, type);
      });
    });

    const types: Record<string, string> = {};
    struct.fields.forEach(f => {
      const type = types[f.name];
      if (type !== undefined) {
        f.types = [type];
      }
      f.nullable = f.amount < gears.length;
    });

    exportStruct(struct);
  });
});
