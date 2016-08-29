import Phaser from 'phaser';
import {Deck} from '../card';

export default class Play extends Phaser.State {
  create() {
    this.game.stage.backgroundColor = '#FFFFFF';
    this.deck = new Deck(this.game, 10, 10);
    this.game.add.existing(this.deck);
  }
}
