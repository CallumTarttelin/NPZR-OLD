import Phaser from 'phaser';
import {Card} from '../sprites/card';

export class Play extends Phaser.State {
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.stage.backgroundColor = '#FFFFFF';
    this.zone = new Phaser.Rectangle(300, 300, 200, 200);
    this.game.debug.geom(this.zone, '#0fffff');
    this.card = new Card(this.game, 350, 300, this.zone);
    this.game.add.existing(this.card);
  }

  // update() {
  //   if (!this.startTime) {
  //     this.startTime = Date.now();
  //   }
  //
  //   //20 seconds to win
  //   if ((Date.now() - this.startTime) > 20000) {
  //     this.startTime = 0;
  //     this.game.state.start('gameover');
  //   }
  //
  //   this.wizard.move(this.cursors);
  //
  //   if (this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
  //     this.startTime = 0;
  //     this.game.state.start('victory');
  //   }
  // }
}
