import Phaser from 'phaser';
import {Load, Play} from './states';

export default class Game extends Phaser.Game {
  constructor() {
    super('100', '100', Phaser.AUTO, 'phaser-canvas', null);
    this.state.add('load', Load);
    this.state.add('play', Play);
    // Add gameover state and Winner state
    this.state.start('load');
  }
}
