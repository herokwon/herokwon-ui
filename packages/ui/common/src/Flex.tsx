import type { Property } from 'csstype';

import type {
  ElementSpacing,
  OmitStrict,
  PolymorphicPropsWithoutRef,
  PropertyWithoutGlobals,
} from './types';

import Box from './Box';

type FlexProps<T extends React.ElementType> = PolymorphicPropsWithoutRef<
  T,
  {
    flexDirection?: PropertyWithoutGlobals<Property.FlexDirection>;
    flexWrap?: PropertyWithoutGlobals<Property.FlexWrap>;
    gap?: ElementSpacing;
  }
>;
type FlexItemProps<T extends React.ElementType> = PolymorphicPropsWithoutRef<
  T,
  {
    flexBasis?: PropertyWithoutGlobals<Property.FlexBasis>;
    flexGrow?: PropertyWithoutGlobals<Property.FlexGrow>;
    flexShrink?: PropertyWithoutGlobals<Property.FlexShrink>;
  }
>;

export default function Flex<T extends React.ElementType = 'div'>({
  as,
  children,
  flexDirection = 'row',
  flexWrap = 'nowrap',
  gap = 0,
  ...props
}: FlexProps<T>) {
  const element = as || 'div';
  const elemProps = props as OmitStrict<
    React.ComponentPropsWithoutRef<typeof element>,
    'children'
  >;

  return (
    <Box
      {...elemProps}
      as={element}
      className={`flex ${elemProps.className ?? ''}`}
      style={{
        ...elemProps.style,
        flexDirection,
        flexWrap,
        gap: `${gap * 0.25}rem`,
      }}
    >
      {children}
    </Box>
  );
}

const FlexItem = <T extends React.ElementType = 'div'>({
  as,
  children,
  flexBasis = 'auto',
  flexGrow = 0,
  flexShrink = 1,
  ...props
}: FlexItemProps<T>) => {
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
        flexBasis,
        flexGrow,
        flexShrink,
      }}
    >
      {children}
    </Box>
  );
};

Flex.Item = FlexItem;
