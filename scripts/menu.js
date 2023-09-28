const navMenu = document.querySelector('.navigation')
const hamburger = document.querySelector('#menu');


hamburger.addEventListener('click', () => {
	navMenu.classList.toggle('show');
	hamburger.classList.toggle('show');
});