// combat functions that calls player and wizard methods

let player1;
let wizard1;

export function playerStrongAttack(player1, wizard1) {
  let damage = player1.strongAttack();
  wizard1.loseHP(damage);
}

export function playerWeakAttack(player1, wizard1) {
  let damage = player1.weakAttack();
  wizard1.loseHP(damage);
}

export function wizardAttack(player1, wizard1) {
  let popUpDamage = wizard1.popUpAttack();
  console.log('damage the wizard is doing', popUpDamage);
  player1.loseHP(popUpDamage);
}

export function wizardPopUpAttack(targetOutput, player1, wizard1) {
    wizardAttack(player1, wizard1);
    alert('git wrecked');
    player1.death(targetOutput);
    // pop-up alerts
}
