const myText = document.getElementById("myText");
const toFahrenhiet = document.getElementById("toFahrenhiet");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenhiet.checked){
        temp = myText.value;
        temp = Number(temp);
        temp = (temp * 9/5) + 32;
        result.textContent = `${temp.toFixed(1)}°F`;
    }
    else if(toCelsius.checked){
        temp = myText.value;
        temp = Number(temp);
        temp = (temp -32) * 5/9;
        result.textContent = `${temp.toFixed(1)}°C`;
    }
    else{
        result.textContent = "Please choose one of these!";
    }
}