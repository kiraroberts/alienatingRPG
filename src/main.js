import { Game } from './alienatingRPG.js';
import { Player } from './alienatingRPG.js';
import { LoadingBar } from './loading-bar.js';
import { PopUpWizard } from './alienatingRPG.js';
import { playerStrongAttack, playerWeakAttack, wizardAttack, wizardPopUpAttack } from './combat.js';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import './../css/title-screen.css'
import './../css/wizard.css';
import './../css/loading-bar.css';


$(document).ready(function() {
  $('.playgame').click(function(){
    $('.title-screen').fadeOut()
    $('.main-body').fadeIn(1000)
  })
  $('#barButton').click(function() {
    let loadingBar = new LoadingBar();
    loadingBar.startLoadingBar();
  });

  // $('.start-game').show();

  $('.start-game').click(function() {
  let game = new Game();
  // hide start screen &
  // fade-in character creator

  // LEVEL UP MODAL FUNCTION, SHOULD BE RUNNING IN BACKGROUND
  const modal = document.getElementById("levelUpModal");

  const span = document.getElementByClassName("close")[0];

  setInterval(function() {
  modal.style.display = "block";
  }, Math.floor(Math.random() * 60000));

  span.onclick = function() {
  modal.style.display = "none";
  }


   // $('.character-creator').click(function() {
  // right swipe is what calls this function
  // creates a variable to house the players name (and pass picture to display)


  let player = new Player('playerName');

 // confirm character choice button assigns character to display variable and hides character creation screen/show level 1

  // })
  // loading screen/level 1 function calls
  // end of function hides level 1 and shows level one complete screen
  // })
  // $(".levelOneComplete").click(function() {
  // hide level one complete screen, show level two/pop up wizard
  // })

  // THIS BUTTON CONNECTS TO END OF LOADING SCREEN & BEGINS WIZARD LEVEL
  $('#start-level-two').click(function() {
    let wizard = new PopUpWizard();
    setInterval(function() {
      wizardPopUpAttack($('#game-over'));
      console.log('wizard has attacked', player.hp);
    }, 3500);

    $('#strong-attack').click(function() {
      playerStrongAttack(player, wizard);
      if (wizard.wizardDeath() === true) {
        $('.levelTwoComplete').html('You defeated the monsterous Pop-Up Wizard!');
        $('.wizard-live').hide();
        $('.wizard-dead').show();
        $('.wizard-dead').fadeOut(1000);
        $(".levelTwoComplete").fadeIn(1500);
      }
    });

    $('#player-weak-attack').click(function() {
      playerWeakAttack(player, wizard);
      if (wizard.wizardDeath() === true) {
        $('.levelTwoComplete').html('You defeated the monsterous Pop-Up Wizard!');
        $('.wizard-live').hide();
        $('.wizard-dead').show();
        $('.wizard-dead').fadeOut(1000);
        $(".levelTwoComplete").fadeIn(1500);
      }
    });

  $(".lvl2next").click(function() {
    $(".levelTwoComplete").fadeOut()
    $(".pig-dice").fadeIn();

  })
  });
  });

  // $(".levelTwoComplete").click(function() {
  // hide level two complete screen/ show final boss "dice roll"/ also any text screens
  // })
  // if player loses dice roll show game over screen/ if player wins show credits lol
});
