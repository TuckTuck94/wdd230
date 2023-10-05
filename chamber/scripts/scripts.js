//Responsive Hamburger Menu
function toggleMenu() {
    document.getElementsByClassName('primaryNav')[0].classList.toggle('responsive');

}



// Join Us Banner 
let invite = "";
if (days[date.getDay()] == 'Monday' || days[date.getDay()] == 'Tuesday') {
    invite = "Join Us in the Chamber! ";
} else {
    invite = "";
}
document.querySelector('#banner').innerHTML = invite;

// Current Date
let full_date = days[date.getDay()] + ', ' + dayNumber + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();
document.querySelector('.currentdate').innerHTML = full_date;

//Last Modified
document.querySelector('#lm').innerHTML = `Last Modified: ${document.lastModified}`;

//Copyright Year
document.querySelector('#yr').innerHTML = year; 