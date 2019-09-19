import $ from 'jquery';

export class LoadingBar {
  startLoadingBar() {
    let bar = document.getElementById("loadingBar");
    let width = 0; //starting point upon click
    let id = setInterval(frame, 200); //(function, delay between next load in ms) n / 10 = time to load bar in seconds
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        $('.loading-screen').fadeOut();
        $('.character-creator-page').fadeIn();
        $('.title-screen').fadeOut();
        $('#character-card1').show();
      } else {
        width++;
        bar.style.width = width + '%';
        bar.innerHTML = width * 1 + '%'; //the % each frame adds
      }
    }
  }

  chooseDiv() {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 6 + 1); //don't change +1, change *n if adding additiional divs
    console.log(randomNumber);

    if (randomNumber === 1) {
      $('#loadingMessage1').show();
      $('#loadingMessage2').hide();
      $('#loadingMessage3').hide();
      $('#loadingMessage4').hide();
      $('#loadingMessage5').hide();
      $('#loadingMessage6').hide();
    }

    if (randomNumber === 2) {
      $('#loadingMessage1').hide();
      $('#loadingMessage2').show();
      $('#loadingMessage3').hide();
      $('#loadingMessage4').hide();
      $('#loadingMessage5').hide();
      $('#loadingMessage6').hide();
    }

    if (randomNumber === 3) {
      $('#loadingMessage1').hide();
      $('#loadingMessage2').hide();
      $('#loadingMessage3').show();
      $('#loadingMessage4').hide();
      $('#loadingMessage5').hide();
      $('#loadingMessage6').hide();
    }

    if (randomNumber === 4) {
      $('#loadingMessage1').hide();
      $('#loadingMessage2').hide();
      $('#loadingMessage3').hide();
      $('#loadingMessage4').show();
      $('#loadingMessage5').hide();
      $('#loadingMessage6').hide();
    }

    if (randomNumber === 5) {
      $('#loadingMessage1').hide();
      $('#loadingMessage2').hide();
      $('#loadingMessage3').hide();
      $('#loadingMessage4').hide();
      $('#loadingMessage5').show();
      $('#loadingMessage6').hide();
    }

    if (randomNumber === 6) {
      $('#loadingMessage1').hide();
      $('#loadingMessage2').hide();
      $('#loadingMessage3').hide();
      $('#loadingMessage4').hide();
      $('#loadingMessage5').hide();
      $('#loadingMessage6').show();
    }
  }
}
