import {expect} from 'chai';
import {Stack} from '../../src/stack';
import {BODY_PART} from '../../src/card/index';

describe('stack', () => {
  const stack = new Stack(50, 50, 100, 200);
  it('should contain 3 drop zones', () => {
    expect(stack.zones.length).to.equal(3);
  });
  it('first zone should be head', () => {
    expect(stack.zones[0]._bodyPart).to.equal(BODY_PART.Head);
  });
});
