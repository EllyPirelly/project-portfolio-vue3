<template>
  <div class="sn-back-btn">
    <router-link to="/" class="sn-back-btn-container wobble-link">
      <SvgArrowLeft />
      <span class="sn-back-btn-text">Back to Homepage</span>
    </router-link>
  </div>

  <div class="sn-bp-container">
    <router-link to="./blog-overview" class="sn-headline-link">
      <h2 class="sn-headline">Blog Posts Overview</h2>
    </router-link>

    <div class="sn-bp-wrapper">
      <router-link to="./blog-my-first-medium-article" class="sn-bp-link"
        >My first Medium article<span class="sn-bp-seperator"
          >|</span
        ></router-link
      >
      <router-link to="./blog-my-first-medium-article" class="sn-bp-link"
        >Lorem Dummy 01<span class="sn-bp-seperator">|</span></router-link
      >
      <router-link to="./blog-my-first-medium-article" class="sn-bp-link"
        >Dummy Ipsum Dolor 02<span class="sn-bp-seperator">|</span></router-link
      >
      <router-link to="./blog-my-first-medium-article" class="sn-bp-link"
        >At Verso Dummy 03<span class="sn-bp-seperator">|</span></router-link
      >
      <router-link to="./blog-my-first-medium-article" class="sn-bp-link"
        >Accusam Dummy et 04<span class="sn-bp-seperator">|</span></router-link
      >
      <router-link to="./blog-my-first-medium-article" class="sn-bp-link"
        >Dummy Sanctus Est 05</router-link
      >
    </div>
  </div>
</template>

<script>
import SvgArrowLeft from '../assets/img/svg/SvgArrowLeft.vue'

export default {
  name: '',

  components: {
    SvgArrowLeft,
  },
}
</script>

<style lang="scss">
.sn-wrapper {
  background-color: var(--paleorange);
  box-shadow: 0 0 10px 0 var(--darkgray60);
  color: var(--darkgray);
  overflow-y: auto;
  margin: 0 8px;
  padding: 1.5em;

  &.full-article {
    margin: 0;
  }

  @media screen and (min-width: 480px) {
    margin: 0;
    width: 100%;
  }

  @media screen and (min-width: 800px) {
    --offset: 10em;
    align-self: start;
    flex-basis: 300px;
    flex-grow: 1;
    position: sticky;
    top: var(--offset);
  }
}

.sn-headline {
  display: flex;
  font-family: 'Bitter', serif;
  font-size: 1.25em;
  font-weight: 500;
}

.sn-headline-link {
  text-decoration: none;
}

.sn-back-btn-container {
  align-items: center;
  background: var(--blissfulblue85);
  border: 2px solid var(--blissfulblue60);
  display: flex;
  height: 40px;
  position: relative;
  width: 100%;
}

.sn-back-btn-arrow {
  height: 22px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 22px;
}

.sn-back-btn-text {
  margin-left: 40px;
}

.sn-bp-container {
  margin-top: 12px;
}

.sn-bp-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.sn-bp-link {
  margin-top: 6px;
  text-decoration: none;

  &:hover {
    background-color: var(--blissfulblue85);
  }
}

.sn-bp-seperator {
  margin: 0 6px;
}

.sn-tagfilterlink-container {
  margin: 12px 0;
}
</style>
