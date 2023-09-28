const options = { year: 'numeric' };
document.getElementById("currentdate").innerHTML = new Date().getFullYear()

document.getElementById('lastModified').innerHTML = new Date(document.lastModified);