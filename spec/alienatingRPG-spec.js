import { Game } from './../src/alienatingRPG.js';
import { Player } from './../src/alienatingRPG.js';
import { PopUpWizard } from './../src/alienatingRPG.js';


describe('Player', function() {
    let bot;
  
    beforeEach(function() {
        bot = new Player('bot');
    });

//  initial test, should fail
it('player should have name, hp, level, and attack stats', function() {
    expect(bot).toEqual(jasmine.objectContaining({name: 'bot',
    hp: 10,
    playerLevel: 1,
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

// it('it evaluates the hp has hit 0', function() {
//     bot.hp = 0;
//     bot.death();
//     expect().toEqual('gg uninstall');
// });

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


it('should instantiate and keep track of levels', function() {
    rpg.nextLevel();
    expect(rpg.level).toEqual(1);
});


});

describe('PopUpWizard', function() {
    let wiz;
    
  
  beforeEach(function() {
    wiz = new PopUpWizard();
  });

it('should do damage when attacks', function() {
    let damage = wiz.popUpAttack();
    expect(damage).toEqual(2);
});

});