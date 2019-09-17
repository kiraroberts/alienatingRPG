import { Game } from './alienatingRPG.js';
import { Player } from './alienatingRPG.js';

describe('Player', function() {
    let bot;
  
  beforeEach(function() {
    bot = new Player('bot');
  });

//  initial test, should fail
it('player should have name, hp, level, and attack stats', function() {
    let botStats = [];
    expect(botStats[...bot]).toEqual(['bot', 10, 1, false, 3, 1]);
});
});

describe('Game', function() {
    let rpg;
  
  beforeEach(function() {
    rpg = new Game();
  });

// initial test, should fail
it('should instantiate and keep track of levels', function() {
    rpg.level = 1;
    expect(rpg.nextLevel()).toEach(0);
});


});