export class LoadingBar {

  startLoad() {
    let bar = document.getElementById("progressBar");
    const width = 0; //starting point upon click
    let id = setInterval(frame, 300); //(function, delay between next load in ms)
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        bar.style.width = width + '%';
        bar.innerHTML = width * 1 + '%';
      }
    }
  }
}

// fuck with a real progress bar here lmao - www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_label_js  
//