<template>
  <div class="outer-wrapper outer-wrapper--index outer-wrapper--blog">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
  <BackToTop />
</template>

<script>
import BackToTop from './components/BackToTop.vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'index',

  components: {
    BackToTop,
    TheHeader,
    TheFooter,
  },
}
</script>

<style lang="scss">
//
</style>
