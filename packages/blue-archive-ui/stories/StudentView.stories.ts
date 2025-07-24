import type { Meta, StoryObj } from "@storybook/react";
import { StudentView } from "../src/student-view";
import { Aru, ArisMaid } from "./students";

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

export const Owned: Story = {
  name: "已持有",
  args: {
    metadata: Aru,
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
      bond: 20,
    },
  },
};

export const Unowned: Story = {
  name: "未持有",
  args: {
    metadata: ArisMaid,
    student: undefined,
  },
};
