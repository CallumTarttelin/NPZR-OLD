import {expect} from 'chai';
import {Stack} from '../../src/stack';
import {BODY_PART} from '../../src/card/index';

describe('stack', () => {
  const stack = new Stack(50, 50, 100, 200);
  it('should contain 3 drop zones', () => {
    expect(stack.head._bodyPart).to.equal(BODY_PART.Head);
    expect(stack.torso._bodyPart).to.equal(BODY_PART.Torso);
    expect(stack.legs._bodyPart).to.equal(BODY_PART.Legs);
  });
  it('should delegate to the right zone when a card is played', () => {
    expect(stack.head.cards).to.have.length(0);
    expect(stack.torso.cards).to.have.length(0);
    expect(stack.legs.cards).to.have.length(0);
    stack.play({bodyPart: BODY_PART.Head}, BODY_PART.Head);
    expect(stack.head.cards).to.have.length(1);
    stack.play({bodyPart: BODY_PART.Torso}, BODY_PART.Torso);
    expect(stack.torso.cards).to.have.length(1);
    stack.play({bodyPart: BODY_PART.Legs}, BODY_PART.Legs);
    expect(stack.legs.cards).to.have.length(1);
  });
});
