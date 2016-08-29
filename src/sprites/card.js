import Phaser from 'phaser';

export class Card extends Phaser.Sprite {
  constructor(game, x, y, zone) {
    super(game, x, y, 'npzr');
    this.zone = zone;

    this.inputEnabled = true;
    this.input.enableDrag();
    this.events.onDragStart.add(this.onDragStart, this);
    this.events.onDragStop.add(this.onDragStop, this);
  }

  onDragStart(sprite) {
    this.startPos = {x: sprite.x, y: sprite.y};
    sprite.bringToTop();
  }

  onDragStop(sprite, pointer) {
    const tween = this.game.add.tween(sprite);
    if (this.zone.contains(pointer.x, pointer.y)){
      tween.to({x: 1000}, 100, 'Linear', true, 0);
    } else {
      tween.to(this.startPos, 100, 'Linear', true, 0);
    }
  }
}
