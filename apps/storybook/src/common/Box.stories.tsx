import { Box } from '@herokwon/ui/common';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Common/Box',
  tags: ['autodocs'],
  component: Box,
  args: {
    as: 'div',
    className: 'w-50 aspect-square block',
  },
} satisfies Meta<typeof Box>;
export default meta;

type Story = StoryObj<typeof meta>;

const BoxRender = ({ ...props }: Parameters<typeof Box>[0]) => (
  <>
    <Box {...props} />
    <p className="text-center">{`<${props.as || 'div'} />`}</p>
  </>
);

export const Default: Story = {
  render: ({ ...props }) => (
    <BoxRender
      {...props}
      className={`border border-black dark:border-white ${props.className ?? ''}`}
    />
  ),
};

export const Button: Story = {
  args: {
    as: 'button',
    onClick: fn(),
  },
  render: ({ ...props }) => (
    <BoxRender
      {...props}
      className={`bg-red-light aspect-square ${props.className ?? ''}`}
    />
  ),
};

export const Anchor: Story = {
  args: {
    as: 'a',
    onClick: fn(),
    href: 'https://github.com/herokwon',
    target: '_blank',
  },
  render: ({ ...props }) => (
    <BoxRender
      {...props}
      className={`bg-blue-light dark:bg-blue-dark ${props.className ?? ''}`}
    />
  ),
};

export const Span: Story = {
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
