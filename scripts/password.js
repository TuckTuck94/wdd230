const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const label = document.querySelector(".confirm");

confirmPassword.addEventListener("focusout", compare);

// This should be refactored.
function compare() {
    if (confirmPassword.value == password.value) {
        label.innerHTML = "Confirm Password";
    } else {
        label.innerHTML = "Confirm Password (Password does not match!)";
        confirmPassword.value = "";
        confirmPassword.focus();
    }
}