
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
    const name = input.value.toLowerCase();
    const finalurl = baseurl + name;

    fetch(finalurl)
    .then(r => r.json())
    .then(data => {
        content.innerHTML = `
            <div class="pokemon-card">
                <h3>${data.name}</h3>
                <img src="${data.sprites.front_default}">
                <div class="info-text">
                    <strong>Nummer:</strong> #${data.id}<br>
                    <strong>Typ:</strong> ${data.types[0].type.name}<br>
                    <strong>Gewicht:</strong> ${data.weight / 10} kg<br>
                    <strong>Grösse:</strong> ${data.height / 10} m
                </div>
            </div>
        `;
    })
}