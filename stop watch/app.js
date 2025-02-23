const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const timer = document.querySelector(".timer");

let Interval;

const updatetime = ()=>{

};

const startTime = ()=>{
    Interval = setInterval(()=>{
        
    },100);
}

const stoptime = () =>{
    clearInterval(Interval)
}