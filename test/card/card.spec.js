import {expect} from 'chai';
import {Card, BODY_PART, CHARACTER} from '../../src/card';
import {Component} from 'phaser';
import sinon from 'sinon';

describe('Card', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(Component.Core, 'init');
    Component.LoadTexture.animations = {frame: 'foo'};
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should set the frame for the character and position', () => {
    expect(new Card({}, 10, 10, CHARACTER.Ninja, BODY_PART.Head).spriteIndexes).to.deep.equal([0]);
    expect(new Card({}, 10, 10, CHARACTER.Ninja, BODY_PART.Torso).spriteIndexes).to.deep.equal([4]);
    expect(new Card({}, 10, 10, CHARACTER.Ninja, BODY_PART.Legs).spriteIndexes).to.deep.equal([8]);
    expect(new Card({}, 10, 10, CHARACTER.Ninja, BODY_PART.Wild).spriteIndexes).to.deep.equal([0, 4, 8]);
    expect(new Card({}, 10, 10, CHARACTER.Pirate, BODY_PART.Head).spriteIndexes).to.deep.equal([1]);
  });
  it('should set the card image index to the first sprite index on update', () => {
    const card = new Card({}, 10, 10, CHARACTER.Ninja, BODY_PART.Torso);
    let frame;
    sinon.wrapMethod(card, 'frame', {set: (value) => {frame = value;}});
    card.update();
    expect(frame).to.equal(4);
  });
});
