addEventListener("DOMContentLoaded", () => {

const button = document.getElementById("button-id") // Main start/stop button
const timer = document.querySelector(".timer") // Timer Display
const colorSwap = document.getElementById("btn") // Dark mode Toggle
const resetBtn = document.getElementById("btn-reset") // Reset Button

let startTime = null
let elapsedTime = 0
let timerInterval = null


const formatTime = (time) => {
const hours = String(Math.floor(time / 3600)).padStart(2, "0")
const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0")
const seconds = String(Math.floor(time % 60)).padStart(2, "0")
return `${hours}:${minutes}:${seconds}`;


}

const updateDisplay = () => {
   
    const now = Date.now();
    elapsedTime = Math.floor((now - startTime) / 1000);
    timer.textContent = formatTime(elapsedTime);

}


const startTimer = () => {

    if (!startTime) {
        startTime = Date.now() - (elapsedTime * 1000);
      }
      timerInterval = setInterval(updateDisplay, 1000);
      button.textContent = "Stop"; // Change Button Text

}

const stopTimer = () => {

    clearInterval(timerInterval);
    timerInterval = null;
    button.textContent = "Start"; // Change Button text
}

const resetTimer = () => {
    clearInterval(timerInterval);
    timerInterval = null;
    startTime = null;
    elapsedTime = 0;
    timer.textContent = formatTime(0);
    button.textContent = "Start"; // Reset Button to "Start"

}

const colorModeSwap = () => {
document.body.classList.toggle("dark-mode")

}

colorSwap.addEventListener("click", colorModeSwap)
resetBtn.addEventListener("click", resetTimer)
button.addEventListener("click", () => {

if(button.textContent === "Start") {
    startTimer()
} else if (button.textContent === "Stop") {
    stopTimer()
} 

});



});