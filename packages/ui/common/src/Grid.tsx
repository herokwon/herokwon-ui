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
    gap?: {
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
  gap,
  auto,
  template,
  justify,
  align,
  ...props
}: GridProps<T>) {
  const element = as || 'div';
  const elemProps = props as OmitStrict<
    React.ComponentPropsWithoutRef<typeof element>,
    'children'
  >;

  return (
    <Box
      {...elemProps}
      as={element}
      className={`grid ${elemProps.className ?? ''}`}
      style={{
        ...elemProps.style,
        rowGap: `${(gap?.row ?? 0) * 0.25}rem`,
        columnGap: `${(gap?.col ?? 0) * 0.25}rem`,
        gridAutoRows: auto?.rows ?? 'auto',
        gridAutoColumns: auto?.cols ?? 'auto',
        gridAutoFlow: auto?.flow ?? 'row',
        gridTemplateColumns: template?.cols ?? 'none',
        gridTemplateRows: template?.rows ?? 'none',
        justifyItems: justify?.items ?? 'legacy',
        justifyContent: justify?.content ?? 'normal',
        alignItems: align?.items ?? 'normal',
        alignContent: align?.content ?? 'normal',
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
  row,
  column,
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
        gridRowStart: row?.start ?? 'auto',
        gridRowEnd: row?.end ?? 'auto',
        gridColumnStart: column?.start ?? 'auto',
        gridColumnEnd: column?.end ?? 'auto',
        justifySelf,
        alignSelf,
      }}
    >
      {children}
    </Box>
  );
};

Grid.Item = GridItem;
