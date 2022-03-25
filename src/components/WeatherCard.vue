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

// only visible if error is fetched
.wea-error-note {
  background-color: var(--errorbackground);
  display: none;

  & p {
    color: var(--errorcolor);
    text-align: center;
  }
}

.wea-info-wrapper {
  margin-top: 12px;

  @media screen and (min-width: 640px) {
    display: grid;
    grid-gap: 10px;
  }

  @media screen and (min-width: 800px) {
    display: block;
  }
}

.wea-icon-desc-container {
  align-items: center;
  display: grid;
  grid-gap: 10px;

  @media screen and (min-width: 640px) {
    grid-column: 1 / 2;
  }
}

.wea-location {
  background-color: var(--white);
  grid-column: 1 / 4;
  text-align: center;

  & p {
    font-size: 24px;
  }
}

.wea-icon {
  grid-column: 1 / 2;
  text-align: center;

  & img {
    @media screen and (min-width: 360px) {
      width: auto;
    }
  }
}

.wea-temp-main {
  /* align-items: start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap; */
  grid-column: 2 / 4;
  justify-content: center;
  text-align: left;

  & p {
    cursor: pointer;
    font-size: 56px;
    line-height: 1em;
  }
}

.wea-temp-change {
  font-size: 12px;
}

.wea-desc {
  grid-column: 1 / 4;
  text-align: center;
}

[data-desc='wea-desc'] {
  text-transform: capitalize;
}

.wea-wind-sun-container {
  display: grid;
  grid-gap: 10px;
  margin-top: 18px;

  @media screen and (min-width: 640px) {
    display: block;
    grid-column: 2 / 3;
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    margin-top: 18px;
  }
}

.wea-icon-desc-container,
.wea-wind-sun-container {
  background: linear-gradient(
    155deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 0.25) 100%
  );
  border-radius: 5px;
  padding: 1em;
}

@media screen and (min-width: 640px) {
  .wea-sun {
    margin-top: 10px;
  }
}

.wea-sunrise,
.wea-sunset {
  align-items: flex-end;
  display: flex;
}

[data-sunrise='wea-sunrise'],
[data-sunset='wea-sunset'] {
  margin-right: 6px;
}

.wea-sunrise-svg,
.wea-sunset-svg {
  height: 35px;
  margin-right: 8px;
  width: auto;
}
</style>
