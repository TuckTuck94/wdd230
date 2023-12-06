function wheaterData(town, lat = 20.51, lon = -86.95) {

  const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?lat=" + 20.51 + "&lon=" + -86.95 + "&appid=f9bb398c42a5e0db7ee5d8fa04b70bde&units=imperial";
  const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + 20.51 + "&lon=" + -86.95 + "&appid=f9bb398c42a5e0db7ee5d8fa04b70bde&units=imperial";
  const alerts = "https://api.openweathermap.org/data/2.5/onecall?lat=" + 20.51 + "&lon=" + -86.95 + "&exclude=hourly,daily&appid=f9bb398c42a5e0db7ee5d8fa04b70bde&units=imperial";

  fetch(weatherAPI)
    .then((response) => response.json())
    .then((jsonObject) => {
      console.log(jsonObject);

      document.getElementById("cityname").innerHTML = jsonObject.name;
      document.getElementById("currently").innerHTML = jsonObject.weather[0].description;

      // Convert and display temperature with degree symbol
      const tempFahrenheit = jsonObject.main.temp.toFixed(1);
      document.getElementById("temp").innerHTML = `${tempFahrenheit}&#176;F`;

      document.getElementById("humidity").innerHTML = jsonObject.main.humidity;
    });

  fetch(forecastAPI)
    .then((response) => response.json())
    .then((jsonObject) => {
      const forecastList = jsonObject.list.filter((x) => x.dt_txt.includes("18:00:00"));

      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      for (let i = 0; i < 3; i++) {
        const foreDate = new

          Date(forecastList[i].dt_txt);
        const iconsrc = "https://openweathermap.org/img/w/" + forecastList[i].weather[0].icon + ".png";

        const forecastCard = document.createElement("div");
        const weekday = document.createElement("h3");
        const img = document.createElement("img");
        const forecastTemp = document.createElement("p");

        weekday.textContent = weekdays[foreDate.getDay()];
        img.setAttribute("src", iconsrc);
        img.setAttribute("alt", forecastList[i].weather[0].description);
        img.style.width = "4.4em";

        // Convert and display forecast temperature with degree symbol
        const forecastTempFahrenheit = forecastList[i].main.temp.toFixed(1);
        forecastTemp.innerHTML = `${forecastTempFahrenheit}&#176;F`;

        forecastCard.appendChild(weekday);
        forecastCard.appendChild(img);
        forecastCard.appendChild(forecastTemp);

        document.querySelector("div.dayforecast").appendChild(forecastCard);
      }
    });

  fetch(alerts)
    .then((response) => response.json())
    .then((jsonObject) => {
      console.log(jsonObject);
      console.log(jsonObject.alerts);

      if (jsonObject.alerts !== undefined) {
        document.getElementById("Bar").style.display = "block";
        document.getElementById("left").innerHTML = jsonObject.alerts[0].description;
      } else {
        Hide(document.getElementById("Bar"));
      }
    });
}

function Hide(hideId) {
  hideId.style.display = "none";
}