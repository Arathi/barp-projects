import { Role } from "@barp/core";

export const BASE_URL = "https://schaledb.com/images";

export const SchaleDbRoles: Record<Role, string> = {
  [Role.Tank]: "Tanker",
  [Role.Dealer]: "DamageDealer",
  [Role.Healer]: "Healer",
  [Role.Support]: "Supporter",
  [Role.TacticalSupport]: "Vehicle",
};
