export interface Student {
  /**
   * 序号
   */
  id: number;

  /**
   * 元数据ID
   */
  metadataId: number;

  /**
   * 星级
   */
  rank: number;

  /**
   * 等级
   */
  level: number;

  /**
   * 专武星级
   */
  weaponRank: number;

  /**
   * 专武等级
   */
  weaponLevel: number;

  /**
   * 爱用品层级（Tier）
   */
  uniqueItem: number;

  /**
   * 装备1层级
   */
  equipmentTier1: number;

  /**
   * 装备1等级
   */
  equipmentLevel1: number;

  /**
   * 装备2层级
   */
  equipmentTier2: number;

  /**
   * 装备2等级
   */
  equipmentLevel2: number;

  /**
   * 装备3层级
   */
  equipmentTier3: number;

  /**
   * 装备3等级
   */
  equipmentLevel3: number;

  /**
   * 好感
   */
  bond: number;
}
