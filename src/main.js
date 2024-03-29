import { Game } from './alienatingRPG.js';
import { Player } from './alienatingRPG.js';
import { LoadingBar } from './loading-bar.js';
import { PopUpWizard } from './alienatingRPG.js';
import { playerStrongAttack, playerWeakAttack, wizardPopUpAttack } from './combat.js';
import { rollDice, tomDiceRoll } from './dice-roll.js';


import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/okcharacter-styles.css';
import './../css/styles.css';
import './../css/title-screen.css';
import './../css/wizard.css';
import './../css/loading-bar.css';


$(document).ready(function() {
  $('.playgame').click(function(){
    let game = new Game();
    $('.titleHeader').fadeOut()
    $('.loading-screen').fadeIn(1000)
    $('#barButton').click(function() {
      let loadingBar = new LoadingBar();
      loadingBar.startLoadingBar();
      setInterval(function() {
        loadingBar.chooseDiv();
      }, 1500);

    });

    // QUIT GAME BUTTON
    $('#giveIn').click(function() {
      location.reload();
    });

    // LEVEL UP MODAL FUNCTION, SHOULD BE RUNNING IN BACKGROUND
    // const modal = document.getElementById("levelUpModal");
    //
    // const span = document.getElementByClassName("close")[0];
    //
    // setInterval(function() {
    //   modal.style.display = "block";
    // }, Math.floor(Math.random() * 5000));
    //
    // span.onclick = function() {
    //   modal.style.display = "none";
    // }


    //Character Card Starts Here
    $("#character-card1").show();
    $("#character-card2").hide();
    $("#character-card3").hide();
    $("#character-card4").hide();

    $("#swipe-left1").click(function() {
      $("#character-card1").hide();
      $("#character-card2").show();
    });
    $("#swipe-left2").click(function() {
      $("#character-card2").hide();
      $("#character-card3").show();
    });
    $("#swipe-left3").click(function() {
      $("#character-card3").hide();
      $("#character-card4").show();
    });
    $("#swipe-left4").click(function() {
      $("#character-card4").hide();
      $("#character-card1").show();
    });

    let characterId = 0;
    $("#swipe-right1").click(function() {
      characterId = 1;
      $(".character-creator-page").fadeOut();
      $(".pop-up-wizard").show();
      $(".main-body").show();
    });

    $("#swipe-right2").click(function() {
      characterId = 2;
      $(".character-creator-page").fadeOut();
      $(".pop-up-wizard").show();
      $(".main-body").show();
    });
    $("#swipe-right3").click(function() {
      characterId = 3;
      $(".character-creator-page").fadeOut();
      $(".pop-up-wizard").show();
      $(".main-body").show();
      console.log(characterId);
    });
    $("#swipe-right4").click(function() {
      characterId = 4;
      $(".character-creator-page").fadeOut();
      $(".pop-up-wizard").show();
      $(".main-body").show();
    });


    // NAME NEEDS TO BE ASSIGNED HERE
    let player = new Player('Still Single');

    // THIS BUTTON CONNECTS TO END OF CHARACTER SELECTION & BEGINS WIZARD LEVEL
    $(".wizardFight").click(function() {
      let wizard = new PopUpWizard();
      $('#playerHealth').text("HP: " + player.hp)
      $('#enemyHealth').text("HP: " + wizard.hp)
      $(".wizardFight").fadeOut();
      $(".wizard-live").fadeIn();
      setInterval(function() {
        wizardPopUpAttack($('#game-over'), player, wizard);
        console.log('player hp', player.hp);
      }, 3500);

      $('#strong-attack').click(function() {
        playerStrongAttack(player, wizard);
        $('#playerHealth').text("HP: " + player.hp)
        $('#enemyHealth').text("HP: " + wizard.hp)
        console.log('wizard hp', wizard.hp);
        if (wizard.wizardDeath() === true) {
          $('.levelTwoComplete').html('You defeated the monsterous Pop-Up Wizard!');
          $('.wizard-live').hide();
          $('.wizard-dead').show();
          $('.wizard-dead').fadeOut(5000);
          $(".levelTwoComplete").fadeIn(1500);
        }
      });

      $('#player-weak-attack').click(function() {
        playerWeakAttack(player, wizard);
        console.log('wizard hp', wizard.hp);
        $('#playerHealth').text("HP: " + player.hp)
        $('#enemyHealth').text("HP: " + wizard.hp)
        if (wizard.wizardDeath() === true) {
          $('.levelTwoComplete').html('You defeated the monsterous Pop-Up Wizard!');
          $('.wizard-live').hide();
          $('.wizard-dead').show();
          $('.wizard-dead').fadeOut(5000);
          $(".levelTwoComplete").fadeIn(5001);
          setTimeout(function() {
            $('.pop-up-wizard').hide();
          }, 5500);
        }
      });

      $(".lvl2next").click(function() {
        $(".levelTwoComplete").fadeOut()
        $(".pig-dice").fadeIn();
        let playerRoll = $('#roll-dice').val();
        let npcRoll;
        if (playerRoll === true) {
          npcRoll = tomDiceRoll();
        }
        if (playerRoll === tomDiceRoll) {
          $('.dice-roll-again').show();
        } else if (playerRoll > tomDiceRoll) {
          $('player-wins').fadeIn();
        }

      });
    });
  })
});

  // $(".levelTwoComplete").click(function() {
  // hide level two complete screen/ show final boss "dice roll"/ also any text screens
  // })
  // roll dice functions
