import chai from 'chai';
import sc from 'sinon-chai';
import {jsdom} from 'jsdom';
import canvas from 'canvas';


chai.use(sc);

const exposedProperties = ['window', 'navigator', 'document', 'Image'];

let document = jsdom('');
global.document = document;
global.window = document.defaultView;
global.Image = canvas.Image;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

global.PIXI = require('phaser/build/custom/pixi');
global.p2 = require('phaser/build/custom/p2');
