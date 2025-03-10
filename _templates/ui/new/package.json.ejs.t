---
to: packages/ui/<%= category %>/package.json
sh: cd packages/ui/<%= category %> && ncu -u && npm install
---
{
  "name": "@herokwon/ui-<%= category %>",
  "version": "0.0.0",
  "private": false,
  "type": "module",
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist/**/*"
  ],
  "publishConfig": {
    "access": "public",
    "provenance": true
  },
  "scripts": {
    "build": "tsup",
    "lint": "eslint . --max-warnings 0",
    "check-types": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15",
    "react": "^19",
    "react-dom": "^19"
  },
  "peerDependencies": {
    "next": "^15",
    "react": "^19",
    "react-dom": "^19"
  },
  "devDependencies": {
    "@repo/tailwind-config": "*",
    "@repo/typescript-config": "*",
    "@types/eslint": "^9",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "postcss": "^8",
    "tailwindcss": "^3.4.16",
    "typescript": "^5.7.2"
  },
  "author": {
    "name": "HeroKwon",
    "email": "contact@herokwon.dev",
    "url": "https://github.com/herokwon"
  },
  "bugs": {
    "email": "contact@herokwon.dev",
    "url": "https://github.com/herokwon/herokwon-ui/issues"
  },
  "contributors": [
    {
      "name": "HeroKwon",
      "email": "contact@herokwon.dev",
      "url": "https://github.com/herokwon"
    }
  ],
  "keywords": [
    "nextjs",
    "tailwindcss",
    "storybook",
    "design-system"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/herokwon/herokwon-ui.git"
  },
  "description": "This is a <%= category %>-package for simple design system by HeroKwon.",
  "license": "MIT"
}
