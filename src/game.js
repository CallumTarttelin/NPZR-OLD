import Phaser from 'phaser';
import {Load, Play} from './states';

export class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.AUTO, 'phaser-canvas', null);
    this.state.add('load', Load);
    this.state.add('play', Play);
    // Add gameover state and Winner state
    this.state.start('load');
  }
}
