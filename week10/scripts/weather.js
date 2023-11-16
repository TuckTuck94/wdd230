const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=6973a4b17cded0bc4a99143605f5a7e7';

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
        const iconsrc = `https://openweathermap.org/img/wn/${event.icon}@4x.png`;
        let desc = event.description;

        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', `weather icon ${event.description}`);
        captionDesc.textContent = `${desc}`;
        captionDesc.style.textTransform = 'capitalize';
    })
}