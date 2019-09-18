export function playerStrongAttack(player, wizard) {
  let damage = player.strongAttack();
  wizard.loseHP(damage);
};

export function playerWeakAttack(player, wizard) {
  let damage = player.weakAttack();
  wizard.loseHP(damage);
};

export function popUpAttack(player, wizard) {
  let popUpDamage = wizard.popUpAttack();
  player.loseHP(popUpDamage);
};


