
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null; 
  }

  start(callback) {
    this.intervalId = setInterval(()=> {
      this.currentTime++;
    }, 1 * 1000)

  }

  getMintues() {
   return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime%60
  }

  computeTwoDigitNumber(number) {

    if(number.toString().length >= 2) return number.toString();
    else return '0' + number;
  };

stop(){
  clearInterval(this.intervalID);
}

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = computeTwoDigitNumber(this.getMintues)
    let seconds = this.computeTwoDigitNumber(this.getSeconds)
    
    let totalTime = minutes + "." + seconds 
    return totalTime 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

/*
  let button = (document.getElementsByClassName(("start-button");
  button.addEventListener(("click", buttonStart);

   function buttonStart() {
      if (this.innerText === "start") {
        this.innerText = "stop";
      } else {
        this.innerText = "start";
      } 
      element.classList.toggle("buttonStart")

      console.log(buttonStart)
*/