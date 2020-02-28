# Next Plugin Mini GraphQL

Provides [Next.js](https://nextjs.org/) support for `.graphql` files using [`graphql-mini-transforms`](https://github.com/Shopify/graphql-tools-web/tree/master/packages/graphql-mini-transforms).

## Installation

```sh
npm install next-plugin-mini-graphql      # if using npm
yarn add next-plugin-graphql              # if using yarn
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js

const withGraphql = require('next-plugin-mini-graphql');

module.exports = withGraphql();
```

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js

const withGraphql = require('next-plugin-mini-graphql');

module.exports = withGraphql({
  webpack(config, options) {
    return config;
  },
});
```
