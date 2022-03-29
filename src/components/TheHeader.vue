<template>
  <header class="header-wrapper">
    <router-link to="/" class="brand-img-container">
      <img
        class="brand-img"
        alt="Powerfuff Girls avatar of Elle"
        src="../assets/img/elle-powerpuff-500x500.png"
      />
    </router-link>
    <MainNavigation />
  </header>
</template>

<script>
import MainNavigation from './MainNavigation.vue'

export default {
  name: 'TheHeader',

  components: {
    MainNavigation,
  },
}
</script>

<style lang="scss">
.header-wrapper {
  background-color: var(--delicateblue);
  height: 68px;
  position: sticky;
  padding: 1em 1.5em;
  top: 0;
  z-index: 1000;

  @media screen and (min-width: 640px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1200px) {
    padding-left: calc((100vw - 1072px) / 2);
    padding-right: calc((100vw - 1072px) / 2);
  }
}

.brand-img-container {
  position: absolute;
}

.brand-img {
  background-color: var(--delicateblue);
  border: 2px solid var(--paleorange);
  border-radius: 50%;
  box-shadow: 0 0 0 6px var(--delicateblue);
  height: 70px;
  object-fit: cover;
  width: auto;
  z-index: 1500;

  @media screen and (min-width: 640px) {
    height: 100px;
    width: auto;
  }
}
</style>
