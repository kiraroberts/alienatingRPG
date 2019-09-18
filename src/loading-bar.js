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
    let randomNumber = Math.floor(Math.random() * 10);
    let timer;

    function intervalFunction() {
      timer = setInterval(chooseDiv, 3000) //time in ms until next div is chosen.
    }

    function chooseDiv() {
      if (randomNumber === 1) {
        $('#bullshitmessage1').style.display = 'inline';
        $('#bullshitmessage2').style.display = 'none';
        $('#bullshitmessage3').style.display = 'none';
      }
      if (randomNumber === 2) {
        $('#bullshitmessage1').style.display = 'none';
        $('#bullshitmessage2').style.display = 'inline';
        $('#bullshitmessage3').style.display = 'none';
      }
      if (randomNumber === 3) {
        $('#bullshitmessage1').style.display = 'none';
        $('#bullshitmessage2').style.display = 'none';
        $('#bullshitmessage3').style.display = 'inline';
      }
    }
  }
}


  // fuck with a real progress bar here lmao - www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_label_js