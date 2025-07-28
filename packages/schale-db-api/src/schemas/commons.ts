export type Released = [boolean, boolean, boolean];
export type Equipments = [EquipmentSlot1, EquipmentSlot2, EquipmentSlot3];
export type Skills = Record<string, Skill>;
export type Skill = object;
export type Server = "jp" | "global" | "cn";
export type Language = "en" | "jp" | "tw" | "cn";

export type School =
  | "Gehenna"
  | "Millennium"
  | "Trinity"
  | "Abydos"
  | "Shanhaijing"
  | "Hyakkiyako"
  | "RedWinter"
  | "SRT"
  | "Arius"
  | "Tokiwadai"
  | "Valkyrie"
  | "Highlander"
  | "ETC"
  | "Sakugawa";
export type SquadType = "Main" | "Support";
export type TacticRole =
  | "DamageDealer"
  | "Tanker"
  | "Supporter"
  | "Healer"
  | "Vehicle";
export type Position = "Back" | "Front" | "Middle";
export type BulletType = "Explosion" | "Mystic" | "Pierce" | "Sonic";
export type ArmorType =
  | "LightArmor"
  | "HeavyArmor"
  | "Unarmed"
  | "ElasticArmor";
export type BattleAdaptation = 0 | 1 | 2 | 3 | 4;
export type WeaponType =
  | "SR"
  | "SG"
  | "AR"
  | "MG"
  | "SMG"
  | "RG"
  | "HG"
  | "GL"
  | "RL"
  | "FT"
  | "MT";
export type EquipmentSlot1 = "Hat" | "Shoes" | "Gloves";
export type EquipmentSlot2 = "Hairpin" | "Bag" | "Badge";
export type EquipmentSlot3 = "Watch" | "Charm" | "Necklace";
