export class LoadingBar {
  startLoadingBar() {
    let bar = document.getElementById("loadingBar");
    let width = 0; //starting point upon click
    let id = setInterval(frame, 200); //(function, delay between next load in ms) n / 10 = time to load bar in seconds
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        bar.style.width = width + '%';
        bar.innerHTML = width * 1 + '%'; //the % each frame adds
      }
    }
  }

  showRandomDiv() {
    let randomNumber = Math.floor(Math.random() * 4);
    let timer;

    function intervalFunction() {
      timer = setInterval(chooseDiv, 3000) //time in ms until next div is chosen.
    }

    function chooseDiv() {
      if (randomNumber === 1) {
        $('#loadingMessage1').style.display = 'inline';
        $('#loadingMessage2').style.display = 'none';
        $('#loadingMessage3').style.display = 'none';
      }
      if (randomNumber === 2) {
        $('#loadingMessage1').style.display = 'none';
        $('#loadingMessage2').style.display = 'inline';
        $('#loadingMessage3').style.display = 'none';
      }
      if (randomNumber === 3) {
        $('#loadingMessage1').style.display = 'none';
        $('#loadingMessage2').style.display = 'none';
        $('#loadingMessage3').style.display = 'inline';
      }
    }
  }
}

}

