export class Game {
  constructor() {
    this.level = 0;
    this.characters = [];
  }

nextLevel() {
  this.level ++;
}

}

export class Player {
  constructor(name) {
    this.name = name;
    this.hp = 10;
    this.playerLevel = 1;
    this.attackStrong = 3;
    this.attackWeak = 1;
  }

  weakAttack() {
    let damage = this.attackWeak;
    return damage;
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

  death(targetOutput) {
    if (this.hp <= 0) {
      return targetOutput.text('gg uninstall');
      // add all game over actions here
    // } else if (){
      // button logic
    }
  }
}

export class PopUpWizard {
  constructor() {
    this.hp = 10;
    this.attack = 2;
  }

  loseHP(damage) {
    this.hp -= damage;
  }

  popUpAttack() {
    let popUpDamage = this.attack;
    return popUpDamage;
    // creates an alert
    // needs to return a damage value
    // set timer for attacks to happen in given interval (maybe random interval?)
  }

  wizardDeath(){
    if (this.hp <= 0) {
      return true;
    }
  }
}
