import func from './';

describe('function proxy', () => {
  it('should return 2', () => {
    expect(func()).to.equal(2);
  });
});
