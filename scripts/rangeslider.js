const value = document.querySelector("#ratingText");
const range = document.querySelector("#rating");

// RANGE event listener
range.addEventListener('change', displayValue);
range.addEventListener('input', displayValue);

function displayValue() {
    let stars = "";
    for (let i = 0; i < range.value; i++) {
        stars = stars + '★';
    }
    for (let i = 0; i < (10 - range.value); i++) {
        stars = stars + '☆';
    }
    value.innerText = `Page Rating: ${stars} (${range.value} out of 10)`;
}

value.innerText = "Page Rating: ★★★★★☆☆☆☆☆ (5 out of 10)";