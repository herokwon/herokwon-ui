---
to: apps/storybook/src/<%= category %>/<%= component %>.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react';
import { <%= component %> } from '@ui';

const meta = {
  title: '<%= h.inflection.capitalize(category) %>/<%= component %>',
  tags: ['autodocs'],
  component: <%= component %>
} satisfies Meta<typeof <%= component %>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
