import { render, screen } from '@testing-library/react';

import Box from '../Box';

describe('Box', () => {
  it('should render as a div by default', () => {
    render(<Box>default</Box>);
    const box = screen.getByText('default');

    expect(box).toBeInTheDocument();
    expect(box.tagName).toBe('DIV');
  });

  it('should render as a different element', () => {
    render(
      <Box as="a" href="/">
        anchor
      </Box>,
    );
    const box = screen.getByText('anchor');

    expect(box).toBeInTheDocument();
    expect(box.tagName).toBe('A');
  });

  it('should pass props to the element correctly', () => {
    render(
      <Box data-testid="box" className="box">
        props
      </Box>,
    );
    const box = screen.getByTestId('box');

    expect(box).toBeInTheDocument();
    expect(box).toHaveClass('box');
    expect(box).toHaveTextContent('props');
  });

  it('should render children correctly', () => {
    render(
      <Box>
        <span>child</span>
      </Box>,
    );
    const child = screen.getByText('child');

    expect(child).toBeInTheDocument();
    expect(child.tagName).toBe('SPAN');
  });
});
