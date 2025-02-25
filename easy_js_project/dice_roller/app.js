const dice = document.querySelector(".dice");

const btn = document.querySelector("#roll-button");

const history = document.querySelector(".roll_history");

let historyList = [];

const roolDice = () => {
    const roll_result = Math.floor(Math.random() * 6) + 1;
    const diceface = getface(roll_result);
    dice.innerHTML = diceface;
    historyList.push(roll_result);
    updateRollHistory();
}

const updateRollHistory = () => {
    history.innerHTML = "";
    for(let i=0;i<historyList.length;i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i+1}: <span>${
            getface(historyList[i])              
        }</span> `
        history.appendChild(listItem);
    }
}
const getface = (roll_result) => {
    switch (roll_result) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

btn.addEventListener("click", ()=>{
    dice.classList.add("roll-animation");
    setTimeout(()=>{
        dice.classList.remove("roll-animation");
        roolDice();
    },1000);
});