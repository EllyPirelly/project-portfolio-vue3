<template>
  <section class="section-wrapper weather">
    <div class="wea-container">
      <div class="second-headline">Current weather in Berlin, Germany</div>
      <div class="wea-info-wrapper">
        <div class="wea-icon-desc-container">
          <div class="wea-location">
            <p data-location="wea-location">-</p>
          </div>
          <div class="wea-icon" data-icon="wea-icon">
            <img src="../assets/img/weather-icons/unknown.png" alt="" />
          </div>

          <div class="wea-temp-main">
            <p data-temp-main="wea-temp-main">- <span>- °C</span></p>
            <span class="wea-temp-change">Click to change to °F / °C</span>
          </div>

          <div class="wea-desc">
            <span data-desc="wea-desc">-</span>
          </div>
        </div>
        <div class="wea-wind-sun-container">
          <div class="wea-wind">
            <span class="wea-wind-speed">
              <p>
                Wind speed:
                <span data-wind-speed="wea-wind-speed">-</span> km/h
              </p>
            </span>
            <span class="wea-wind-dir">
              <p>Wind direction: <span data-wind-dir="wea-wind-dir">-</span></p>
            </span>
          </div>
          <div class="wea-sun">
            <span class="wea-sunrise">
              <SvgSunrise />
              <span data-sunrise="wea-sunrise">-</span><span>(am)</span>
            </span>
            <span class="wea-sunset">
              <SvgSunset />
              <span data-sunset="wea-sunset">-</span><span>(pm)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgSunrise from '../assets/img/svg/SvgSunrise.vue'
import SvgSunset from '../assets/img/svg/SvgSunset.vue'

export default {
  name: '',

  components: {
    SvgSunrise,
    SvgSunset,
  },

  data() {
    return {
      //
    }
  },

  methods: {
    /*           makeMeWork() {
        //makemework
        import icons from '../img/weather-icons/*.png'

const WeatherApp = (function () {
  // API key
  const key = 'a662bc31b2ba6bfbd3bf6288c5394603'

  // select data-attributes to manipulate elements
  const weatherLocation = document.querySelector(
    '[data-location="wea-location"]'
  )
  const weatherIcon = document.querySelector('[data-icon="wea-icon"]')
  const weatherTempMain = document.querySelector(
    '[data-temp-main="wea-temp-main"]'
  )
  const weatherDesc = document.querySelector('[data-desc="wea-desc"]')
  const weatherWindspeed = document.querySelector(
    '[data-wind-speed="wea-wind-speed"]'
  )
  const weatherWinddir = document.querySelector(
    '[data-wind-dir="wea-wind-dir"]'
  )
  const weatherSunrise = document.querySelector('[data-sunrise="wea-sunrise"]')
  const weatherSunset = document.querySelector('[data-sunset="wea-sunset"]')

  // empty object for (fetched) data
  const weather = {}

  weather.temperature = {
    unit: 'celsius',
  }

  // display weather
  const displayWeather = () => {
    weatherLocation.innerHTML = `${weather.city}`
    weatherIcon.innerHTML = `<img src="${icons[weather.iconId]}" />`
    weatherTempMain.innerHTML = `${weather.temperature.value}°<span>C</span>`
    weatherDesc.innerHTML = weather.description
    weatherWindspeed.innerHTML = weather.windspeed
    weatherWinddir.innerHTML = weather.winddir
    weatherSunrise.innerHTML = weather.sunrise
    weatherSunset.innerHTML = weather.sunset
  }

  const lang = document.documentElement.lang

  // translation GB <-> DE
  const translations = {
    en: {
      'clear sky': 'clear sky',
      'few clouds': 'few clouds',
      'scattered clouds': 'scattered clouds',
      'broken clouds': 'broken clouds',
      'shower rain': 'shower rain',
      rain: 'rain',
      thunderstorm: 'thunderstorm',
      snow: 'snow',
      mist: 'mist',
    },
    de: {
      'clear sky': 'klarer Himmel',
      'few clouds': 'vereinzelt Wolken',
      'scattered clouds': 'bewölkt',
      'broken clouds': 'aufreißende Bewölkung',
      'shower rain': 'vereinzelt Schauer',
      rain: 'Regen',
      thunderstorm: 'Gewitter',
      snow: 'Schnee',
      mist: 'Nebel',
    },
  }

  // m/sec to km/h
  const mSecToKmh = (mSec) => {
    return mSec * 3.6
  }

  // degree to compass
  const degreeToCompass = (deg) => {
    const compass = [
      'N',
      'NNO',
      'NO',
      'ONO',
      'O',
      'OSO',
      'SO',
      'SSO',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ]
    const index = Math.round((deg % 360) / 22.5)
    return compass[index]
  }

  // API weather
  const getWeather = () => {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=52.5145&lon=13.3501&units=metric&appid=${key}`

    fetch(api)
      .then(function (response) {
        const data = response.json()
        return data
      })
      .then(function (data) {
        weather.city = data.name
        weather.country = data.sys.country
        weather.iconId = data.weather[0].icon
        weather.temperature.value = Math.floor(data.main.temp)
        weather.windspeed = mSecToKmh(Math.round(data.wind.speed))
        weather.winddir = degreeToCompass(data.wind.deg)

        const weatherDescription = data.weather[0].description

        const grabTranslation = (weathertransValue) => {
          return translations[lang][weathertransValue]
        }

        weather.description = grabTranslation(weatherDescription)

        const options = {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }

        weather.sunrise = new Date(data.sys.sunrise * 1000).toLocaleString(
          'de-DE',
          options
        )

        weather.sunset = new Date(data.sys.sunset * 1000).toLocaleString(
          'de-DE',
          options
        )

        displayWeather()
      })

      .catch((error) => {
        throw error
      })
  }

  // celsius to fahrenheit conversion
  const celsiusToFahrenheit = (temperature) => {
    return (temperature * 9) / 5 + 32
  }

  // toggle temperature celsius to fahrenheit
  const toggleTemperature = () => {
    if (weather.temperature.value === undefined) return

    if (weather.temperature.unit == 'celsius') {
      let fahrenheit = celsiusToFahrenheit(weather.temperature.value)
      fahrenheit = Math.floor(fahrenheit)
      weatherTempMain.innerHTML = `${fahrenheit}°<span>F</span>`
      weather.temperature.unit = 'fahrenheit'
    } else {
      weatherTempMain.innerHTML = `${weather.temperature.value}°<span>C</span>`
      weather.temperature.unit = 'celsius'
    }
  }

  const init = () => {
    getWeather()

    // temperature change on click
    weatherTempMain.addEventListener('click', toggleTemperature)
  }

  return {
    init,
  }
})()

document.addEventListener('DOMContentLoaded', WeatherApp.init)

        //makemework
      }, */
  },
}
</script>

<style lang="scss">
.section-wrapper.weather {
  @media screen and (min-width: 800px) {
    grid-row: 7 / 8;
  }
}

.wea-container {
  background: linear-gradient(
    155deg,
    rgba(113, 152, 187, 1) 0%,
    rgba(194, 218, 232, 1) 60%
  );
}
</style>
