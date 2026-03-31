
const baseurl = "https://pokeapi.co/api/v2/pokemon/"
/** @type {HTMLInputElement} */
const input = document.getElementById("input")
const searchbtn = document.getElementById("searchbtn")
const content = document.getElementById("content")

//addEventListener("DOMContentLoaded", load)

/*function load() {
    fetch(url) 
    .then(r => r.json())
    .then(data => {
        content.innerHTML = "";
        data.results.forEach(pokemon => {

            content.innerHTML += pokemon.name + "<br>"
            
        });
    })
}
*/

searchbtn.onclick = function() {
    const name = input.value.toLocaleLowerCase();

    const finalurl = baseurl + name;

    fetch(finalurl)
    .then(r => r.json())
    .then(data => {
        content.innerHTML = "";
        
            content.innerHTML = 
            `<h3>${data.name}</h3>
            <img src="${data.sprites.front_default}">
            <p>${data.game_index}</p>
        `;
        })
    }