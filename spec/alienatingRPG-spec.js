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
    died: false,
    attackStrong: 3,
    attackWeak: 1
}));
});

// this method runs with Math.random, it WILL return a 0 value sometimes
it('attack strong should assign 3 to the damage variable', function() {
    let damage = bot.strongAttack();
    expect(damage).toEqual(3);
});

it('should reset the hp when called', function() {
    bot.hp = 6;
    bot.resetHP();
    expect(bot.hp).toEqual(10);
});

it('should evaluated whether the player has died', function(){
    bot.hp = 0;
    bot.death();
    expect(bot.died).toEqual(true);
});

it('should lose hp when attacked', function() {
    bot.hp = 10;
    bot.loseHP(5);
    expect(bot.hp).toEqual(5);
});

});

describe('Game', function() {
    let bot;
    let rpg;
    
  
  beforeEach(function() {
    bot = new Player('bot'); 
    rpg = new Game(bot);
  });


it('should instantiate and keep track of levels', function() {
    rpg.nextLevel();
    expect(rpg.level).toEqual(1);
});

it('game over should evaluate to true when player dies', function() {
    let noob = new Player('noob'); 
    let rpgOver = new Game(noob);
    noob.died = true;
    expect(rpgOver.gameState).toEqual(true);
});

});