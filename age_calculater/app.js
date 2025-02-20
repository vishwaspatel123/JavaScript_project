const btn = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const result = document.getElementById("result");


const calculateage = () =>{
    const birthvalue = birthdayEl.value;
    if(birthvalue === ""){
        alert("Please enter your birthday");
    }
    else{
        const age = getage(birthvalue);
        result.innerText = `Your age is ${age} years old`;
    }
}

const getage = (birthvalue) =>{
    const currentdate = new Date();
    const birthdaydate = new Date(birthvalue);
    let age = currentdate.getFullYear() - birthdaydate.getFullYear();

    const month = currentdate.getMonth() - birthdaydate.getMonth();

    if(month < 0 || (month === 0 && currentdate.getDate()-birthdaydate.getDate())){
        age--;
    }
    return age;
}

btn.addEventListener("click", calculateage);