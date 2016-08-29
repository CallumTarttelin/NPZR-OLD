import {expect} from 'chai';
import {Deck, BODY_PART, CHARACTER} from '../../src/card';
import {Component} from 'phaser';
import sinon from 'sinon';
import _ from 'lodash';

describe('Deck', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(Component.Core, 'init');
  });

  afterEach(() => {
    sandbox.restore();
  });
  
  it('should allow player to draw a card', () => {
    const deck = new Deck();
    const card = deck.draw();
    expect(_.values(BODY_PART)).to.include(card.bodyPart);
    expect(_.values(CHARACTER)).to.include(card.character);
  });
  it('should allow draw until all cards have been taken', () => {
    const entries = {};
    const deck = new Deck();
    _.range(60).forEach(() => {
      const card = deck.draw();
      if (card) {
        let count = (entries[`${card.character}-${card.bodyPart}`] || 0);
        entries[`${card.character}-${card.bodyPart}`] = ++count;
      }
    });
    expect(entries[`${CHARACTER.Robot}-${BODY_PART.Head}`]).to.equal(4);
    expect(entries[`${CHARACTER.Robot}-${BODY_PART.Torso}`]).to.equal(4);
    expect(entries[`${CHARACTER.Robot}-${BODY_PART.Legs}`]).to.equal(4);
    expect(entries[`${CHARACTER.Robot}-${BODY_PART.Wild}`]).to.equal(1);
    expect(entries[`${CHARACTER.Zombie}-${BODY_PART.Head}`]).to.equal(4);
    expect(entries[`${CHARACTER.Zombie}-${BODY_PART.Torso}`]).to.equal(4);
    expect(entries[`${CHARACTER.Zombie}-${BODY_PART.Legs}`]).to.equal(4);
    expect(entries[`${CHARACTER.Zombie}-${BODY_PART.Wild}`]).to.equal(1);
    expect(entries[`${CHARACTER.Pirate}-${BODY_PART.Head}`]).to.equal(4);
    expect(entries[`${CHARACTER.Pirate}-${BODY_PART.Torso}`]).to.equal(4);
    expect(entries[`${CHARACTER.Pirate}-${BODY_PART.Legs}`]).to.equal(4);
    expect(entries[`${CHARACTER.Pirate}-${BODY_PART.Wild}`]).to.equal(1);
    expect(entries[`${CHARACTER.Ninja}-${BODY_PART.Head}`]).to.equal(4);
    expect(entries[`${CHARACTER.Ninja}-${BODY_PART.Torso}`]).to.equal(4);
    expect(entries[`${CHARACTER.Ninja}-${BODY_PART.Legs}`]).to.equal(4);
    expect(entries[`${CHARACTER.Ninja}-${BODY_PART.Wild}`]).to.equal(1);
    expect(entries[`${CHARACTER.Wild}-${BODY_PART.Head}`]).to.equal(1);
    expect(entries[`${CHARACTER.Wild}-${BODY_PART.Torso}`]).to.equal(1);
    expect(entries[`${CHARACTER.Wild}-${BODY_PART.Legs}`]).to.equal(1);
    expect(entries[`${CHARACTER.Wild}-${BODY_PART.Wild}`]).to.equal(1);
    expect(deck.draw()).to.equal(undefined);
  });
  it('should be in a different order each time it is constructed', () => {
    const deck1 = new Deck();
    const deck2 = new Deck();
    expect(deck1.cards).to.not.deep.equal(deck2.cards);
  });
});
