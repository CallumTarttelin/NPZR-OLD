import {expect} from 'chai';
import {DropZone} from '../../src/stack';
import {BODY_PART, Card, CHARACTER} from '../../src/card';
import {Rectangle} from 'phaser';

describe('DropZone', () => {
  const zone = new DropZone(50, 50, 100, 50);
  it('should contain a rectangle with the given dimensions', () => {
    expect(zone._rectangle).to.deep.equal(new Rectangle(50, 50, 100, 50));
  });
  describe('isValid', () => {
    it('should return true given a position within the rectangle and a card valid for the bodyPart', () => {
      const card = new Card(BODY_PART.Head, CHARACTER.Pirate);
      zone.isValid(55, 55, card);
    });
  });
});
