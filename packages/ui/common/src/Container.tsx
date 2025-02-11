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
          ? `xs:is-[.container]:max-w-[512px] container xl:max-w-(--breakpoint-xl)! ${
              maxWidth === 'xs'
                ? 'xs:max-w-screen-xs!'
                : maxWidth === 'sm'
                  ? 'sm:max-w-(--breakpoint-sm)!'
                  : maxWidth === 'md'
                    ? 'md:max-w-(--breakpoint-md)!'
                    : maxWidth === 'lg'
                      ? 'lg:max-w-(--breakpoint-lg)!'
                      : 'xl:max-w-(--breakpoint-xl)!'
            }`
          : maxWidth === 'xs'
            ? 'max-w-screen-xs'
            : maxWidth === 'sm'
              ? 'max-w-(--breakpoint-sm)'
              : maxWidth === 'md'
                ? 'max-w-(--breakpoint-md)'
                : maxWidth === 'lg'
                  ? 'max-w-(--breakpoint-lg)'
                  : 'max-w-(--breakpoint-xl)'
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
