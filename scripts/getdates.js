const options = { year: 'numeric' };
document.getElementById("currentdate").innerHTML = new Date().getFullYear()

document.getElementById('lastModified').innerHTML = new Date(document.lastModified);

// Number of Visits
const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Increment the number of visits when a user visits the website.
numVisits++;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}
else {
    visitsDisplay.textContent = "Welcome to my Website!";
    numVisits++;
}

// Store the number of visits in the user's browser.
localStorage.setItem("numVisits-ls", numVisits);

// Weather

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.22&lon=-97.43&units=imperial&appid=6973a4b17cded0bc4a99143605f5a7e7';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeather(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    data.weather.forEach((event) => {
        const iconsrc = `https://openweathermap.org/img/wn/${event.icon}.png`;
        let desc = event.description;

        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', `weather icon ${event.description}`);
        weatherDesc.textContent = `${desc}`;
        weatherDesc.style.textTransform = 'capitalize';
    })
}