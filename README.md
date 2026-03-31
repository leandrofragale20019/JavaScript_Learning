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
- [ ] **Next :** Rock, Paper, Scissors 

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:9CA3AF,100:0D1117&height=2&section=header"/>
