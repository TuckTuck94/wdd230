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