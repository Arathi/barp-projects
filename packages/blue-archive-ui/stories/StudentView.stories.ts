import type { Meta, StoryObj } from "@storybook/react";
import { StudentView } from "../src/student-view";
import type { StudentMetadata } from "@barp/core";
import {
  AttackType,
  DefenseType,
  Role,
  EquipmentType,
  Squad,
} from "@barp/core";

const meta = {
  title: "BlueArchive/Students/StudentView",
  component: StudentView,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof StudentView>;

export default meta;
type Story = StoryObj<typeof meta>;

const AruMetadata = {
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

const ArisMaidMetadata = {
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

export const Owned: Story = {
  name: "已持有",
  args: {
    metadata: AruMetadata,
    student: {
      id: 5,
      metadataId: 10000,
      rank: 5,
      level: 87,
      weaponRank: 3,
      weaponLevel: 50,
      uniqueItem: 2,
      equipmentTier1: 8,
      equipmentLevel1: 60,
      equipmentTier2: 8,
      equipmentLevel2: 60,
      equipmentTier3: 8,
      equipmentLevel3: 60,
    },
  },
};

export const Unowned: Story = {
  name: "未持有",
  args: {
    metadata: ArisMaidMetadata,
    student: undefined,
  },
};
