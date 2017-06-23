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
  headerOnly?: boolean,
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

  static defaultProps = {
    onSticky: noop,
  };

  state: State = {
    isSticky: false,
  };

  componentDidMount () {
    this.initialise();
  }

  componentDidUpdate (prevProps: Props) {
    if (prevProps.headerOnly === this.props.headerOnly) {
      return;
    }

    this.initialise();
  }

  componentWillUnmount () {
    this.detatch();
  }

  onScroll = () => {
    const { onSticky } = this.props;
    const { isSticky } = this.state;

    requestAnimationFrame(() => {
      const stickyHeaderHeight = this._fixed.offsetHeight;
      const headerHeight = this._root.offsetHeight;
      const headerBounds = this._root.getBoundingClientRect();
      const sticky = ((headerHeight + headerBounds.top) - stickyHeaderHeight) <= 0;

      if (sticky && !isSticky) {
        this.setState({
          isSticky: true,
        });

        onSticky(true);
      } else if (!sticky && isSticky) {
        this.setState({
          isSticky: false,
        });

        onSticky(false);
      }
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

      this.detatch = () => [
        detatchScroll,
        detatchResize,
      ].forEach((detatch) => detatch());
    }

    this.onScroll();
    this.initialised = true;
  }

  render () {
    const { isSticky } = this.state;
    const { children, header, backgroundImage, backgroundColor, headerOnly, className } = this.props;

    const backgroundUrl = backgroundImage && `url(${backgroundImage})`;
    const rootOffsetHeight = this._root && this._root.offsetHeight;
    const fixedOffsetHeight = this._fixed && this._fixed.offsetHeight;
    const headerClassName = `ReactStickyHeader_root${className ? ` ${className}` : ''}`;

    return (
      <header className={headerClassName} ref={(e) => (this._root = e)}>
        <div className="ReactStickyHeader_fixed" ref={(e) => (this._fixed = e)}>
          {header}
        </div>

        <div
          className="ReactStickyHeader_midground"
          style={{
            height: rootOffsetHeight || fixedOffsetHeight,
            top: fixedOffsetHeight,
            backgroundImage: backgroundUrl,
            backgroundColor,
          }}
        />

        {headerOnly && <div style={{ height: fixedOffsetHeight }} />}

        {headerOnly || (
          <div
            className="ReactStickyHeader_background-bg"
            style={{ backgroundImage: backgroundUrl, backgroundColor }}
          />
        )}

        {headerOnly || (
          <div
            className="ReactStickyHeader_foreground"
            style={{ opacity: isSticky ? 0 : 1, backgroundImage: backgroundUrl, backgroundColor }}
          />
        )}

        {headerOnly || children}
      </header>
    );
  }
}
