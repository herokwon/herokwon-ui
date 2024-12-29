import { render, screen } from '@testing-library/react';

import Grid from '../Grid';

describe('Grid', () => {
  it('should render with default props', () => {
    render(<Grid>default</Grid>);
    const grid = screen.getByText('default');

    expect(grid).toBeInTheDocument();
    expect(grid.tagName).toBe('DIV');
    expect(grid).toHaveTextContent('default');
    expect(grid).toHaveClass('grid');
  });

  it('should render as a different element', () => {
    render(<Grid as="section">section</Grid>);
    const grid = screen.getByText('section');

    expect(grid).toBeInTheDocument();
    expect(grid.tagName).toBe('SECTION');
    expect(grid).toHaveTextContent('section');
  });

  it('should pass props to the element correctly', () => {
    render(
      <Grid
        data-testid="grid"
        gap={{
          row: 8,
          col: 4,
        }}
        auto={{
          flow: 'row dense',
        }}
        template={{
          rows: 'repeat(auto-fit, minmax(0, 200px))',
        }}
        justify={{
          content: 'center',
        }}
        align={{
          items: 'center',
        }}
      >
        props
      </Grid>,
    );
    const grid = screen.getByTestId('grid');

    expect(grid).toBeInTheDocument();
    expect(grid).toHaveTextContent('props');
    expect(grid).toHaveStyle({
      'row-gap': '2rem',
      'column-gap': '1rem',
      'grid-auto-flow': 'row dense',
      'grid-template-rows': 'repeat(auto-fit, minmax(0, 200px))',
      'justify-content': 'center',
      'align-items': 'center',
    });
  });
});

describe('GridItem', () => {
  it('should render with default props', () => {
    render(<Grid.Item>default</Grid.Item>);
    const gridItem = screen.getByText('default');

    expect(gridItem).toBeInTheDocument();
    expect(gridItem.tagName).toBe('DIV');
    expect(gridItem).toHaveTextContent('default');
    expect(gridItem).toHaveStyle({
      order: '0',
      'grid-row-start': 'auto',
      'grid-row-end': 'auto',
      'grid-column-start': 'auto',
      'grid-column-end': 'auto',
    });
  });

  it('should render as a different element', () => {
    render(<Grid.Item as="span">span</Grid.Item>);
    const gridItem = screen.getByText('span');

    expect(gridItem).toBeInTheDocument();
    expect(gridItem.tagName).toBe('SPAN');
    expect(gridItem).toHaveTextContent('span');
  });

  it('should pass props to the element correctly', () => {
    render(
      <Grid.Item
        data-testid="grid-item"
        order={1}
        row={{
          start: 1,
          end: 2,
        }}
        column={{
          start: 2,
          end: 'span 2',
        }}
        justifySelf="center"
        alignSelf="center"
      >
        props
      </Grid.Item>,
    );
    const gridItem = screen.getByTestId('grid-item');

    expect(gridItem).toBeInTheDocument();
    expect(gridItem).toHaveTextContent('props');
    expect(gridItem).toHaveStyle({
      order: '1',
      'grid-row-start': '1',
      'grid-row-end': '2',
      'grid-column-start': '2',
      'grid-column-end': 'span 2',
      'justify-self': 'center',
      'align-self': 'center',
    });
  });
});
