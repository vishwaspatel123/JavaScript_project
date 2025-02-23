const pound = document.getElementById("input");
const kg = document.getElementById("result");
const message = document.getElementById("error");


const update_weight = () => {
    pound.addEventListener("input", () => {
        let value = parseInt(pound.value);
        if (value > 0) {
            let weight_kg = value * 0.453592;
            kg.innerText = `${weight_kg.toFixed(2)} kg`;
        } else if (pound.value === "") {
            kg.innerText = "";
            message.innerText = "";
        }
        else {
            error_measse();
        }
    })
}

const error_measse = () => {
    if (parseInt(pound.value) <= 0) {
        message.innerText = "Please Enter a Valid number!";
        setTimeout(() => {
            message.innerText = "";
        }, 3000);
    }
    else {
        message.innerText = "";
    }
}

update_weight()