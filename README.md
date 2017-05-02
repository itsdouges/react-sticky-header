# [react-sticky-header](https://github.com/madou/react-sticky-header)

[![NPM version](http://img.shields.io/npm/v/react-sticky-header.svg?style=flat-square)](https://www.npmjs.com/package/react-sticky-header)
[![NPM downloads](http://img.shields.io/npm/dm/react-sticky-header.svg?style=flat-square)](https://www.npmjs.com/package/react-sticky-header)
[![Build Status](http://img.shields.io/travis/madou/react-sticky-header/master.svg?style=flat-square)](https://travis-ci.org/madou/react-sticky-header)
[![codecov](https://codecov.io/gh/madou/react-sticky-header/branch/master/graph/badge.svg)](https://codecov.io/gh/madou/react-sticky-header)
[![Dependency Status](http://img.shields.io/david/madou/react-sticky-header.svg?style=flat-square)](https://david-dm.org/madou/react-sticky-header)

> Short sentance for what this module does!

## How to Install

Using either npm:

```sh
npm install react-sticky-header
```

Or yarn:

```sh
yarn add react-sticky-header
```

## Usage

### returnsTwo(): number

```js
import returnsTwo from 'react-sticky-header';
returnsTwo();
// 2
```

### `<Component />`

```javascript
import 'react-sticky-header/styles.css';
import { Component } from 'react-sticky-header';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Component initialCount={2} />,
  document.getElementById('container')
);
```

| prop    | type    | required |
|---------|---------|----------|
| initialCount | number  | no      |

### Local development

```bash
npm start
```

### Testing

```bash
npm run tdd
```
