---
to: packages/ui/<%= category %>/tsconfig.json
---
{
  "extends": "@repo/typescript-config/nextjs.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "outDir": "dist",
    "types": ["@testing-library/jest-dom"]
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules", "dist"]
}
