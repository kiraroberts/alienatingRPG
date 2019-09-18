// combat functions that calls player and wizard methods

export function playerStrongAttack(player, wizard) {
  let damage = player.strongAttack();
  wizard.loseHP(damage);
}

export function playerWeakAttack(player, wizard) {
  let damage = player.weakAttack();
  wizard.loseHP(damage);
}

export function wizardAttack(player, wizard) {
  let popUpDamage = wizard.popUpAttack();
  player.loseHP(popUpDamage);
}

export function wizardPopUpAttack(targetOutput) {
    wizardAttack(player, wizard);
    player.death(targetOutput);
    // pop-up alerts
}