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
const getMembersURL = "https://tucktuck94.github.io/wdd230/chamber/data/members.json";

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
