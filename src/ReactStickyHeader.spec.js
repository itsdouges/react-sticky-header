// import React from 'react';
// import { shallow } from 'enzyme';
// import Component from './Component';

describe('<ReactStickyHeader />', () => {
  it('should render with hero', () => {

  });

  describe('header only', () => {
    it('should render with header only', () => {

    });

    it('should not set any event listeners', () => {

    });
  });

  it('should add classname', () => {

  });

  it('should calculate initial header background state', () => {

  });

  context('when props update', () => {
    context('and headerOnly is changed', () => {
      it('should reinitialise', () => {

      });
    });

    context('and headerOnly has not changed', () => {
      it('should do nothing', () => {

      });
    });
  });

  context('when component unmounts', () => {
    it('should cleanup event listeners', () => {

    });
  });

  context('when resizing viewport', () => {
    it('should rerender just in case', () => {

    });

    it('should check sticky status', () => {

    });
  });

  context('when scrolling', () => {
    context('when sticky header is past hero header', () => {
      it('should set sticky', () => {

      });

      it('should callback', () => {

      });

      context('and goes back again', () => {
        it('should unset sticky', () => {

        });

        it('should callback', () => {

        });
      });
    });

    context('when sticky header has not yet past hero header', () => {
      it('should do nothing', () => {

      });
    });
  });
});
