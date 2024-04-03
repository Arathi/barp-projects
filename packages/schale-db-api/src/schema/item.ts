import { Released } from './common';

export default interface Item {
  Id: number;
  IsReleased: Released;
  Category: string;
  Rarity: string;
  // Quality: number;
  // Tags: string[];
  // Shops: any[];
  // Craftable: Released;
  Icon: string;
  Name: string;
  Desc: string;
}
