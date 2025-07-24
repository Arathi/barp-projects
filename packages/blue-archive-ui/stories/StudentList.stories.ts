import type { Meta, StoryObj } from "@storybook/react";
import { StudentList } from "../src/student-list";
import { Aru, ArisMaid } from "./students";

const meta = {
  title: "BlueArchive/Students/StudentList",
  component: StudentList,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof StudentList>;

export default meta;
type Story = StoryObj<typeof meta>;

const Metadatas = [Aru, ArisMaid];

export const Empty: Story = {
  name: "空",
  args: {
    metadatas: Metadatas,
    students: [],
  },
};
