const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const time = document.querySelector(".timer");

let interval;
let timeleft = 1500;


const updateTimer = () =>{
    let min = Math.floor(timeleft / 60);
    let second = timeleft % 60;
    let frontTime = `${String(min).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
    time.textContent = frontTime;
}

const starttimer = () =>{
    interval = setInterval(()=>{
        timeleft--;
        updateTimer();
        if(timeleft === 0){
            clearInterval(interval);
            alert("times up")
            timeleft = 1500;
            updateTimer();
        }
    },1000);
}

const stoptime = () =>{
    clearInterval(interval);
}

const resettime = () =>{
    clearInterval(interval);
    timeleft = 1500;
    updateTimer();    
}

start.addEventListener("click",starttimer);
stop.addEventListener("click",stoptime);
reset.addEventListener("click",resettime);