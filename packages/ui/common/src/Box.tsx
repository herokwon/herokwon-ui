import type { PolymorphicPropsWithoutRef } from './types';

type BoxProps<T extends React.ElementType> = PolymorphicPropsWithoutRef<T>;

export default function Box<T extends React.ElementType = 'div'>({
  as,
  children,
  ...props
}: BoxProps<T>) {
  const Element = as || 'div';

  return <Element {...props}>{children}</Element>;
}
