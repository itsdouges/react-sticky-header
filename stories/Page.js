// @flow

import type { Children } from 'react';
import React from 'react';

import './pageStyles.less';

type Props = {
  children?: Children,
};

const Page = (props: Props) => (
  <section className="Page_root">
    {props.children}
  </section>
);

export default Page;
