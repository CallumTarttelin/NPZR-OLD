import {expect} from 'chai';
import {Stack} from '../../src/stack';

describe('stack', () => {
  const stack = new Stack(50, 50, 100, 200);
  it('should contain 3 drop zones', () => {
    expect(stack.zones.length).to.equal(3);
  });
});
