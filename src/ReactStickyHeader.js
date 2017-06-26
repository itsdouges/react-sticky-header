// @flow

import type { Children } from 'react';

import React, { Component } from 'react';
import throttle from 'lodash/throttle';

import { addEvent } from './utils';

const noop = () => {};

type Props = {
  onSticky: (isSticky: boolean) => void,
  header: Children,
  children?: Children,
  backgroundImage?: string,
  backgroundColor?: string,
  headerOnly: boolean,
  className?: string,
};

type State = {
  isSticky: boolean,
};

export default class ReactStickyHeader extends Component {
  // eslint-disable-next-line react/sort-comp
  props: Props;
  detatch: () => void = noop;
  initialised: boolean;
  _fixed: HTMLElement;
  _root: HTMLElement;
  _rafExecuting = false;

  static defaultProps = {
    onSticky: noop,
    headerOnly: false,
  };

  state: State = {
    isSticky: this.props.headerOnly,
  };

  componentDidMount () {
    if (!this.props.headerOnly) {
      // Attach event listeners only if the component is header only mode.
      this.initialise();
    } else {
      // Force state change as we need to calculate the header background containers.
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({});
    }
  }

  componentWillReceiveProps (prevProps: Props) {
    if (this.props.headerOnly && !prevProps.headerOnly) {
      // If the component was turned into header only mode, remove the event listeners.
      this.detatch();
      // Force state change as we need to re-calculate the header background containers.
      this.setState({});
    } else if (!this.props.headerOnly && prevProps.headerOnly) {
      // If the component was turned into header sticky mode, add the event listeners back.
      this.initialise();
    }
  }

  componentWillUnmount () {
    this.detatch();
  }

  onScroll = () => {
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
    this.onScroll();
  };

  initialise () {
    if (!this.initialised) {
      const detatchScroll = addEvent('scroll', this.onScroll);
      const detatchResize = addEvent('resize', throttle(this.onResize, 50));

      this.detatch = () => {
        [detatchScroll, detatchResize].forEach((detatch) => detatch());
        this.initialised = false;
      };
    }

    this.onScroll();
    this.initialised = true;
  }

  render () {
    const backgroundUrl = this.props.backgroundImage && `url(${this.props.backgroundImage})`;
    const rootOffsetHeight = this._root && this._root.offsetHeight;
    const fixedOffsetHeight = this._fixed && this._fixed.offsetHeight;
    const headerClassName = `ReactStickyHeader_root${this.props.className ? ` ${this.props.className}` : ''}`;

    return (
      <header className={`${headerClassName}${this.state.isSticky ? ' is-sticky' : ''}`} ref={(e) => (this._root = e)}>
        <div className="ReactStickyHeader_fixed" ref={(e) => (this._fixed = e)}>
          {this.props.header}
        </div>

        <div
          className="ReactStickyHeader_midground"
          style={{
            height: rootOffsetHeight || fixedOffsetHeight,
            top: fixedOffsetHeight,
            backgroundImage: backgroundUrl,
            backgroundColor: this.props.backgroundColor,
          }}
        />

        {this.props.headerOnly && <div style={{ height: fixedOffsetHeight }} />}

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
