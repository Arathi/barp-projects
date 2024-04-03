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

export default interface Student {
  Id: number;
  IsReleased: Released;
  PathName: string;
  DevName: string;
  Name: string;
  School: School;
  Club: string;
  StarGrade: number;
  SquadType: SquadType;
  TacticRole: TacticRole;
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
}
