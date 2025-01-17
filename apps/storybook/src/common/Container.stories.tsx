import { Container, ELEMENT_SPACINGS } from '@herokwon/ui/common';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

const meta = {
  title: 'Common/Container',
  tags: ['autodocs'],
  component: Container,
  args: {
    as: 'div',
    fixed: false,
    maxWidth: 'md',
    padding: 0,
    children: 'Try resize!',
  },
  argTypes: {
    padding: {
      control: 'select',
      options: ELEMENT_SPACINGS,
    },
  },
} satisfies Meta<typeof Container>;
export default meta;

type Story = StoryObj<typeof meta>;

type Size = {
  width: number;
  height: number;
};

const ContainerRender = ({
  children,
  ...props
}: Parameters<typeof Container>[0]) => {
  const [containerSize, setContainerSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      const container = document.getElementById('container');

      if (container)
        setContainerSize({
          width: container.clientWidth,
          height: container.clientHeight,
        });
    };
    onResize();

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] border">
      <Container
        {...props}
        id="container"
        className={`bg-primary-light dark:bg-primary-dark flex size-full flex-col items-center justify-center text-xl font-bold ${props.className ?? ''}`}
      >
        {children}
        <p className="mt-4 whitespace-pre-wrap text-center text-base font-normal">{`width: ${containerSize.width}px\nheight: ${containerSize.height}px`}</p>
      </Container>
    </div>
  );
};

export const Default: Story = {
  render: ({ ...props }) => <ContainerRender {...props} />,
};

export const Fixed: Story = {
  args: {
    fixed: true,
  },
  render: ({ ...props }) => <ContainerRender {...props} />,
};
