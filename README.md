# [react-sticky-header](https://github.com/madou/react-sticky-header)

[![NPM version](http://img.shields.io/npm/v/react-sticky-header.svg?style=flat-square)](https://www.npmjs.com/package/react-sticky-header)
[![NPM downloads](http://img.shields.io/npm/dm/react-sticky-header.svg?style=flat-square)](https://www.npmjs.com/package/react-sticky-header)
[![Build Status](http://img.shields.io/travis/madou/react-sticky-header/master.svg?style=flat-square)](https://travis-ci.org/madou/react-sticky-header)
[![codecov](https://codecov.io/gh/madou/react-sticky-header/branch/master/graph/badge.svg)](https://codecov.io/gh/madou/react-sticky-header)
[![Dependency Status](http://img.shields.io/david/madou/react-sticky-header.svg?style=flat-square)](https://david-dm.org/madou/react-sticky-header)

Lightweight sticky header made for React that works with both colours and images. You can see an example implementation over at [Guild Wars 2 Armory](https://gw2armory.com).

<p align="center">
  <img src="https://github.com/madou/react-sticky-header/blob/master/example.gif?raw=true" style="margin:0 auto" />
</p>

## Installation

```sh
npm install react-sticky-header
```

## Usage

```javascript
// Import the base CSS, if you're using webpack just import them straight.
// Else import them into your base CSS.
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

const MyHeader = () => (
  <StickyHeader
    // This is the sticky part of the header.
    header={
      <div className="Header_root">
        <h1 className="Header_title">ReactStickyHeader</h1>

        <ul className="Header_links">
          <li className="Header_link">When</li>
          <li className="Header_link">Why</li>
          <li className="Header_link">About</li>
        </ul>
      </div>
    }
  >
    <section>
      <p>
        This section will be what the sticky header scrolls over before entering into
        sticky state. See the gif above or run the test story book to see examples.
      </p>
    </section>
  </StickyHeader>
);
```

| prop | type | required | description |
|-|-|-|-|
| header | Children | yes | A react element that will be the sticky part of the header. |
| children | Children  | no | Elements that you want to appear under the sticky header. |
| headerOnly | boolean | no | Use this to force the header into "sticky" mode. It will automatically hide the `children` and calculate the height spacer for `header`. |
| onSticky | (boolean) => void | no | Callback fired when the header enters/leaves sticky state. See Sticky State section. |
| backgroundImage | string | no | Self explanatory. |
| backgroundColor | string | no | Self explanatory. |
| className | string | no | Self explanatory. |

### Sticky State

When the component enters sticky state, it will add a class name `is-sticky` to the root element of the header.

## React Story Book

To run the component in various states, run the following command then go to `http://localhost:6006/`.

```bash
npm start
```

### Testing

```bash
npm test
```
