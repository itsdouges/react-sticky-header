# [react-library-boilerplate](https://github.com/madou/react-library-boilerplate)

[![NPM version](http://img.shields.io/npm/v/react-library-boilerplate.svg?style=flat-square)](https://www.npmjs.com/package/react-library-boilerplate)
[![NPM downloads](http://img.shields.io/npm/dm/react-library-boilerplate.svg?style=flat-square)](https://www.npmjs.com/package/react-library-boilerplate)
[![Build Status](http://img.shields.io/travis/madou/react-library-boilerplate/master.svg?style=flat-square)](https://travis-ci.org/madou/react-library-boilerplate)
[![codecov](https://codecov.io/gh/madou/react-library-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/madou/react-library-boilerplate)
[![Dependency Status](http://img.shields.io/david/madou/react-library-boilerplate.svg?style=flat-square)](https://david-dm.org/madou/react-library-boilerplate)

> Short sentance for what this module does!

## How to Install

Using either npm:

```sh
npm install react-library-boilerplate
```

Or yarn:

```sh
yarn add react-library-boilerplate
```

## Usage

### returnsTwo(): number

```js
import returnsTwo from 'react-library-boilerplate';
returnsTwo();
// 2
```

### `<Component />`

```javascript
import 'react-library-boilerplate/styles.css';
import { Component } from 'react-library-boilerplate';
import ReactDOM from 'react-dom';

ReacDOM.render(
  <Component initialCount={2} />,
  document.getElementById('container')
);
```

| prop    | type    | required |
|---------|---------|----------|
| initialCount | number  | no      |

## Boilerplate Information

This boilerplate was made to support nyc, travis, npm publish, codecov, react, react storybook, mocha, es6 builds, all out of the box.

### Local development

```bash
npm start
```

### Testing

```bash
npm run tdd
```

### Publishing

Use `np` for publishing to npm. Make sure `CHANGELOG.md` is updated.

```bash
np major|minor|patch
```
