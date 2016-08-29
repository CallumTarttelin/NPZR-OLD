import {Sprite} from 'phaser';
import {Card, BODY_PART, CHARACTER} from '../card';
import _ from 'lodash';

export default class Deck extends Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'deck');
    let nonWildCards = [
      {character: CHARACTER.Ninja, bodyPart: BODY_PART.Head},
      {character: CHARACTER.Ninja, bodyPart: BODY_PART.Torso},
      {character: CHARACTER.Ninja, bodyPart: BODY_PART.Legs},

      {character: CHARACTER.Pirate, bodyPart: BODY_PART.Head},
      {character: CHARACTER.Pirate, bodyPart: BODY_PART.Torso},
      {character: CHARACTER.Pirate, bodyPart: BODY_PART.Legs},

      {character: CHARACTER.Zombie, bodyPart: BODY_PART.Head},
      {character: CHARACTER.Zombie, bodyPart: BODY_PART.Torso},
      {character: CHARACTER.Zombie, bodyPart: BODY_PART.Legs},

      {character: CHARACTER.Robot, bodyPart: BODY_PART.Head},
      {character: CHARACTER.Robot, bodyPart: BODY_PART.Torso},
      {character: CHARACTER.Robot, bodyPart: BODY_PART.Legs}
    ];
    nonWildCards = [...nonWildCards, ...nonWildCards, ...nonWildCards, ...nonWildCards];
    this.cards = _.shuffle([...nonWildCards,
      {character: CHARACTER.Wild, bodyPart: BODY_PART.Head},
      {character: CHARACTER.Wild, bodyPart: BODY_PART.Torso},
      {character: CHARACTER.Wild, bodyPart: BODY_PART.Legs},
      {character: CHARACTER.Ninja, bodyPart: BODY_PART.Wild},
      {character: CHARACTER.Pirate, bodyPart: BODY_PART.Wild},
      {character: CHARACTER.Zombie, bodyPart: BODY_PART.Wild},
      {character: CHARACTER.Robot, bodyPart: BODY_PART.Wild},
      {character: CHARACTER.Wild, bodyPart: BODY_PART.Wild}
    ]);
  }

  draw() {
    const card = this.cards.pop();
    if(!card) {
      return undefined;
    }
    return new Card(this.game, this.x, this.y, card.character, card.bodyPart);
  }
}
