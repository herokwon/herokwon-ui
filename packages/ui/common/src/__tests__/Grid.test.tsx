import { render, screen } from '@testing-library/react';

import Grid from '../Grid';

describe('Grid', () => {
  it('should render with default props', () => {
    render(<Grid>default</Grid>);
    const grid = screen.getByText('default');

    expect(grid).toBeInTheDocument();
    expect(grid.tagName).toBe('DIV');
    expect(grid).toHaveClass('grid');
  });

  it('should render as a different element', () => {
    render(<Grid as="section">section</Grid>);
    const grid = screen.getByText('section');

    expect(grid).toBeInTheDocument();
    expect(grid.tagName).toBe('SECTION');
  });

  it('should pass props to the element correctly', () => {
    render(
      <Grid
        data-testid="grid"
        gap={{
          row: 8,
          col: 4,
        }}
      >
        props
      </Grid>,
    );
    const grid = screen.getByTestId('grid');

    expect(grid).toHaveStyle('row-gap: 2rem');
    expect(grid).toHaveStyle('column-gap: 1rem');
  });
});

describe('GridItem', () => {
  it('should render with default props', () => {
    render(<Grid.Item>default</Grid.Item>);
    const gridItem = screen.getByText('default');

    expect(gridItem).toBeInTheDocument();
    expect(gridItem.tagName).toBe('DIV');
    expect(gridItem).toHaveStyle('order: 0');
    expect(gridItem).toHaveStyle('grid-row-start: auto');
    expect(gridItem).toHaveStyle('grid-row-end: auto');
    expect(gridItem).toHaveStyle('grid-column-start: auto');
    expect(gridItem).toHaveStyle('grid-column-end: auto');
  });

  it('should render as a different element', () => {
    render(<Grid.Item as="span">span</Grid.Item>);
    const gridItem = screen.getByText('span');

    expect(gridItem).toBeInTheDocument();
    expect(gridItem.tagName).toBe('SPAN');
  });

  it('should pass props to the element correctly', () => {
    render(
      <Grid.Item
        data-testid="grid-item"
        order={1}
        justifySelf="center"
        alignSelf="center"
      >
        props
      </Grid.Item>,
    );
    const gridItem = screen.getByTestId('grid-item');

    expect(gridItem).toHaveTextContent('props');
    expect(gridItem).toHaveStyle('order: 1');
    expect(gridItem).toHaveStyle('justify-self: center');
    expect(gridItem).toHaveStyle('align-self: center');
  });
});
