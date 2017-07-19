# [react-sticky-header](https://github.com/madou/react-sticky-header)

[![NPM version](http://img.shields.io/npm/v/react-sticky-header.svg?style=flat-square)](https://www.npmjs.com/package/react-sticky-header)
[![NPM downloads](http://img.shields.io/npm/dm/react-sticky-header.svg?style=flat-square)](https://www.npmjs.com/package/react-sticky-header)
[![Build Status](http://img.shields.io/travis/madou/react-sticky-header/master.svg?style=flat-square)](https://travis-ci.org/madou/react-sticky-header)
[![codecov](https://codecov.io/gh/madou/react-sticky-header/branch/master/graph/badge.svg)](https://codecov.io/gh/madou/react-sticky-header)
[![Dependency Status](http://img.shields.io/david/madou/react-sticky-header.svg?style=flat-square)](https://david-dm.org/madou/react-sticky-header)

Lightweight sticky header made for React that works with both colours and images. You can see an example over at [Guild Wars 2 Armory](https://gw2armory.com), scroll down at the front page to see the stickyness!

<p align="center">
  <img src="https://github.com/madou/react-sticky-header/blob/master/example.gif?raw=true" style="margin:0 auto" />
</p>

## Installation

```sh
npm install react-sticky-header
```

## Usage

```javascript
import 'react-sticky-header/styles.css';
import ReactStickyHeader from 'react-sticky-header';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <ReactStickyHeader
    // This will be the sticky strip.
    header={
      <div className={cx('Header_root', { sticky })}>
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
      // More header stuff here, this won't be sticky.
    </section>
  </ReactStickyHeader>,
  document.getElementById('container')
);
```

| prop | type | required |
|-|-|-|
| children | Children  | no |
| header | Children | yes |
| backgroundImage | string | no |
| backgroundColor | string | no |
| headerOnly | boolean | no |
| onSticky | (boolean) => void | no |
| className | string | no |

### React Story Book

To run the component in various modes, run the following command then go to `http://localhost:6006/`.

```bash
npm start
```

### Testing

```bash
npm test
```
