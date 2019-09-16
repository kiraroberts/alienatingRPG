export class Game {
  constructor() {
    this.level = 0;
    this.characters = [];
    // this.playerTurn = true;
    // this.npcTurn = false;
  }
}

export class Player {
  constructor() {
    this.hp = 10;
    this.playerLevel = 1;
    this.loseGame = false;
    this.attackStrong = 3;
    this.attackWeak = 1;
  }

  resetHP() {
    this.hp
  }

  loseHP(damage) {
    this.hp -= damage;
  }

  death() {
    if (this.hp <= 0) {
      this.loseGame = true;
    } else {
      this.loseGame = false;
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
