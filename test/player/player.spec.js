import {expect} from 'chai';
import {Player} from '../../src/player';
import {Stack} from '../../src/stack';
import {BODY_PART, CHARACTER} from '../../src/card';
import sinon from 'sinon';

const they = it;

describe('Player', () => {
  const draw = sinon.stub();
  const deck = {draw};
  const card = {bodyPart: BODY_PART.Head, character: CHARACTER.Ninja};
  let stacks;
  let player;
  beforeEach(() => {
    stacks = [new Stack({}, 1, 2, 5, 5), {}, {}, {}, {}, {}];
    player = new Player(deck, stacks);
  });

  they('have a hand', () => {
    expect(player.hand.cards).to.have.length(0);
  });

  they('draw a card and add it to their hand', () => {
    draw.returns(card);
    player.draw();
    expect(player.hand.cards).to.have.length(1);
    expect(player.hand.cards[0]).to.equal(card);
  });

  they('have stacks', () => {
    expect(player.stacks).to.equal(stacks);
  });

  they('can play a card on a drop zone in a stack', () => {
    draw.returns(card);
    player.draw();
    player.play(player.hand.cards[0], player.stacks[0], BODY_PART.Head);
    expect(player.hand.cards).to.have.length(0);
    expect(player.stacks[0].head.cards).to.have.length(1);
  });

  they('keep the card in their hand when the play is illegal', () => {
    draw.returns(card);
    player.draw();
    player.play(player.hand.cards[0], player.stacks[0], BODY_PART.Legs);
    expect(player.hand.cards).to.have.length(1);
    expect(player.stacks[0].head.cards).to.have.length(0);
  });

  they('have a score', () => {

  });

});

