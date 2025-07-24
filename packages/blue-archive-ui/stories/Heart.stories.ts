import type { Meta, StoryObj } from "@storybook/react";
import { Heart } from "../src/heart";

const meta = {
  title: "BlueArchive/Commons/Heart",
  component: Heart,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {
    width: 128,
    height: 100,
  },
} satisfies Meta<typeof Heart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "主要",
};
