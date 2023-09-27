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

//hamburger menu
const mybtn = document.getElementById("hamburger");
const mynav = document.querySelector(".menu");

// Function to toggle the menu
function toggleMenu() {
    mynav.classList.toggle("open");
    if (mynav.classList.contains("open")) {
        mybtn.textContent = '✕'; // Change to 'X' when open
    } else {
        mybtn.textContent = '☰'; // Change back to hamburger symbol when closed
    }
}


mybtn.addEventListener("click", toggleMenu);


window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        mynav.classList.remove("open");
        mybtn.textContent = '☰';
    }
});

if (window.innerWidth > 768) {
    mybtn.textContent = '☰';
} else {
    mybtn.textContent = '☰';
}