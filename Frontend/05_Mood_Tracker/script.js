let mood = JSON.parse(localStorage.getItem("moodlist")) || [];

/** @type {HTMLInputElement} */
const badbtn = document.getElementById("badbtn");
/** @type {HTMLInputElement} */
const midbtn = document.getElementById("midbtn");
/** @type {HTMLInputElement} */
const goodbtn = document.getElementById("goodbtn");
const moodlist = document.getElementById("moodlist")

function display() {
    moodlist.innerHTML = "";

    mood.forEach((eintrag, index) => {
        let p = document.createElement("p")
        p.textContent = `${eintrag.zeit}: Mir geht es ${eintrag.stimmung}`;

        let delbtn = document.createElement("button");
        delbtn.textContent = "Delete"

        delbtn.onclick = function() {
            mood.splice(index, 1);
            safe()
        }
        p.appendChild(delbtn);
        moodlist.appendChild(p)
    })
}

function safe() {
    localStorage.setItem("moodlist", JSON.stringify(mood));
    display();
}

badbtn.onclick = function(){

    let eintrag = {
        stimmung: "Schlächt 😭",
        zeit: new Date().toLocaleTimeString()
    }
    mood.unshift(eintrag);
    safe();
}

midbtn.onclick = function(){

    let eintrag = {
        stimmung: "Mid 😐",
        zeit: new Date().toLocaleTimeString()
    }
    mood.unshift(eintrag);
    safe();
}

goodbtn.onclick = function(){

    let eintrag = {
        stimmung: "good 😊",
        zeit: new Date().toLocaleTimeString()
    }
    mood.unshift(eintrag);
    safe();
}

display();