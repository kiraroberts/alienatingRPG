import { Game } from './../src/alienatingRPG.js';
import { Player } from './../src/alienatingRPG.js';
import { PopUpWizard } from './../src/alienatingRPG.js';
import { playerStrongAttack, playerWeakAttack, wizardAttack } from './../src/combat.js';

describe('player and wizard attacks', function() {
  let player;
  let wizard;
  beforeEach(function() {
    player = new Player('player');
    wizard = new PopUpWizard();
  });

  it('should test that wizard is losing hp on attack', function() {
    playerStrongAttack(player, wizard);
    expect(wizard.hp).toEqual(7);
  });

  it('should test that wizard is losing hp on attack', function() {
    playerWeakAttack(player, wizard);
    expect(wizard.hp).toEqual(9);
  });

  it('should test that wizard is losing hp on attack', function() {
    wizardAttack(player, wizard);
    expect(player.hp).toEqual(8);
  });
});


describe('Player', function() {
    let bot;
  
    beforeEach(function() {
        bot = new Player('bot');
    });


it('player should have name, hp, level, and attack stats', function() {
    expect(bot).toEqual(jasmine.objectContaining({name: 'bot',
    hp: 10,
    playerLevel: 1,
    attackStrong: 3,
    attackWeak: 1
}));
});


it('attack strong should assign 3 to the damage variable', function() {
    let damage = bot.strongAttack();
    expect(damage).toEqual(3);
});

it('should reset the hp when called', function() {
    bot.hp = 6;
    bot.resetHP();
    expect(bot.hp).toEqual(10);
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