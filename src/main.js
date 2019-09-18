import { Game } from './alienatingRPG.js';
import { Player } from './alienatingRPG.js';
import { PopUpWizard } from './../src/alienatingRPG.js';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import './../css/wizard.css';


$(document).ready(function() {
    console.log(Player);
    console.log(Game);
    console.log(PopUpWizard);
    // $('.start-game').show();
  $('.start-game').click(function() {
    // let game = new Game();
    // hide start screen &
    // fade-in character creator
  });

  // $('.character-creator').click(function() {
  // right swipe is what calls this function
  // creates a variable to house the players name (and pass picture to display)
  // let player = new Player('x')
  //
  // confirm character choice button assigns character to display variable and hides character creation screen/show level 1
  // })
  // loading screen/level 1 function calls
  // end of function hides level 1 and shows level one complete screen
  // })
  // $(".levelOneComplete").click(function() {
  // hide level one complete screen, show level two/pop up wizard
  // })
    let popWiz = new PopUpWizard()
  // call level two combat function/ all pop up wizard fight methods here

    if (popWiz.wizardDeath($('.levelTwoComplete')) === true) {
      $('.wizard-live').hide();
      $('.wizard-dead').show();
      $('.wizard-dead').fadeOut(1000);
      $(".levelTwoComplete").fadeIn(1500);
    }

  $(".lvl2next").click(function() {
    $(".levelTwoComplete").fadeOut()
    $(".pig-dice").fadeIn();

  })
  // $(".levelTwoComplete").click(function() {
  // hide level two complete screen/ show final boss "dice roll"/ also any text screens
  // })
  // if player loses dice roll show game over screen/ if player wins show credits lol


});
