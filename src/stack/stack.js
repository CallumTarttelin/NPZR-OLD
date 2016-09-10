import DropZone from './dropZone';
import {BODY_PART} from '../card/index';

export default class Stack {
  constructor (game, x, y, width, height) {
    this.game = game;
    const boxHeight = height / 3;
    this.head = new DropZone(x, y, width, boxHeight, BODY_PART.Head);
    this.torso = new DropZone(x, y + boxHeight, width, boxHeight, BODY_PART.Torso);
    this.legs = new DropZone(x, y + boxHeight + boxHeight, width, boxHeight, BODY_PART.Legs);
  }

  play(card, position) {
    switch(position) {
      case BODY_PART.Head:
        this.head.play(card);
        break;
      case BODY_PART.Torso:
        this.torso.play(card);
        break;
      case BODY_PART.Legs:
        this.legs.play(card);
        break;
    }

  }
}
