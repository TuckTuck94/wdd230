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