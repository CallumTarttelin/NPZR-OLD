import Phaser from 'phaser';
import {Card} from '../sprites/card';

export class Play extends Phaser.State {
  create() {
    this.game.stage.backgroundColor = '#FFFFFF';
    this.zone = new Phaser.Rectangle(300, 300, 200, 200);
    this.game.debug.geom(this.zone, '#0fffff');
    this.card = new Card(this.game, 200, 200, this.zone);
    this.game.add.existing(this.card);
  }
}
