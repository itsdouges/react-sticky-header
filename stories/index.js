// @flow

import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import 'normalize-css';
import cx from 'classnames';

import Page from './Page';
import ReactStickyHeader from '../src/ReactStickyHeader';
import '../src/styles.less';

class ExamplePage extends Component {
  state = {
    sticky: false,
  };

  onSticky = (sticky: boolean) => {
    this.setState({
      sticky,
    });
  };

  render () {
    const { sticky } = this.state;

    return (
      <Page>
        <ReactStickyHeader
          backgroundColor="red"
          onSticky={this.onSticky}
          header={
            <div className={cx('Header_root', { sticky })}>
              <h1 className="Header_title">ReactStickyHeader</h1>

              <ul className="Header_links">
                <li className="Header_link">Stuff</li>
                <li className="Header_link">Links</li>
                <li className="Header_link">About</li>
              </ul>
            </div>
          }
        >
          <div style={{ height: '300px', color: 'red' }}>
            Do stuff
          </div>
        </ReactStickyHeader>
      </Page>
    );
  }
}

storiesOf('ReactStickyHeader')
  .add('default', () => <ExamplePage />);
