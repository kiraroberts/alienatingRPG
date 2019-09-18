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

  $("#swipe-left").click(function(event) {
    $("#character-card1").hide();
    $("character-card2").show();
    if



  });
  // $("#hidden_content").slideToggle("slow");
});
