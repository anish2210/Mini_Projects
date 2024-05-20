let hex;
const randomHex = function () {
    const string = "0123456789ABCEDF";
    hex = "#";
    
    for (let i = 0; i < 6; i++) {
        hex += string[Math.floor(Math.random() * 16)];
    }
    return hex;
};

let interval;

const startChange = function () {
    if(!interval){
        interval = setInterval(changeBg, 1000);
    }
    function changeBg() {
        document.body.style.backgroundColor = randomHex();
        document.getElementById('code').textContent = `Color code: ${hex}`
    }
};

const stopChange = function () {
    clearInterval(interval);
    interval = null;
}

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

startBtn.addEventListener("click", startChange);
stopBtn.addEventListener("click", stopChange);
