import { Released } from './common';

export type School =
  | 'Gehenna'
  | 'Millennium'
  | 'Trinity'
  | 'Abydos'
  | 'Shanhaijing'
  | 'Hyakkiyako'
  | 'RedWinter'
  | 'Valkyrie'
  | 'ETC'
  | 'SRT'
  | 'Arius'
  | 'Tokiwadai'
  | 'Sakugawa'
  | string;

export enum SquadType {
  Main = 'Main',
  Support = 'Support',
}

export enum TacticRole {
  DamageDealer = 'DamageDealer',
  Tanker = 'Tanker',
  Supporter = 'Supporter',
  Healer = 'Healer',
  Vehicle = 'Vehicle',
}

export enum Position {
  Back = 'Back',
  Front = 'Front',
  Middle = 'Middle',
}

export enum BulletType {
  Explosion = 'Explosion',
  Mystic = 'Mystic',
  Pierce = 'Pierce',
  Sonic = 'Sonic',
}

export enum ArmorType {
  LightArmor = 'LightArmor',
  HeavyArmor = 'HeavyArmor',
  Unarmed = 'Unarmed',
  ElasticArmor = 'ElasticArmor',
}

export type WeaponType =
  | 'SR'
  | 'SG'
  | 'AR'
  | 'MG'
  | 'SMG'
  | 'HG'
  | 'GL'
  | 'MT'
  | 'RG'
  | 'RL'
  | 'FT'
  | string;

export enum EquipmentTypeSlot1 {
  Hat = 'Hat',
  Shoes = 'Shoes',
  Gloves = 'Gloves',
}

export enum EquipmentTypeSlot2 {
  Hairpin = 'Hairpin',
  Bag = 'Bag',
  Badge = 'Badge',
}

export enum EquipmentTypeSlot3 {
  Watch = 'Watch',
  Charm = 'Charm',
  Necklace = 'Necklace',
}

export type EquipmentTypeSlots = [
  EquipmentTypeSlot1,
  EquipmentTypeSlot2,
  EquipmentTypeSlot3,
];

export type Empty = Record<string, never>; // {}
export type MinToMaxValues = [number, number];
export type FavorStatValues = [
  [number, number],
  [number, number],
  [number, number],
  [number, number],
  [number, number],
  [number, number],
  [number, number],
];

type Student = {
  Id: number;
  IsReleased: Released;
  DefaultOrder: number;
  PathName: string;
  DevName: string;
  Name: string;
  School: School;
  Club: string;
  StarGrade: number;
  SquadType: SquadType;
  TacticRole: TacticRole;
  Summons: Summon[];
  Position: Position;
  BulletType: BulletType;
  ArmorType: ArmorType;
  StreetBattleAdaptation: number;
  OutdoorBattleAdaptation: number;
  IndoorBattleAdaptation: number;
  WeaponType: string;
  WeaponImg: string;
  Cover: boolean;
  Equipment: EquipmentTypeSlots;
  CollectionBG: string;
  FamilyName: string;
  PersonalName: string;
  SchoolYear: string;
  CharacterAge: string;
  FamilyNameRuby: string;
  PersonalNameRuby: string;
  Birthday: string;
  CharacterSSRNew: string;
  ProfileIntroduction: string;
  Hobby: string;
  CharacterVoice: string;
  BirthDay: string;
  Illustrator: string;
  Designer: string;
  CharHeightMetric: string;
  CharHeightImperial: any;
  StabilityPoint: number;
  AttackPower1: number;
  AttackPower100: number;
  MaxHP1: number;
  MaxHP100: number;
  DefensePower1: number;
  DefensePower100: number;
  HealPower1: number;
  HealPower100: number;
  DodgePoint: number;
  AccuracyPoint: number;
  CriticalPoint: number;
  CriticalDamageRate: number;
  AmmoCount: number;
  AmmoCost: number;
  Range: number;
  RegenCost: number;
  Skills: Skill[];
  FavorStatType: string[];
  FavorStatValue: FavorStatValues;
  FavorAlts: number[];
  MemoryLobby: number[];
  MemoryLobbyBGM: string;
  FurnitureInteraction: any;
  FavorItemTags: string[];
  FavorItemUniqueTags: string[];
  IsLimited: number;
  Weapon: Weapon;
  Gear: Gear | Empty;
  SkillExMaterial: number[][];
  SkillExMaterialAmount: number[][];
  SkillMaterial: number[][];
  SkillMaterialAmount: number[][];
  TSAId?: number;
  DefensePenetration1?: number;
  DefensePenetration100?: number;
};

export type Summon = {
  Id: number;
  SourceSkill: string;
  InheritCasterStat: string[];
  InheritCasterAmount: number[][];
  ObstacleMaxHP1?: number;
  ObstacleMaxHP100?: number;
};

export type Skill = {
  SkillType: string;
  Effects: SkillEffect[];
};

export type SkillEffect = {
  Type: string;
};

export type Weapon = {
  Name: string;
  Desc: string;
  AdaptationType: string;
  AdaptationValue: number;
  AttackPower1: number;
  AttackPower100: number;
  MaxHP1: number;
  MaxHP100: number;
  HealPower1: number;
  HealPower100: number;
  StatLevelUpType: string;
};

export type Gear = {
  Released: Released;
  StatType: string[];
  StatValue: MinToMaxValues[];
  Name: string;
  Desc: string;
  TierUpMaterial: number[][];
  TierUpMaterialAmount: number[][];
};

export default Student;
