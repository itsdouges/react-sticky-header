// @flow

import React, { Component } from 'react';
import { storiesOf, action } from '@kadira/storybook';
import 'normalize-css';
import cx from 'classnames';

import Page from './Page';
import ReactStickyHeader from '../src/ReactStickyHeader';
import clouds from './clouds.jpg';
import '../src/styles.less';

class ExamplePage extends Component {
  state = {
    sticky: false,
  };

  onSticky = (sticky: boolean) => {
    action(`Sticky: ${sticky ? 'yes' : 'no'}`);
  };

  render () {
    return (
      <Page>
        <ReactStickyHeader
          {...this.props}
          onSticky={this.onSticky}
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
          <div style={{ height: '300px' }} />
        </ReactStickyHeader>
      </Page>
    );
  }
}

storiesOf('ReactStickyHeader')
  .add('backgroundColor', () => <ExamplePage backgroundColor="red" />)
  .add('backgroundImage', () => <ExamplePage backgroundImage={clouds} />)
  .add('headerOnly', () => <ExamplePage headerOnly backgroundColor="red" />);
