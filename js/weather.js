const API_KEY = "bd16f35adc550b492240118d868126eb";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const currentTemp = document.querySelector("#weather div:nth-child(2)");
      currentTemp.innerText = `${data.main.temp}°`;
      const city = document.querySelector("#weather div:nth-child(3)");
      city.innerText = data.name;
      const weatherIcon = document.querySelector("#weather > img");
      const imgURL =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      weatherIcon.setAttribute("src", imgURL);
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
