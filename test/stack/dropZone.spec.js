import {expect} from 'chai';
import {DropZone} from '../../src/stack';
import {BODY_PART, Card, CHARACTER} from '../../src/card';
import {Rectangle} from 'phaser';
import sinon from 'sinon';
import {Component} from 'phaser';

describe('DropZone', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(Component.Core, 'init');
    Component.LoadTexture.animations = {frame: 'foo'};
  });

  afterEach(() => {
    sandbox.restore();
  });

  const zone = new DropZone(50, 50, 100, 50, BODY_PART.Head);
  it('should contain a rectangle with the given dimensions', () => {
    expect(zone._rectangle).to.deep.equal(new Rectangle(50, 50, 100, 50));
  });

  describe('contains', () => {
    it('should return true given a position within the rectangle', () => {
      expect(zone.contains(55, 55)).to.equal(true);
    });
    it('should return false given a position outside the rectangle', () => {
      expect(zone.contains(55, 45)).to.equal(false);
    });
  });

  describe('play', () => {
    it('should succeed given card is for the same bodyPart', () => {
      const card = new Card({}, 10, 10, CHARACTER.Zombie, BODY_PART.Head);
      zone.play(card);
      expect(zone.cards.pop()).to.equal(card);
    });
    it('should fail given card is for different bodyPart', () => {
      const card = new Card({}, 10, 10, CHARACTER.Zombie, BODY_PART.Legs);
      let denied = false;
      try {
        zone.play(card);
      } catch (err) {
        denied = true;
      }
      expect(zone.cards).to.have.length(0);
      expect(denied).to.equal(true);
    });
    it('should succeed given card is for a wild bodyPart', () => {
      const card = new Card({}, 10, 10, CHARACTER.Zombie, BODY_PART.Wild);
      zone.play(card);
      expect(zone.cards.pop()).to.equal(card);
    });
  });
});
