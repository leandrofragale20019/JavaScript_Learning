<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:9CA3AF,100:0D1117&height=140&section=header&text=My%20JavaScript%20Journey&fontSize=40&fontColor=E5E7EB&animation=fadeIn" />

</div>

### About the Project

I am starting my journey into the world of JavaScript. This repository serves as a documentation of my mini-projects, where I learn how to bring static websites to life with logic and interaction.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:9CA3AF,100:0D1117&height=2&section=header"/>

### Completed Projects

#### 01 | Color Changer 
A tool that changes the background color of the page upon clicking a button.
- **Key Learning:** DOM manipulation and Event Listeners (`onclick`).
- **The Challenge:** Understanding the "bridge" between JS and HTML via IDs to target specific elements.

#### 02 | Interactive Counter 
A counter that performs calculations and dynamically changes UI colors based on the value.
- **Key Learning:** State management (variables), `if/else` logic, and function encapsulation (DRY principle).
- **The Challenge:** Overcoming the "Infinite Loop" trap. I learned that in web dev, we react to **Events** instead of using `while` loops to wait for user input.

#### 03 | Number Guessing Game 
A game where the computer thinks of a random number, and the player has to guess it.
- **Key Learning:** Generating random numbers with Math.random(), reading user input using .valueAsNumber, and converting data types.
- **The Challenge:** - ID vs. Class: Learning that getElementById strictly requires an ID, not just a CSS class, to trigger a function.
- **Dynamic State:** Understanding that the "Secret Number" needs to be reset or updated after a win to keep the game playable without refreshing the page.
- **Input Handling:** Realizing that an HTML element is just a "container" and I need to specifically target its .value to get the user's guess.

#### 04 | Persistent To-Do List
A task manager that remembers your entries even after a page reload.
- **Key Learning:** The "Source of Truth" principle. I learned that the UI (HTML) should only be a reflection of the Data (Array). If the data changes, the UI follows.
- **Technical Deep Dive:** * JSON Handling: Using JSON.stringify and JSON.parse to bypass LocalStorage's string-only limitation.
- **Re-rendering:** Instead of manipulating single elements, I built a draw() function that clears and rebuilds the list to keep it perfectly in sync with the data.
- **The Challenge:** Understanding why we need to clear the list (innerHTML = "") before redrawing – otherwise, every update would duplicate the entire list!

#### 05 | Advanced Mood Tracker
A personal mood diary that records your emotional state with a precise timestamp. This project marks my transition from simple strings to complex data objects.
- **Key Learning:** Working with **Data Objects** (`{ mood: "😊", time: "14:30" }`) to store multiple pieces of information in a single entry. I also learned to use the `Date()` object to capture real-time timestamps.
- **Technical Deep Dive:** - **Array Manipulation:** Switching from `.push()` to **`.unshift()`** to ensure the newest mood entry always appears at the top of the list.
    - **Template Literals:** Using backticks (`` ` ``) and `${}` to create dynamic HTML strings that cleanly inject object properties into the UI.
- **The Challenge:** - **Variable Scope:** Understanding that a variable created inside a click function is "private" and not accessible by the display function unless passed through the array.
    - **Data Mapping:** Learning how to access specific properties within an object inside a `.forEach()` loop (e.g., `item.stimmung`) instead of just treating the whole item as a string.
 
#### 06 | Pokémon API Connection
A project that connects to an external server to fetch real-time data from the **PokéAPI**. This marks my first step into the world of asynchronous programming and global data access.
- **Key Learning:** Using the **`fetch()`** API to make network requests. I learned how to handle **Promises** using `.then()` and how to transform a raw server response into a readable JSON object.
- **Technical Deep Dive:**
    - **Asynchronous Flow:** Understanding that fetching data from the internet takes time and that JavaScript uses "Promises" to manage data once it arrives from the server.
    - **DOM Mounting:** Using the `DOMContentLoaded` event to ensure the script only starts once the HTML structure is fully ready.
- **The Challenge:**
    - **Data Navigation:** Learning how to dig through nested API objects (like `data.results`) to find the exact information (the Pokémon names) I want to display.
    - **JSON Parsing:** Realizing that a server response isn't immediately an array or object, but must first be "unlocked" with the `.json()` command.
 
#### 07 | Fragale Weather App
A real-time weather application that fetches global weather data using the **OpenWeatherMap API**. This project introduces dynamic URL parameters and basic security practices.
- **Key Learning:** Working with **Multiple API Parameters**. I learned how to construct complex URLs using base paths, query parameters (`?q=`), and security keys (`&appid=`).
- **Technical Deep Dive:**
    - **Security Awareness:** Instead of hardcoding my private API key, I implemented an input field (`type="password"`) so the user can provide their own key, keeping the source code safe.
    - **Data Mapping:** Deep diving into the OpenWeather JSON structure to find nested values like `data.sys.country`, `data.main.temp`, and the weather description inside an array `data.weather[0]`.
- **The Challenge:**
    - **Unit Conversion:** Using the `units=metric` parameter to ensure the API returns Celsius instead of Kelvin.
    - **JSON Navigation:** Understanding that the weather description is stored inside an array (using `[0]`), while temperature is a direct property of the `main` object.


<img src="https://capsule-render.vercel.app/api?type=rect&color=0:9CA3AF,100:0D1117&height=2&section=header"/>

### Tech Stack & Tools

#### Frontend & Logic
[![JavaScript](https://img.shields.io/badge/JavaScript-0D1117?style=for-the-badge&logo=javascript&logoColor=9CA3AF)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-0D1117?style=for-the-badge&logo=html5&logoColor=9CA3AF)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-0D1117?style=for-the-badge&logo=css3&logoColor=9CA3AF)](https://developer.mozilla.org/en-US/docs/Web/CSS)

#### Development Environment
[![VS Code](https://img.shields.io/badge/VS%20Code-0D1117?style=for-the-badge&logo=visualstudiocode&logoColor=9CA3AF)](https://code.visualstudio.com/)


<img src="https://capsule-render.vercel.app/api?type=rect&color=0:9CA3AF,100:0D1117&height=2&section=header"/>

### Roadmap

- [x] Project 01: Background Color Switcher
- [x] Project 02: Logic Counter (Positive/Negative color states)
- [x] Project 03: Guess the Number Game (Handling Inputs & `Math.random`)
- [x] Project 04: Todo-List with LocalStorage persistence
- [x] Project 05: Mood Tracker first step into Data Structures
- [x] Project 06: API Connection (Pokedex)
- [x] Project 07: Weather App

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:9CA3AF,100:0D1117&height=2&section=header"/>
