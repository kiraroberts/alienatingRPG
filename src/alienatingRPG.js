export class Game {
  constructor(player) {
    this.level = 0;
    this.characters = [];
    this.gameState = player.died;
    // this.playerTurn = true;
    // this.npcTurn = false;
  }

nextLevel() {
  this.level ++;
}

// resetGame() {
//   setTimeout(function() {
//   location.reload(); 
//   }, 10000);
// }

gameOver(targetOutput) {
  if (this.gameState === true) {
    targetOutput.text('gg uninstall');
    // this.resetGame();
  }
}

}

export class Player {
  constructor(name) {
    this.name = name;
    this.hp = 10;
    this.playerLevel = 1;
    this.died = false;
    this.attackStrong = 3;
    this.attackWeak = 1;
  }

  strongAttack() {
    let chance = Math.floor(Math.random() * 100);
    if (chance < 61) {
      let damage = this.attackStrong; 
      return damage;
    } else {
      // display text 'attack missed'
      return 0;
    }
  }

  resetHP() {
    this.hp = 10;
  }

  loseHP(damage) {
    this.hp -= damage;
  }

  death() {
    if (this.hp <= 0) {
      this.died = true;
    }
  }
}

export class popUpWizard {
  constructor() {
    this.hp = 10;
    this.attack = 2;
  }

  loseHP(damage) {
    this.hp -= damage;
  }

  attack() {
    //alert or something and damage
  }
}
