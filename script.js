const startbtn = document.getElementById("startbtn");
const stopbtn = document.getElementById("stopbtn");
const resetbtn = document.getElementById("resetbtn");
const lapbtn = document.getElementById("lapbtn");

let mins = 0;
let secs = 0;
let mms = 0;
let interval = null;
let running = false;

const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");
const mmsEl = document.getElementById("mms");
const lapList = document.getElementById("list");

// Hide reset initially
resetbtn.style.display = "none";

function updateDisplay() {
    minsEl.innerHTML = mins < 10 ? "0" + mins : mins;
    secsEl.innerHTML = secs < 10 ? "0" + secs : secs;
    mmsEl.innerHTML = mms < 10 ? "0" + mms : mms;
}

startbtn.addEventListener("click", function () {
    if (running) return; // Prevent multiple intervals

    running = true;
    resetbtn.style.display = "none";

    interval = setInterval(function () {
        mms++;

        if (mms === 100) {
            mms = 0;
            secs++;

            if (secs === 60) {
                secs = 0;
                mins++;
            }
        }

        updateDisplay();
    }, 10);
});

stopbtn.addEventListener("click", function () {
    if (!running) return;

    clearInterval(interval);
    running = false;

    resetbtn.style.display = "inline-block"; // Show reset only when stopped
});

resetbtn.addEventListener("click", function () {
    mins = 0;
    secs = 0;
    mms = 0;

    updateDisplay();
    lapList.innerHTML = ""; // Clear laps
    resetbtn.style.display = "none";
});

lapbtn.addEventListener("click", function () {
    if (!running) return; // Optional: only allow lap when running

    const lapTime = document.createElement("li");
    lapTime.innerText = `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}:${mms < 10 ? "0" + mms : mms}`;
    lapList.appendChild(lapTime);
});