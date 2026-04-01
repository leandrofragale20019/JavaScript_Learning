let secretnumber = Math.floor(Math.random() * 11);

/** @type {HTMLInputElement} */
const input = document.getElementById("input");
const btn = document.getElementById("button");


btn.onclick = function (){

    let userGuess = input.valueAsNumber

    if(userGuess == secretnumber){
        document.body.style.backgroundColor = "lightgreen";
        alert("YOU WON")
        secretnumber = Math.floor(Math.random() * 11);
        input.value = ""
    }else {
        document.body.style.backgroundColor = "tomato";
    }

    console.log("Geheimzahl war:", secretnumber, "Dein Tipp:", userGuess);
}
