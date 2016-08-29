import Phaser from 'phaser';

export default class Load extends Phaser.State {
  preload() {
    let textStyle = {font: '45px Arial', alight: 'center', stroke: 'blue', fill: 'blue'};
    this.game.add.text(80, 150, 'loading...', textStyle);
    this.game.load.spritesheet('npzr', '../assets/nipizoro.jpg', 80, 40);
    this.game.load.image('deck', '../assets/deck.png');
    this.game.load.image('placeholder', '../assets/placeholder.png');
  }

  create() {
    this.game.state.start('play');
  }
}
