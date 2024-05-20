const randomHex = function () {
  const string = "0123456789ABCEDF";
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    hex += string[Math.floor(Math.random() * 16)];
  }
  return hex;
};

let interval;

const startChange = function () {
  interval = setInterval(changeBg, 1000);
  function changeBg() {
    document.body.style.backgroundColor = randomHex();
  }
};

const stopChange = function () {
    clearInterval(interval);
}

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

startBtn.addEventListener("click", startChange);
stopBtn.addEventListener("click", stopChange);
