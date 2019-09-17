import { Game } from './../src/alienatingRPG.js';
import { Player } from './../src/alienatingRPG.js';

describe('Player', function() {
    let bot;
    let noob;
  
    beforeEach(function() {
        bot = new Player('bot');
        noob = new Player('noob');
    });

//  initial test, should fail
it('player should have name, hp, level, and attack stats', function() {
    expect(bot).toEqual(jasmine.objectContaining({name: 'bot',
    hp: 10,
    playerLevel: 1,
    loseGame: false,
    attackStrong: 3,
    attackWeak: 1
}));
});

it('attack strong should assign 3 to the damage variable', function() {
    
});

it('should reset the hp when called', function() {
    bot.hp = 6;
    bot.resetHP();
    expect(bot.hp).toEqual(10);
});

it('should evaluated whether the player has died', function(){
    bot.hp = 0;
    bot.death();
    expect(bot.loseGame).toEqual(true);
});

it('should lose hp when attacked', function() {
    bot.hp = 10;
    bot.loseHP(5);
    expect(bot.hp).toEqual(5);
});

});

describe('Game', function() {
    let rpg;
  
  beforeEach(function() {
    rpg = new Game();
  });

// initial test, should fail
it('should instantiate and keep track of levels', function() {
    rpg.nextLevel();
    expect(rpg.level).toEqual(1);
});


});