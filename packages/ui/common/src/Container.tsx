import type {
  ElementSize,
  ElementSpacing,
  OmitStrict,
  PolymorphicPropsWithoutRef,
} from './types';

import Box from './Box';

type ContainerElementType = 'div' | 'section';
type ContainerProps<T extends ContainerElementType> =
  PolymorphicPropsWithoutRef<
    T,
    {
      fixed?: boolean;
      maxWidth?: ElementSize;
      padding?: ElementSpacing;
    }
  >;

export default function Container<T extends ContainerElementType = 'div'>({
  as,
  children,
  fixed = false,
  maxWidth,
  padding = 0,
  ...props
}: ContainerProps<T>) {
  const element = as || 'div';
  const elemProps = props as OmitStrict<
    React.ComponentPropsWithoutRef<typeof element>,
    'children'
  >;

  return (
    <Box
      {...elemProps}
      as={element}
      className={`${
        fixed
          ? 'container'
          : !maxWidth
            ? 'w-full'
            : maxWidth === 'xs'
              ? 'max-w-lg'
              : maxWidth === 'sm'
                ? 'max-w-(--breakpoint-md)'
                : maxWidth === 'md'
                  ? 'max-w-(--breakpoint-lg)'
                  : maxWidth === 'lg'
                    ? 'max-w-(--breakpoint-xl)'
                    : 'max-w-(--breakpoint-2xl)'
      } ${elemProps.className ?? ''}`}
      style={{
        ...elemProps.style,
        padding: `${padding * 0.25}rem`,
      }}
    >
      {children}
    </Box>
  );
}
