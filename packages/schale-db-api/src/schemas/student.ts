import type {Released, School, SquadType, TacticRole, Position, BulletType, ArmorType, BattleAdaptation, WeaponType, Equipments, Skills} from "./commons";

export interface Student {
    Id: number;
    IsReleased: Released;
    DefaultOrder: number;
    PathName: string;
    DevName: string;
    Name: string;
    Icon: string | null;
    SearchTags: any[];
    School: School;
    Club: string;
    StarGrade: number;
    SquadType: SquadType;
    TacticRole: TacticRole;
    Summons: Summon[];
    Position: Position;
    BulletType: BulletType;
    ArmorType: ArmorType;
    StreetBattleAdaptation: BattleAdaptation;
    OutdoorBattleAdaptation: BattleAdaptation;
    IndoorBattleAdaptation: BattleAdaptation;
    WeaponType: WeaponType;
    WeaponImg: string;
    Cover: boolean;
    Size: string;
    Equipment: Equipments;
    CollectionBG: string;
    FamilyName: string;
    PersonalName: string;
    SchoolYear: string;
    CharacterAge: string;
    Birthday: string;
    CharacterSSRNew: string;
    ProfileIntroduction: string;
    Hobby: string;
    CharacterVoice: string;
    BirthDay: string;
    Illustrator: string;
    Designer: string;
    CharHeightMetric: string;
    CharHeightImperial: string | null;
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
    Skills: Skills;
    FavorStatType: string[];
    FavorStatValue: number[][];
    FavorAlts: number[];
    MemoryLobby: number[];
    MemoryLobbyBGM: number;
    FurnitureInteraction: number[][][];
    FavorItemTags: string[];
    FavorItemUniqueTags: string[];
    IsLimited: number;
    Weapon: Weapon;
    Gear: Gear;
    SkillExMaterial: number[][];
    SkillExMaterialAmount: number[][];
    SkillMaterial: number[][];
    SkillMaterialAmount: number[][];
    PotentialMaterial: number;
    AltSprite?: boolean;
    DefensePenetration1?: number;
    DefensePenetration100?: number;
    LinkedCharacterId?: number;
    StyleId?: number;
}

export interface Summon {
    Id: number;
    SourceSkill: string;
    ObstacleMaxHP1?: number;
    ObstacleMaxHP100?: number;
    ObstacleSize?: number[];
}

export interface Weapon {
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
}

export interface Gear {
    Released?: Released;
    StatType?: string[];
    StatValue?: number[][];
    Name?: string;
    Desc?: string;
    TierUpMaterial?: number[][];
    TierUpMaterialAmount?: number[][];
}