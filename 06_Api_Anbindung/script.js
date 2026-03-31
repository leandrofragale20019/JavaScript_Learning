const url = "https://pokeapi.co/api/v2/pokemon"
const content = document.getElementById("content")

addEventListener("DOMContentLoaded", load)

function load() {
    fetch(url) 
    .then(r => r.json())
    .then(data => {
        content.innerHTML = "";
        data.results.forEach(pokemon => {

            content.innerHTML += pokemon.name + "<br>"
            
        });
    })
}