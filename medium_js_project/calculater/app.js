const input = document.getElementById("inputBox");
const btn = document.getElementsByTagName("button");

let result = "";
let string = "";
let arr = Array.from(btn);

arr.forEach(button =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            result = eval(string);
            input.value = result;
            string = result;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0 , string.length-1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});
