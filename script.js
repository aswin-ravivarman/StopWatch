// document.getElementById("mins").innerHTML = "00";
// document.getElementById("secs").innerHTML = "00";
// document.getElementById("mms").innerHTML = "00";

const button = document.getElementById("startbtn");
const stopbtn = document.getElementById("stopbtn");
const resetbtn = document.getElementById("resetbtn");
const lapbtn = document.getElementById("lapbtn");


let mins = 0;
let secs = 0;
let mms = 0;
button.addEventListener("click", function () {

    const interval = setInterval(function () {
        mms++;
        if (mms == 100) {
            mms = 0;
            secs++;
            if (secs == 60) {
                secs = 0;
                mins++;
            }
        }
        
        document.getElementById("mins").innerHTML = mins < 10 ? "0" + mins : mins;
        document.getElementById("secs").innerHTML = secs < 10 ? "0" + secs : secs;
        document.getElementById("mms").innerHTML = mms < 10 ? "0" + mms : mms;
    }, 10)
    
    
    stopbtn.addEventListener("click", function () {
        clearInterval(interval);
    });


    resetbtn.addEventListener("click", function () {
        mins = 0;
        secs = 0;
        mms = 0;
        document.getElementById("mins").innerHTML = "00";
        document.getElementById("secs").innerHTML = "00";
        document.getElementById("mms").innerHTML = "00";

        

    });
    
    const lapList = document.getElementById("list");
    
    lapbtn.addEventListener("click", function () {
        const lapTime = document.createElement("li");
        lapTime.innerText = `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}:${mms < 10 ? "0" + mms : mms}`;
        lapList.appendChild(lapTime);
    });


});
