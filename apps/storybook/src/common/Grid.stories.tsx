import { Container, Grid } from '@herokwon/ui/common';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Grid',
  tags: ['autodocs'],
  component: Grid,
  args: {
    as: 'div',
    gap: {
      row: 4,
      col: 4,
    },
  },
} satisfies Meta<typeof Grid>;
export default meta;

type Story = StoryObj<typeof meta>;

const GridRender = ({ ...props }: Parameters<typeof Grid>[0]) => (
  <Container className="flex h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] items-center justify-center">
    <Grid
      {...props}
      className={`bg-secondary-light dark:bg-secondary-dark max-h-full max-w-full overflow-y-auto p-4 shadow-md ${props.className ?? ''}`}
    >
      {Array.from({ length: 4 }, (_, i) => (
        <Grid.Item
          key={crypto.randomUUID()}
          className="bg-primary-light dark:bg-primary-dark flex items-center justify-center whitespace-nowrap px-8 py-4 font-bold"
        >{`Grid Item ${i + 1}`}</Grid.Item>
      ))}
    </Grid>
  </Container>
);

export const Default: Story = {
  render: ({ ...props }) => <GridRender {...props} />,
};

export const Gap: Story = {
  args: {
    gap: {
      row: 8,
    },
  },
  render: ({ ...props }) => <GridRender {...props} />,
};

export const JustifyContent: Story = {
  args: {
    justify: {
      content: 'center',
    },
    className: 'w-full',
  },
  render: ({ ...props }) => <GridRender {...props} />,
};

export const JustifyItems: Story = {
  args: {
    justify: {
      items: 'end',
    },
    className: 'w-full',
  },
  render: ({ ...props }) => <GridRender {...props} />,
};

export const AlignContent: Story = {
  args: {
    align: {
      content: 'center',
    },
    className: 'h-full',
  },
  render: ({ ...props }) => <GridRender {...props} />,
};

export const AlignItems: Story = {
  args: {
    align: {
      items: 'center',
    },
    className: 'h-full',
  },
  render: ({ ...props }) => <GridRender {...props} />,
};

export const AutoRows: Story = {
  args: {
    auto: {
      rows: '100px',
    },
  },
  render: ({ ...props }) => <GridRender {...props} />,
};

export const AutoColumns: Story = {
  args: {
    auto: {
      cols: '200px',
    },
  },
  render: ({ ...props }) => <GridRender {...props} />,
};

export const TemplateRows: Story = {
  args: {
    template: {
      rows: 'calc(50vh - 2.5rem) calc(50vh - 2.5rem)',
    },
  },
  render: ({ ...props }) => <GridRender {...props} />,
};

export const TemplateColumns: Story = {
  args: {
    template: {
      cols: 'repeat(auto-fit, minmax(0, 300px))',
    },
  },
  render: ({ ...props }) => <GridRender {...props} />,
};
