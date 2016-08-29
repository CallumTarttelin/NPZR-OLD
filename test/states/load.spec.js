import {expect} from 'chai';
import sinon from 'sinon';
import {Load} from '../../src/states';

describe('load state', () => {
  const loader = sinon.stub();
  const renderText = sinon.stub();
  const nextState = sinon.stub();
  const game = {
    load: {
      spritesheet: loader,
      image: loader
    },
    add: {
      text: renderText
    },
    state: {
      start: nextState
    }
  };
  const load = new Load();
  load.game = game;
  it('should load card images', () => {
    load.preload();
    expect(loader).to.be.calledWith('npzr', '../assets/nipizoro.jpg', 80, 40);
    expect(loader).to.be.calledWith('deck', '../assets/deck.png');
  });
  it('should display a loading message', () => {
    load.preload();
    expect(renderText).to.be.called;
  });
  it('should move on to play state on create', () => {
    load.create();
    expect(nextState).to.be.calledWith('play');
  });
});
