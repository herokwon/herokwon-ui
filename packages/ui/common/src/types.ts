import type { Globals } from 'csstype';

import { ELEMENT_SIZES, ELEMENT_SPACINGS, ELEMENT_STATUS } from './constants';

// Element
export type ElementSize = (typeof ELEMENT_SIZES)[number];
export type ElementBaseSize = Exclude<ElementSize, 'xs' | 'xl'>;
export type ElementSpacing = (typeof ELEMENT_SPACINGS)[number];
export type ElementStatus = {
  [key in (typeof ELEMENT_STATUS)[number]]?: boolean;
};

// Global
export type OmitStrict<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};
export type Children = NonNullable<React.ReactNode>;
export type PropsWithChildren<Props extends object = {}> = {
  children: Children;
} & Omit<Props, 'children'>;
export type PropsWithId<Props extends object = {}> = {
  id: string;
} & Omit<Props, 'id'>;
export type PropertyWithoutGlobals<P> = Exclude<P, Globals>;

// Polymorphic
type AsProp<T extends React.ElementType> = {
  as?: T;
};
export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];
export type PolymorphicPropsWithoutRef<
  T extends React.ElementType,
  Props extends object = {},
> = AsProp<T> &
  Props &
  OmitStrict<React.ComponentPropsWithoutRef<T>, keyof (AsProp<T> & Props)>;
export type PolymorphicPropsWithRef<
  T extends React.ElementType,
  Props extends object = {},
> = {
  ref?: PolymorphicRef<T>;
} & PolymorphicPropsWithoutRef<T, Props>;
