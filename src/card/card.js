import Phaser from 'phaser';
import {CHARACTER, BODY_PART} from '../card';
import _ from 'lodash';

export default class Card extends Phaser.Sprite {
  constructor(game, x, y, character, bodyPart) {
    super(game, x, y, 'npzr', 3);
    this.bodyPart = bodyPart;
    this.character = character;
    
    this.spriteIndexes = this._calculateSpriteIndex(character, bodyPart);
  }

  update() {
    this.frame = this.spriteIndex;
  }

  _calculateSpriteIndex(character, bodyPart) {
    const characterIndex = (character) => {
      switch (character) {
        case CHARACTER.Ninja:
          return [0];
        case CHARACTER.Pirate:
          return [1];
        case CHARACTER.Zombie:
          return [2];
        case CHARACTER.Robot:
          return [3];
        case CHARACTER.Wild:
          return [0, 1, 2, 3];
      }
    };
    const partIndex = (body) => {
      switch (body) {
        case BODY_PART.Head:
          return [0];
        case BODY_PART.Torso:
          return [4];
        case BODY_PART.Legs:
          return [8];
        case BODY_PART.Wild:
          return [0, 4, 8];
      }
    };
    return _.flatMap(characterIndex(character), (c) => {
      return _.map(partIndex(bodyPart), (b) => {
        return c + b;
      });
    });
  }
}
