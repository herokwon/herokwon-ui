import type { Property } from 'csstype';

import type {
  ElementSpacing,
  OmitStrict,
  PolymorphicPropsWithoutRef,
  PropertyWithoutGlobals,
} from './types';

import Box from './Box';

type GridProps<T extends React.ElementType> = PolymorphicPropsWithoutRef<
  T,
  {
    gap?:
      | ElementSpacing
      | {
          row?: ElementSpacing;
          col?: ElementSpacing;
        };
    auto?: {
      rows?: PropertyWithoutGlobals<Property.GridAutoRows>;
      cols?: PropertyWithoutGlobals<Property.GridAutoColumns>;
      flow?:
        | PropertyWithoutGlobals<Property.GridAutoFlow>
        | 'row dense'
        | 'column dense';
    };
    template?: {
      rows?: PropertyWithoutGlobals<Property.GridTemplateRows>;
      cols?: PropertyWithoutGlobals<Property.GridTemplateColumns>;
    };
    justify?: {
      items?: PropertyWithoutGlobals<Property.JustifyItems>;
      content?: PropertyWithoutGlobals<Property.JustifyContent>;
    };
    align?: {
      items?: PropertyWithoutGlobals<Property.AlignItems>;
      content?: PropertyWithoutGlobals<Property.AlignContent>;
    };
  }
>;
type GridItemProps<T extends React.ElementType> = PolymorphicPropsWithoutRef<
  T,
  {
    order?: number;
    row?: {
      start?: number | `span ${number}` | 'auto';
      end?: number | `span ${number}` | 'auto';
    };
    column?: {
      start?: number | `span ${number}` | 'auto';
      end?: number | `span ${number}` | 'auto';
    };
    justifySelf?: PropertyWithoutGlobals<Property.JustifySelf>;
    alignSelf?: PropertyWithoutGlobals<Property.AlignSelf>;
  }
>;

export default function Grid<T extends React.ElementType = 'div'>({
  as,
  children,
  gap = 0,
  auto = {
    rows: 'auto',
    cols: 'auto',
    flow: 'row',
  },
  template = {
    rows: 'none',
    cols: 'none',
  },
  justify = {
    items: 'legacy',
    content: 'normal',
  },
  align = {
    items: 'normal',
    content: 'normal',
  },
  ...props
}: GridProps<T>) {
  const element = as || 'div';
  const elemProps = props as OmitStrict<
    React.ComponentPropsWithoutRef<typeof element>,
    'children'
  >;
  const rowGap = typeof gap === 'number' ? gap : (gap.row ?? 0);
  const columnGap = typeof gap === 'number' ? gap : (gap.col ?? 0);

  return (
    <Box
      {...elemProps}
      as={element}
      className={`grid ${elemProps.className ?? ''}`}
      style={{
        ...elemProps.style,
        rowGap: `${rowGap * 0.25}rem`,
        columnGap: `${columnGap * 0.25}rem`,
        gridAutoRows: auto.rows,
        gridAutoColumns: auto.cols,
        gridAutoFlow: auto.flow,
        gridTemplateColumns: template.cols,
        gridTemplateRows: template.rows,
        justifyItems: justify.items,
        justifyContent: justify.content,
        alignItems: align.items,
        alignContent: align.content,
      }}
    >
      {children}
    </Box>
  );
}

const GridItem = <T extends React.ElementType = 'div'>({
  as,
  children,
  order = 0,
  row = {
    start: 'auto',
    end: 'auto',
  },
  column = {
    start: 'auto',
    end: 'auto',
  },
  justifySelf = 'auto',
  alignSelf = 'auto',
  ...props
}: GridItemProps<T>) => {
  const element = as || 'div';
  const elemProps = props as OmitStrict<
    React.ComponentPropsWithoutRef<typeof element>,
    'children'
  >;

  return (
    <Box
      {...elemProps}
      as={element}
      style={{
        ...elemProps.style,
        order,
        gridRowStart: row.start,
        gridRowEnd: row.end,
        gridColumnStart: column.start,
        gridColumnEnd: column.end,
        justifySelf,
        alignSelf,
      }}
    >
      {children}
    </Box>
  );
};

Grid.Item = GridItem;
