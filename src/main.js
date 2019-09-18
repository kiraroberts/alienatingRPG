import { Game } from './alienatingRPG.js';
import { Player } from './alienatingRPG.js';
import { PopUpWizard } from './src/alienatingRPG.js';
import { playerStrongAttack } from './src/combat.js';
import { playerWeakAttack } from './src/combat.js';
import { wizardAttack } from './src/combat.js';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import './../css/wizard.css';
import './../css/loading-bar.css';



$(document).ready(function() {
  // $('.start-game').show();
  $('.start-game').click(function() {
  let game = new Game();
  // hide start screen &
  // fade-in character creator
  });

  // $('.character-creator').click(function() {
  // right swipe is what calls this function
  // creates a variable to house the players name (and pass picture to display)
  let player = new Player('x')
  // 
  // confirm character choice button assigns character to display variable and hides character creation screen/show level 1
  // })
  // loading screen/level 1 function calls
  // end of function hides level 1 and shows level one complete screen
  // })
  // $(".levelOneComplete").click(function() {
  // hide level one complete screen, show level two/pop up wizard
  // })
  // call level two combat function/ all pop up wizard fight methods here
  let wizard = new PopUpWizard();
  console.log('player strong attack', playerStrongAttack);
  console.log('player weak attack', playerWeakAttack);
  console.log('wizard attack', wizardAttack);
  // $('#strong-attack').click(function() {
  //   playerStrongAttack(player, wizard);
  // });
  // $('#player-weak-attack').click(function() {
  //   playerWeakAttack(player, wizard);
  // });
  // $('#wizard-attack').click(function() {
  //   wizardAttack(player, wizard);
  // });
  // when pop up wizard or play dies show level two completion screen or game over screen
  // $(".levelTwoComplete").click(function() {
  // hide level two complete screen/ show final boss "dice roll"/ also any text screens
  // })
  // if player loses dice roll show game over screen/ if player wins show credits lol
});




    