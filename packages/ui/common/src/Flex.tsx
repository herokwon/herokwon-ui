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
    gap?: ElementSpacing;
    flexDirection?: PropertyWithoutGlobals<Property.FlexDirection>;
    flexWrap?: PropertyWithoutGlobals<Property.FlexWrap>;
    justifyContent?: Exclude<
      PropertyWithoutGlobals<Property.JustifyContent>,
      'start' | 'end' | 'left' | 'right'
    >;
    alignItems?: Exclude<
      PropertyWithoutGlobals<Property.AlignItems>,
      'normal' | 'start' | 'end' | 'self-start' | 'self-end'
    >;
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
  gap = 0,
  flexDirection = 'row',
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
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
        gap: `${gap * 0.25}rem`,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
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
