import { Container, ELEMENT_SPACINGS, Flex } from '@herokwon/ui/common';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Flex',
  tags: ['autodocs'],
  component: Flex,
  args: {
    gap: 4,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  argTypes: {
    gap: {
      control: 'select',
      options: ELEMENT_SPACINGS,
    },
    flexDirection: {
      control: 'select',
      options: ['column', 'column-reverse', 'row', 'row-reverse'],
    },
    flexWrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    justifyContent: {
      control: 'select',
      options: [
        'center',
        'flex-start',
        'flex-end',
        'normal',
        'space-around',
        'space-between',
        'space-evenly',
        'stretch',
      ],
    },
    alignItems: {
      control: 'select',
      options: ['baseline', 'center', 'flex-start', 'flex-end', 'stretch'],
    },
  },
} satisfies Meta<typeof Flex>;
export default meta;

type Story = StoryObj<typeof meta>;

const FlexRender = ({ ...props }: Parameters<typeof Flex>[0]) => (
  <Container className="flex h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] items-center justify-center">
    <Flex
      {...props}
      className={`bg-secondary-light dark:bg-secondary-dark max-h-full max-w-full p-4 shadow-md ${props.className ?? ''}`}
    >
      {Array.from({ length: 3 }, (_, i) => (
        <Flex.Item
          key={crypto.randomUUID()}
          className="bg-primary-light dark:bg-primary-dark whitespace-nowrap px-8 py-4 font-bold"
        >{`Flex Item ${i + 1}`}</Flex.Item>
      ))}
    </Flex>
  </Container>
);

export const Default: Story = {
  render: ({ ...props }) => <FlexRender {...props} />,
};

export const ColumnDirection: Story = {
  args: {
    flexDirection: 'column',
  },
  render: ({ ...props }) => <FlexRender {...props} />,
};

export const Wrap: Story = {
  args: {
    flexWrap: 'wrap',
    className: 'w-400',
  },
  render: ({ ...props }) => <FlexRender {...props} />,
};
