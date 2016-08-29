import {expect} from 'chai';
import sinon from 'sinon';
import {Play} from '../../src/states';
import {Component} from 'phaser';

describe('play state', () => {
  const addObject = sinon.stub();
  const game = {
    stage: {
      backgroundColor: 'blue'
    },
    add: {
      existing: addObject
    }
  };
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(Component.Core, 'init');
  });

  afterEach(() => {
    sandbox.restore();
  });
  const play = new Play();
  play.game = game;
  it('should create a deck and add it to the game', () => {
    play.create();
    expect(game.stage.backgroundColor).to.equal('#FFFFFF');
    expect(addObject).to.be.calledWith(play.deck);
  });
});
