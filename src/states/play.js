import Phaser from 'phaser';
import {Deck} from '../card';
import {Stack} from '../stack';
import {Player} from '../player';
import _ from 'lodash';

export default class Play extends Phaser.State {
  create() {
    this.game.stage.backgroundColor = '#FFFFFF';
    this.deck = new Deck(this.game, 10, 10);
    this.game.add.existing(this.deck);
    this.playerStacks = [
      _.range(6).map((idx) => {
        return new Stack(
          this.game,
          (this.game.width / 7) * (idx + 1.5),
          (this.game.height / 12) * 2.5,
          this.game.width / 7,
          this.game.height / 4);
      }),
      _.range(6).map((idx) => {
        return new Stack(
          this.game,
          (this.game.width / 7) * (idx + 1.5),
          (this.game.height / 12) * 6.5,
          this.game.width / 7,
          this.game.height / 4);
      })
    ];
    this.players = [new Player(this.deck, this.playerStacks[0]), new Player(this.deck, this.playerStacks[1])];
  }
}
