const options = { year: 'numeric' };
document.getElementById("currentdate").innerHTML = new Date().getFullYear()

document.getElementById('lastModified').innerHTML = new Date(document.lastModified);

/*HAMBURGER MENU*/
const navMenu = document.querySelector('.navigation')
const hamburger = document.querySelector('#menu');


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.classList.toggle('show');
});

/*DARK MODE*/
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#666";
        main.style.header = "#666";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});