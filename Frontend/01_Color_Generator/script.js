const btn = document.getElementById("colorbtn")
const colorDisplay = document.getElementById("colorName")

       btn.onclick = function () {

        let neueFarbe = "#" + Math.floor(Math.random()*16777215).toString(16);
            
        document.body.style.backgroundColor = neueFarbe;
        colorDisplay.innerHTML = neueFarbe;
        }