// @flow

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Component from '../src/Component';

storiesOf('Component')
  .add('default', () => <Component initialCount={2} />);
