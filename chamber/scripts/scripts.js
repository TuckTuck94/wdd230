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

/*WEATHER*/
!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');
/*WIND CHILL*/
const tempInput = document.getElementById('temperature');
tempInput.addEventListener("keyup", getUpdate);

const wspeedInput = document.getElementById('windspeed');
wspeedInput.addEventListener("keyup", getUpdate);

getUpdate();

function getUpdate() {
    const temp = parseInt(document.getElementById('temperature').value);
    const wspeed = parseFloat(document.getElementById('windspeed').value);

    if (temp <= 50 && wspeed > 3.0) {
        const windChill = calculateWindChill(temp, wspeed)
        document.getElementById('windchill').textContent = windChill.toFixed(2) + " °F";
    } else {

        document.getElementById('windchill').textContent = "n/a";
    }
}

function calculateWindChill(temp, wspeed) {
    const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wspeed, 0.16) + 0.4275 * temp * Math.pow(wspeed, 0.16);
    return windChill;
}

const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Get the form data.


    const formData = new FormData(form);

    // Submit the form data to the server.
    fetch("thankyou.html", {
        method: "POST",
        body: formData,
    })
        .then(response => response.json())
        .then(data => {


        })
        .catch(error => {
        });
});