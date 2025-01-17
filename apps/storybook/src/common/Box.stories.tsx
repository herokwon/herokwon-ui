import { Box } from '@herokwon/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Box',
  tags: ['autodocs'],
  component: Box,
  args: {
    as: 'div',
    className: 'w-100 aspect-square block',
  },
} satisfies Meta<typeof Box>;
export default meta;

type Story = StoryObj<typeof meta>;

const BoxRender = ({ ...props }: Parameters<typeof Box>[0]) => (
  <Box {...props} />
);

export const BorderDefault: Story = {
  render: ({ ...props }) => (
    <BoxRender
      {...props}
      className={`border border-black dark:border-white ${props.className ?? ''}`}
    />
  ),
};

export const RedButton: Story = {
  args: {
    as: 'button',
  },
  render: ({ ...props }) => (
    <BoxRender
      {...props}
      className={`bg-red-light dark:bg-red-dark ${props.className ?? ''}`}
    />
  ),
};

export const BlueAnchor: Story = {
  args: {
    as: 'a',
  },
  render: ({ ...props }) => (
    <BoxRender
      {...props}
      className={`bg-blue-light dark:bg-blue-dark ${props.className ?? ''}`}
    />
  ),
};

export const YellowSpan: Story = {
  args: {
    as: 'span',
  },
  render: ({ ...props }) => (
    <BoxRender
      {...props}
      className={`bg-yellow-light dark:bg-yellow-dark ${props.className ?? ''}`}
    />
  ),
};
