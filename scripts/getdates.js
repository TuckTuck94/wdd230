//year of copyright
document.getElementById("year").innerHTML = new Date().getFullYear();

//last modified
var temp = document.lastModified
var n = parseInt(temp.substring(temp.length-8,temp.length-6))
if (n>12) {
    document.getElementById("modified").innerHTML = "Last Modified: "+
        temp.substring(0,temp.length-8)+(n-12)+temp.substring(temp.length-6)+" pm"
}
else {
    document.getElementById("modified").innerHTML = "Last Modified: "+
        temp+" am"
}
