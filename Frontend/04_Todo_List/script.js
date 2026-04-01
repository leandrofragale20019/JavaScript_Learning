// Looks into LocalStrage if there is already something when not it creates a clear Array
let todos = JSON.parse(localStorage.getItem("meineListe")) || [];

const create = document.getElementById("createbtn");
/** @type {HTMLInputElement} */
const input = document.getElementById("listinput");
const listdisplay = document.getElementById("liste")

// Function for the Display
function display() {
    // Makes a clear Container
    listdisplay.innerHTML = "";

    // Goes over every Todo
    todos.forEach((text, index) =>{
        // Creates a new element "p" and the Content ist the Text
        let p = document.createElement("p");
        p.textContent = text;

        // Creates a new Delet Button
        let delbtn = document.createElement("button");
        delbtn.textContent = "Delete"

        // Function for whe Button is clicked
        delbtn.onclick = function() {
            // cleares the Element in this Array
            todos.splice(index, 1);
            // Safes the new Array
            safe()
        }

        // The Button ist glued to the "p"
        p.appendChild(delbtn);
        // The "p" is in transportet in the div
        listdisplay.appendChild(p)
    })


}

// Saves everything in the LocalStorage
function safe(){ 
    localStorage.setItem("meineListe", JSON.stringify(todos))
    display();
}

// When the creat Button is clocked
create.onclick = function(){
        // When the inputfield isnt clear
        if(input.value !== "") {
            // While push the todos in the Array
            todos.push(input.value);
            safe();
            // cleares the Input Field
            input.value = "";
            
        }

    }

display();