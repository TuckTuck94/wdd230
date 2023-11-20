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
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-description');
const threeDayFor = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.22&lon=-97.43&units=imperial&appid=6973a4b17cded0bc4a99143605f5a7e7';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.22&lon=-97.43&units=imperial&appid=6973a4b17cded0bc4a99143605f5a7e7';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  };
  try {
    const response = await fetch(forecasturl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  };
};

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp} &deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  weatherDesc.textContent = `${desc}`;
}

function displayForecast(data) {
  const currentDate = new Date();
  const headers = document.createElement('div');
  for (let i = 1; i <= 3; i++) {
    const today = document.createElement('h3');
    today.textContent = dayOfWeek(currentDate.getDay() + i);
    headers.appendChild(today);
  }

  const temperatures = document.createElement('div');
  data.list.forEach((day) => {
    switch (day.dt_txt) {
      default:
        break;
      case `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() + 1} 12:00:00`:
      case `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() + 2} 12:00:00`:
      case `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() + 3} 12:00:00`:

        const todaytemp = document.createElement('p');

        todaytemp.innerHTML = `${day.main.temp} &deg;F`;
        temperatures.appendChild(todaytemp);
    }

  });
  threeDayFor.appendChild(headers);
  threeDayFor.appendChild(temperatures);
}

function dayOfWeek(day) {
  switch (day) {

    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Error';
  }
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

//Directory View
const listbutton = document.querySelector("#list");
const gridbutton = document.querySelector("#grid");
const display = document.querySelector("article");


listbutton.addEventListener("click", () => {
  display.classList.add("directory-list");
  display.classList.remove("directory-grid");
});

gridbutton.addEventListener("click", () => {
  display.classList.add("directory-grid");
  display.classList.remove("directory-list");
});

//Directory Members
const getMembersURL = "chamber/data/members.json";

const directoryContainer = document.querySelector('.directory-list');

async function getMembers() {
  const response = await fetch(getMembersURL);
  const data = await response.json();

  console.log(data.companies);

  displayMembers(data.companies);
}

const displayMembers = (companies) => {
  companies.forEach((company) => {
    let mCard = document.createElement('section');
    let mName = document.createElement('h2');
    let mAddress = document.createElement('p');
    let mPhone = document.createElement('a');
    let mURL = document.createElement('a');
    let mLogo = document.createElement('img');
    let mMembership = document.createElement('p');

    mCard.setAttribute('class', 'member-card');

    mName.setAttribute('class', 'm-name');
    mName.textContent = company.name;

    mAddress.setAttribute('class', 'm-address');
    mAddress.textContent = company.address;

    mPhone.setAttribute('class', 'm-phone');
    mPhone.textContent = company.phone;
    mPhone.setAttribute('href', `tel:${company.phone}`);

    mURL.setAttribute('class', 'm-url');
    mURL.textContent = company.url;
    mURL.setAttribute('href', `https://${company.url}/`);
    mURL.setAttribute('target', '_blank');

    mLogo.setAttribute('class', 'm-logo');
    mLogo.setAttribute('src', company.logo);
    mLogo.setAttribute('alt', `Logo of ${company.name}`);
    mLogo.setAttribute('loading', 'lazy');

    mMembership.setAttribute('class', 'm-lvl');
    mMembership.textContent = company.membershipLvl;



    mCard.appendChild(mName);
    mCard.appendChild(mLogo);
    mCard.appendChild(mAddress);
    mCard.appendChild(mPhone);
    mCard.appendChild(mURL);



    directoryContainer.appendChild(mCard);
  });
}

getMembers();


/* Banner Script*/

const banner = document.querySelector("#banner");
const button = document.querySelector("#close-banner");

const newDate = new Date();
const today = newDate.toLocaleString("en-us", { weekday: "long" }).toLowerCase();

if (today === "monday" || today === "tuesday" || today === "wednesday") {
  banner.classList.add("banner-show")
  banner.classList.remove("banner-hide");
} else {
  banner.classList.add("banner-hide");
  banner.classList.remove("banner-show");
}

button.addEventListener("click", () => {
  banner.classList.add("banner-hide");
  banner.classList.remove("banner-show");
})