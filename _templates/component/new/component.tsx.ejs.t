---
to: packages/ui/<%= category %>/src/<%= component %>.tsx
---
import type { <%= h.inflection.capitalize(category) %>Props } from './types';

type <%= component %>Props = <%= h.inflection.capitalize(category) %>Props;

export default function <%= component %>({}: <%= component %>Props) {
  return <></>;
}
