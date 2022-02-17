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

//환율
fetch(`https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD`)
  .then((response) => response.json())
  .then((data) => {
    const basePrice = document.querySelector("#base-price");
    basePrice.innerText = `Base Price: ${data[0].basePrice}`;
    const buyingPrice = document.querySelector("#buying-price");
    buyingPrice.innerText = `buying Price: ${data[0].cashBuyingPrice}`;
    const sellingPrice = document.querySelector("#selling-price");
    sellingPrice.innerText = `selling Price: ${data[0].cashSellingPrice}`;

    const exchangeCalculator = document.querySelector(
      "#exchange-rate-calculator"
    );
    const calculateResult = document.querySelector("#calculate-result");
    const exchangeCalculatorInput = document.querySelector(
      "#exchange-rate-calculator input"
    );
    function calculateExchange(event) {
      event.preventDefault();
      calculateResult.innerText = `$${exchangeCalculatorInput.value} = ₩${
        data[0].basePrice * exchangeCalculatorInput.value
      }`;
      exchangeCalculatorInput.value = "";
    }
    exchangeCalculator.addEventListener("submit", calculateExchange);
  });
