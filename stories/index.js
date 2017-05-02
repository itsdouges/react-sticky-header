// @flow

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import 'normalize-css';

import Page from './Page';
import ReactStickyHeader from '../src/ReactStickyHeader';
import '../src/styles.less';

storiesOf('ReactStickyHeader')
  .add('default', () => (
    <Page>
      <ReactStickyHeader
        backgroundColor="red"
        header={
          <div>
            <h1>ReactStickyHeader</h1>
          </div>
        }
      >
        <div style={{ height: '300px', color: 'red' }}>
          Do stuff
        </div>
      </ReactStickyHeader>
    </Page>
  ));
