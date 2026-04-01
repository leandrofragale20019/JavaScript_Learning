const baseurl = "https://api.openweathermap.org/";
/** @type {HTMLInputElement} */
const input = document.getElementById("input")
/** @type {HTMLInputElement} */
const apikeyinput = document.getElementById("apikey")
const searchbtn = document.getElementById("searchbtn")
const content = document.getElementById("content")

searchbtn.onclick = function() {
    const cityname = input.value.toLocaleLowerCase();
    const key = apikeyinput.value;
    const finalurl = baseurl + "data/2.5/weather?q=" + cityname + "&appid=" + key + "&units=metric"

    fetch(finalurl)
    .then(r => r.json())
    .then(data => {
        content.innerHTML = `
        <h2>${data.name}</h2>
        <h4> Country: ${data.sys.country} </h4> 
        Temperature : ${data.main.temp}<br>
        Max Temperature : ${data.main.temp_max}<br>
        Min Temperature : ${data.main.temp_min}<br>
        Feels Like : ${data.main.feels_like}<br>
        Status : ${data.weather[0].description}<br>
        Visibility : ${data.visibility} m <br>
        `
    })
}