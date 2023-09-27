//year of copyright
document.getElementById("year").innerHTML = new Date().getFullYear();

//last modified
var temp = document.lastModified
var n = parseInt(temp.substring(temp.length - 8, temp.length - 6))
if (n > 12) {
    document.getElementById("modified").innerHTML = "Last Modified: " +
        temp.substring(0, temp.length - 8) + (n - 12) + temp.substring(temp.length - 6) + " pm"
}
else {
    document.getElementById("modified").innerHTML = "Last Modified: " +
        temp + " am"
}
// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/