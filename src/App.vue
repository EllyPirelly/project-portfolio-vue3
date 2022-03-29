<template>
  <div class="outer-wrapper outer-wrapper--index outer-wrapper--blog">
    <TheHeader />
    <ResizeBrowserwindow />
    <router-view />
    <TheFooter />
  </div>
  <BackToTop />
</template>

<script>
import BackToTop from './components/BackToTop.vue'
import ResizeBrowserwindow from './components/ResizeBrowserwindow.vue'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'index',

  components: {
    BackToTop,
    ResizeBrowserwindow,
    TheFooter,
    TheHeader,
  },
}
</script>

<style lang="scss">
//
</style>
