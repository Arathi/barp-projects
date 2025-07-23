import type { Meta, StoryObj } from "@storybook/react";
import { Star } from "../src/stars";

const meta = {
  title: "BlueArchive/Commons/Star",
  component: Star,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {
    outer: 128,
  },
} satisfies Meta<typeof Star>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  name: "标准",
  args: {
    outer: 128,
  },
};
