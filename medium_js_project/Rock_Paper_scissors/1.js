let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userpara = document.querySelector("#user-score");
const comppara = document.querySelector("#comp-score");

const gencompchoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}

const drawgame = () =>{
    msg.innerText = "game is draw. play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin,userChoice,compchoice) =>{
    if(userwin){
        userscore++;
        userpara.innerText=userscore;
        msg.innerText = `You Win! Your ${userChoice} beat ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        comppara.innerText=compscore;
        msg.innerText = `You lost! ${compchoice} beat your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame = (userChoice)=>{
    const compchoice = gencompchoice();
    if(userChoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userChoice == "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            userwin = compchoice==="scissors" ? false : true; 
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userChoice,compchoice);
    }
};         

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
