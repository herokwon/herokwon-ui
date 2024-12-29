import { render, screen } from '@testing-library/react';

import Flex from '../Flex';

describe('Flex', () => {
  it('should render with default props', () => {
    render(<Flex>default</Flex>);
    const flex = screen.getByText('default');

    expect(flex).toBeInTheDocument();
    expect(flex.tagName).toBe('DIV');
    expect(flex).toHaveTextContent('default');
    expect(flex).toHaveClass('flex');
    expect(flex).toHaveStyle({
      'flex-direction': 'row',
      'flex-wrap': 'nowrap',
      gap: '0rem',
    });
  });

  it('should render as a different element', () => {
    render(<Flex as="section">section</Flex>);
    const flex = screen.getByText('section');

    expect(flex).toBeInTheDocument();
    expect(flex.tagName).toBe('SECTION');
    expect(flex).toHaveTextContent('section');
  });

  it('should pass props to the element correctly', () => {
    render(
      <Flex data-testid="flex" flexDirection="column" flexWrap="wrap" gap={4}>
        props
      </Flex>,
    );
    const flex = screen.getByTestId('flex');

    expect(flex).toBeInTheDocument();
    expect(flex).toHaveTextContent('props');
    expect(flex).toHaveStyle({
      'flex-direction': 'column',
      'flex-wrap': 'wrap',
      gap: '1rem',
    });
  });
});

describe('FlexItem', () => {
  it('should render with default props', () => {
    render(<Flex.Item>default</Flex.Item>);
    const flexItem = screen.getByText('default');

    expect(flexItem).toBeInTheDocument();
    expect(flexItem.tagName).toBe('DIV');
    expect(flexItem).toHaveTextContent('default');
    expect(flexItem).toHaveStyle({
      'flex-basis': 'auto',
      'flex-grow': '0',
      'flex-shrink': '1',
    });
  });

  it('should render as a different element', () => {
    render(<Flex.Item as="span">span</Flex.Item>);
    const flexItem = screen.getByText('span');

    expect(flexItem).toBeInTheDocument();
    expect(flexItem.tagName).toBe('SPAN');
    expect(flexItem).toHaveTextContent('span');
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

    expect(flexItem).toBeInTheDocument();
    expect(flexItem).toHaveTextContent('props');
    expect(flexItem).toHaveStyle({
      'flex-basis': 'content',
      'flex-grow': '1',
      'flex-shrink': '2',
    });
  });
});
