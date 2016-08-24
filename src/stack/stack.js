import DropZone from './dropZone';
import {BODY_PART} from '../card/index';

export default class Stack {
  constructor (x, y, width, height) {
    const boxHeight = height/3;
    this.zones = [new DropZone(x, y, width, boxHeight, BODY_PART.Head),
      new DropZone(x, y + boxHeight, width, boxHeight, BODY_PART.Torso),
      new DropZone(x, y + boxHeight + boxHeight, width, boxHeight, BODY_PART.Legs)];
  }
}
