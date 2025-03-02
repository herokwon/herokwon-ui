import { render, screen } from '@testing-library/react';

import type { ElementSize } from '../types';

import { ELEMENT_SIZES } from '../constants';

import Container from '../Container';

describe('Container', () => {
  it('should render with default props', () => {
    render(<Container>default</Container>);
    const container = screen.getByText('default');

    expect(container).toBeInTheDocument();
    expect(container.tagName).toBe('DIV');
    expect(container).toHaveTextContent('default');
  });

  it('should render as a section element', () => {
    render(<Container as="section">section</Container>);
    const container = screen.getByText('section');

    expect(container).toBeInTheDocument();
    expect(container.tagName).toBe('SECTION');
    expect(container).toHaveTextContent('section');
  });

  const getStyleContent = (size: ElementSize) => {
    switch (size) {
      case 'xs':
        return 'max-w-lg';
      case 'sm':
        return 'max-w-(--breakpoint-md)';
      case 'md':
        return 'max-w-(--breakpoint-lg)';
      case 'lg':
        return 'max-w-(--breakpoint-xl)';
      case 'xl':
        return 'max-w-(--breakpoint-2xl)';
    }
  };

  for (const isFixed of [true, false]) {
    for (const size of ELEMENT_SIZES) {
      it('should pass props to the element correctly', () => {
        render(
          <Container
            data-testid="container"
            fixed={isFixed}
            maxWidth={size}
            padding={4}
          >
            props
          </Container>,
        );
        const container = screen.getByTestId('container');
        const styleContent = getStyleContent(size);

        expect(container).toBeInTheDocument();
        expect(container).toHaveTextContent('props');

        expect(container).toHaveClass(isFixed ? 'container' : styleContent);
      });
    }
  }
});
