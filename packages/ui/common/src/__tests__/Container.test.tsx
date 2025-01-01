import { render, screen } from '@testing-library/react';

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

        expect(container).toBeInTheDocument();
        expect(container).toHaveTextContent('props');
        if (!isFixed) expect(container).toHaveClass(`max-w-screen-${size}`);
        else {
          expect(container).toHaveClass('container');
          expect(container).toHaveClass(`${size}:!max-w-screen-${size}`);
        }
      });
    }
  }
});
