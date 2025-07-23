export interface StudentMetadata {
  /**
   * 学生元数据ID
   */
  id: number;

  /**
   * 学生名称
   */
  name: string;

  /**
   * 学校
   */
  school: string;

  /**
   * 稀有度（初始星级）
   */
  rarity: Rarity;

  /**
   * 部队
   */
  squad: Squad;

  /**
   * 角色
   */
  role: Role;

  /**
   * 攻击类型
   */
  attackType: AttackType;

  /**
   * 防御类型
   */
  defenseType: DefenseType;

  /**
   * 街区地形适应性
   */
  street: number;

  /**
   * 野外地形适应性
   */
  outdoor: number;

  /**
   * 室内地形适应性
   */
  indoor: number;

  /**
   * 装备1类型
   */
  equipment1: EquipmentType;

  /**
   * 装备2类型
   */
  equipment2: EquipmentType;

  /**
   * 装备3类型
   */
  equipment3: EquipmentType;
}

type Rarity = 1 | 2 | 3;

export enum Squad {
  Striker = "striker",
  Special = "special",
}

export enum Role {
  Tank = "tank",
  Dealer = "dealer",
  Healer = "healer",
  Support = "support",
  TacticalSupport = "tactical-support",
}

export enum AttackType {
  Explosive = "explosive",
  Piercing = "piercing",
  Mystic = "mystic",
  Sonic = "sonic",
}

export enum DefenseType {
  Light = "light",
  Heavy = "heavy",
  Special = "special",
  Elastic = "elastic",
}

export enum EquipmentType {
  Hat = 1,
  Gloves = 2,
  Shoes = 3,
  Bag = 4,
  Badge = 5,
  Hairpin = 6,
  Amulet = 7,
  Wristwatch = 8,
  Necklace = 9,
}
