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
    //
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
