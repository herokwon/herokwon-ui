---
to: packages/ui/<%= category %>/package.json
sh: cd packages/ui/<%= category %> && npm install
---
{
  "name": "@herokwon/ui-<%= category %>",
  "version": "0.0.0",
  "private": false,
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "type": "module",
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
    "lint": "eslint . --max-warnings 0"
  },
  "dependencies": {
    "next": "^14",
    "react": "^18",
    "react-dom": "^18"
  },
  "peerDependencies": {
    "next": "^14",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@repo/tailwind-config": "*",
    "@repo/typescript-config": "*",
    "@types/eslint": "^8",
    "@types/node": "^22",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "postcss": "^8",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.3"
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
