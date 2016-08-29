import {expect} from 'chai';
import Game from '../src/game';
import sinon from 'sinon';
import phaser from 'phaser';
import {Load, Play} from '../src/states';

describe('Game', () => {
  let sandbox;
  let addState;
  let start;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    addState = sandbox.stub(phaser.StateManager.prototype, 'add');
    start = sandbox.stub(phaser.StateManager.prototype, 'start');
  });

  afterEach(() => {
    sandbox.restore();
  });
  it('should initialise 2 stages', () => {
    new Game();
    expect(addState).to.be.calledWith('load', Load);
    expect(addState).to.be.calledWith('play', Play);
    expect(start).to.be.calledWith('load');
  });
});
