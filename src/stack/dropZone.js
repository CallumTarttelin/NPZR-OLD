import {Rectangle} from 'phaser';
import {BODY_PART} from '../card';

export default class DropZone {
  constructor(x, y, width, height, bodyPart) {
    this._rectangle = new Rectangle(x, y, width, height);
    this._bodyPart = bodyPart;
    this.cards = [];
  }

  play(card) {
    if (card.bodyPart === this._bodyPart || card.bodyPart === BODY_PART.Wild) {
      this.cards.push(card);
    } else {
      throw new Error('Illegal move');
    }
  }

  contains(x, y) {
    return this._rectangle.contains(x, y);
  }
}
