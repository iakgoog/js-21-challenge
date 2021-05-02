(() => {
  const KEY = `fcdf66a8-6efe-42c4-8c86-db93f3a497e1`;

  async function getAirQuality({ city, state, country }) {
    const response = await fetch(
      `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${KEY}
    `);
    const { data: { current } } = await response.json();
    const { pollution, weather } = current;
    return {
      aqi: pollution.aqius,
      temperature: weather.tp,
      humidity: weather.hu,
      wind: weather.ws
    };
  }

  function displayAirQuality({ city, state, country, aqi, temperature, humidity, wind }) {
    const cityElem = document.querySelector('.city');
    const stateCountryElem = document.querySelector('.state-country');
    const aqiElem = document.querySelector('.aqi > h1');
    const temperatureElem = document.querySelector('.temperature');
    const humidityElem = document.querySelector('.humidity');
    const windElem = document.querySelector('.wind');

    cityElem.innerText = city;
    stateCountryElem.innerText = `${state}, ${country}`;
    aqiElem.innerText = aqi;
    temperatureElem.innerText = `Temp: ${temperature}`;
    humidityElem.innerText = `Humidity: ${humidity}%`;
    windElem.innerText = `Wind: ${wind} m/s`;
  }

  function setAiryQualityColor(aqi) {
    function getQuality(aqi) {
      switch (aqi) {
        case aqi <= 50: return 'good'; break;
        case aqi <= 100: return 'medium'; break;
        default: return 'bad'; break;
      }
    }

    document.documentElement.style.setProperty(
      '--current-aqi-color',
      `var(--${getQuality(aqi)}-aqi-color)`
    )
  }

  async function run() {
    const city = 'Sathon';
    const state = 'Bangkok';
    const country = 'Thailand';

    const { aqi, temperature, humidity, wind } = await getAirQuality({ city, state, country });

    displayAirQuality({
      city,
      state,
      country,
      aqi,
      temperature,
      humidity,
      wind
    });

    setAiryQualityColor(aqi);
  }

  run();
})();
