import { Game } from './alienatingRPG';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



$(document).ready(function() {
  $("#character-card1").show();
  $("#character-card2").hide();
  $("#character-card3").hide();
  $("#character-card4").hide();

  let characterId = 0;
  $("#swipe-right1").click(function(event) {
    characterId = 1;
  });
  $("#swipe-right2").click(function(event) {
    characterId = 2;
  });
  $("#swipe-right3").click(function(event) {
    characterId = 3;
    console.log(characterId);
  });
  $("#swipe-right4").click(function(event) {
    characterId = 4;
  });
  
  $("#swipe-left1").click(function(event) {
    $("#character-card1").hide();
    $("#character-card2").show();
  });
  $("#swipe-left2").click(function(event) {
    $("#character-card2").hide();
    $("#character-card3").show();
  });
  $("#swipe-left3").click(function(event) {
    $("#character-card3").hide();
    $("#character-card4").show();
  });
  $("#swipe-left4").click(function(event) {
    $("#character-card4").hide();
    $("#character-card1").show();
  });
});
