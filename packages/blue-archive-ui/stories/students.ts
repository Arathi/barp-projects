import {
  AttackType,
  DefenseType,
  Role,
  EquipmentType,
  Squad,
} from "@barp/core";
import type { Student, StudentMetadata } from "@barp/core";

export const Aru = {
  id: 10000,
  name: "爱露",
  school: "Gehenna",
  rarity: 3,
  squad: Squad.Striker,
  role: Role.Dealer,
  attackType: AttackType.Explosive,
  defenseType: DefenseType.Light,
  street: 1,
  outdoor: 1,
  indoor: 1,
  equipment1: EquipmentType.Hat,
  equipment2: EquipmentType.Hairpin,
  equipment3: EquipmentType.Wristwatch,
} satisfies StudentMetadata;

export const ArisMaid = {
  id: 10066,
  name: "爱丽丝（女仆）",
  school: "Millennium",
  rarity: 3,
  squad: Squad.Striker,
  role: Role.Dealer,
  attackType: AttackType.Mystic,
  defenseType: DefenseType.Light,
  street: 1,
  outdoor: 1,
  indoor: 1,
  equipment1: EquipmentType.Hat,
  equipment2: EquipmentType.Hairpin,
  equipment3: EquipmentType.Wristwatch,
} satisfies StudentMetadata;
