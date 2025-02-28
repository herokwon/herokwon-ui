import { Icon } from '@herokwon/ui/common';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCheck } from 'react-icons/fa6';

const meta = {
  title: 'Common/Icon',
  tags: ['autodocs'],
  component: Icon,
  args: {
    size: 'md',
  },
} satisfies Meta<typeof Icon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: FaCheck,
  },
};

export const Size: Story = {
  args: {
    type: FaCheck,
    size: 'xl',
  },
};
