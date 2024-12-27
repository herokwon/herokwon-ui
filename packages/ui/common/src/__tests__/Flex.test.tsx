import { render, screen } from '@testing-library/react';

import Flex from '../Flex';

describe('Flex', () => {
  it('should render with default props', () => {
    render(<Flex>default</Flex>);
    const flex = screen.getByText('default');

    expect(flex).toBeInTheDocument();
    expect(flex.tagName).toBe('DIV');
    expect(flex).toHaveClass('flex');
    expect(flex).toHaveStyle('flex-direction: row');
    expect(flex).toHaveStyle('flex-wrap: nowrap');
    expect(flex).toHaveStyle('gap: 0rem');
  });

  it('should render as a different element', () => {
    render(<Flex as="section">section</Flex>);
    const flex = screen.getByText('section');

    expect(flex).toBeInTheDocument();
    expect(flex.tagName).toBe('SECTION');
  });

  it('should pass props to the element correctly', () => {
    render(
      <Flex data-testid="flex" flexDirection="column" flexWrap="wrap" gap={4}>
        props
      </Flex>,
    );
    const flex = screen.getByTestId('flex');

    expect(flex).toHaveTextContent('props');
    expect(flex).toHaveStyle('flex-direction: column');
    expect(flex).toHaveStyle('flex-wrap: wrap');
    expect(flex).toHaveStyle('gap: 1rem');
  });
});

describe('FlexItem', () => {
  it('should render with default props', () => {
    render(<Flex.Item>default</Flex.Item>);
    const flexItem = screen.getByText('default');

    expect(flexItem).toBeInTheDocument();
    expect(flexItem.tagName).toBe('DIV');
    expect(flexItem).toHaveStyle('flex-basis: auto');
    expect(flexItem).toHaveStyle('flex-grow: 0');
    expect(flexItem).toHaveStyle('flex-shrink: 1');
  });

  it('should render as a different element', () => {
    render(<Flex.Item as="span">span</Flex.Item>);
    const FlexItem = screen.getByText('span');

    expect(FlexItem).toBeInTheDocument();
    expect(FlexItem.tagName).toBe('SPAN');
  });

  it('should pass props to the element correctly', () => {
    render(
      <Flex.Item
        data-testid="flex-item"
        flexBasis="content"
        flexGrow={1}
        flexShrink={2}
      >
        props
      </Flex.Item>,
    );
    const flexItem = screen.getByTestId('flex-item');

    expect(flexItem).toHaveTextContent('props');
    expect(flexItem).toHaveStyle('flex-basis: content');
    expect(flexItem).toHaveStyle('flex-grow: 1');
    expect(flexItem).toHaveStyle('flex-shrink: 2');
  });
});
