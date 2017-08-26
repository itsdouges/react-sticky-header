// @flow

import type { Children } from 'react';
import React, { Component } from 'react';
import { addEvent } from './utils';

const noop: any = () => {};

type Props = {
  onSticky: (isSticky: boolean) => void,
  header: Children,
  headerOnly: boolean,
  children?: Children,
  backgroundImage?: string,
  backgroundColor?: string,
  className?: string,
};

export default class ReactStickyHeader extends Component {
  // eslint-disable-next-line react/sort-comp
  props: Props;
  _detatch: () => void = noop;
  _initialised: boolean;
  _fixed: HTMLElement;
  _root: HTMLElement;
  _rafExecuting = false;

  static defaultProps = {
    onSticky: noop,
    headerOnly: false,
  };

  state = {
    isSticky: this.props.headerOnly,
  };

  componentDidMount () {
    this.initialise();
    // Force state change as we need to calculate the header background containers.
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({});
  }

  componentWillUnmount () {
    this._detatch();
  }

  componentWillReceiveProps (nextProps: Props) {
    if (nextProps.headerOnly !== this.props.headerOnly) {
      this.calculateStickyState();
    }
  }

  calculateStickyState = () => {
    if (this._rafExecuting) {
      return;
    }

    this._rafExecuting = true;

    requestAnimationFrame(() => {
      const stickyHeaderHeight = this._fixed.offsetHeight;
      const headerContainer = this._root.offsetHeight;
      const headerContainerBoundingBox = this._root.getBoundingClientRect();
      const pastStickyThreshold = ((headerContainer + headerContainerBoundingBox.top) - stickyHeaderHeight) <= 0;

      if (pastStickyThreshold && !this.state.isSticky) {
        this.setState({
          isSticky: true,
        });

        this.props.onSticky(true);
      } else if (!pastStickyThreshold && this.state.isSticky) {
        this.setState({
          isSticky: false,
        });

        this.props.onSticky(false);
      }

      this._rafExecuting = false;
    });
  };

  onResize = () => {
    // We want to flush a re-render incase the children have changed size from CSS.
    this.setState({});

    // We want to check if because of a resize the header is now sticky or not.
    this.calculateStickyState();
  };

  initialise () {
    if (this._initialised) {
      return;
    }

    const detatchScroll = addEvent('scroll', this.calculateStickyState);
    const detatchResize = addEvent('resize', this.onResize);

    this._detatch = () => {
      [detatchScroll, detatchResize].forEach((detatch) => detatch());
      this._initialised = false;
    };

    this.calculateStickyState();
    this._initialised = true;
  }

  render () {
    const backgroundUrl = this.props.backgroundImage && `url('${this.props.backgroundImage}')`;
    const headerClassName = `ReactStickyHeader_root${this.props.className ? ` ${this.props.className}` : ''}`;
    const rootClassName = `${headerClassName}${this.state.isSticky ? ' is-sticky' : ''}`;
    const headerContainerHeight = this._root && this._root.offsetHeight;
    const fixedHeaderHeight = this._fixed && this._fixed.offsetHeight;

    return (
      <header className={rootClassName} ref={(e) => (this._root = e)}>
        <div className="ReactStickyHeader_fixed" ref={(e) => (this._fixed = e)}>
          {this.props.header}
        </div>

        <div
          className="ReactStickyHeader_midground"
          style={{
            height: headerContainerHeight || fixedHeaderHeight,
            top: fixedHeaderHeight,
            backgroundImage: backgroundUrl,
            backgroundColor: this.props.backgroundColor,
          }}
        />

        {this.props.headerOnly && <div style={{ height: fixedHeaderHeight }} />}

        {this.props.headerOnly || (
          <div
            className="ReactStickyHeader_background-bg"
            style={{ backgroundImage: backgroundUrl, backgroundColor: this.props.backgroundColor }}
          />
        )}

        {this.props.headerOnly || (
          <div
            className="ReactStickyHeader_foreground"
            style={{ opacity: this.state.isSticky ? 0 : 1, backgroundImage: backgroundUrl, backgroundColor: this.props.backgroundColor }}
          />
        )}

        {this.props.headerOnly || this.props.children}
      </header>
    );
  }
}
