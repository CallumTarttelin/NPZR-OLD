import {Rectangle} from 'phaser';

export default class DropZone {
  constructor(x, y, width, height, bodyPart) {
    this._rectangle = new Rectangle(x, y, width, height);
    this._bodyPart = bodyPart;
  }

  isValid(/*x, y, card*/) {
    return false;
  }
}
