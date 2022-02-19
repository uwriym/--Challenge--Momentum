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
    //가격 표시
    const basePrice = document.querySelector("#base-price span:last-child");
    basePrice.innerText = data[0].basePrice.toLocaleString("en-US");
    const buyingPrice = document.querySelector("#buying-price span:last-child");
    buyingPrice.innerText = data[0].cashBuyingPrice.toLocaleString("en-US");
    const sellingPrice = document.querySelector(
      "#selling-price span:last-child"
    );
    sellingPrice.innerText = data[0].cashSellingPrice.toLocaleString("en-US");

    //계산기
    const calculatorFormUsdToKrw = document.querySelector(
      "#exchange-rate-calculator__usdtokrw"
    );
    const calculateUsdToKrwInput = document.querySelector(
      "#exchange-rate-calculator__usdtokrw input"
    );
    calculateUsdToKrwInput.toLocaleString("en-US");

    const calculatorFromKrwtoUsd = document.querySelector(
      "#exchange-rate-calculator__krwtousd"
    );
    const calculateKrwtoUsdInput = document.querySelector(
      "#exchange-rate-calculator__krwtousd input"
    );

    //usd -> krw 계산기
    function calculateUsdToKrw(event) {
      event.preventDefault();
      const calculateResult = (
        calculateUsdToKrwInput.value * data[0].basePrice
      ).toLocaleString("en-US");

      const result = document.querySelector(
        "#exchange-rate-calculator__usdtokrw div"
      );

      result.innerText = `₩${calculateResult}`;
    }
    calculatorFormUsdToKrw.addEventListener("submit", calculateUsdToKrw);
    //krw -> usd 계산기
    function calculateKrwToUsd(event) {
      event.preventDefault();
      const calculateResult = (
        calculateKrwtoUsdInput.value / data[0].basePrice
      ).toLocaleString("en-US");

      const result = document.querySelector(
        "#exchange-rate-calculator__krwtousd div"
      );

      result.innerText = `$${calculateResult}`;
    }
    calculatorFromKrwtoUsd.addEventListener("submit", calculateKrwToUsd);
  });
