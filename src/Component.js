// @flow

import React, { Component } from 'react';

import './styles.less';

type Props = {
  initialCount: number,
};

type State = {
  count: number,
};

export default class CoolComponent extends Component {
  state: State = {
    count: this.props.initialCount,
  };

  props: Props;

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  render () {
    const { count } = this.state;

    return (
      <div className="Component__root">
        <span>{count}</span>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
