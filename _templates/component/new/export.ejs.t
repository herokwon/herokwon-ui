---
to: packages/ui/<%= category %>/src/index.ts
inject: true
append: true
---
export { default as <%= component %> } from './<%= component %>';
