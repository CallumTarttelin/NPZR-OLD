import Phaser from 'phaser';

export default class Stack {
  constructor (x, y, width, height) {
    const boxHeight = height/3;
    this.zones = [new Phaser.Rectangle(x, y, width, boxHeight),
      new Phaser.Rectangle(x, y + boxHeight, width, boxHeight),
      new Phaser.Rectangle(x, y + boxHeight + boxHeight, width, boxHeight)];
  }
}
