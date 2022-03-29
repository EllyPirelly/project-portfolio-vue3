<template>
  <div class="back-to-top__container">
    <a href="#top" class="back-to-top__scroll" data-link title="back to top">
      <SvgArrowUp />
    </a>
  </div>
</template>

<script>
import SvgArrowUp from '../assets/img/svg/SvgArrowUp.vue'

export default {
  name: '',

  components: {
    SvgArrowUp,
  },
}
</script>

<style lang="scss">
.back-to-top__container {
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    bottom: 28px;
    position: fixed;
    right: 28px;
  }
}

.back-to-top__scroll {
  align-items: center;
  background-color: var(--blissfulblue85);
  border: 1px solid var(--blissfulblue);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 0.5em;
}
</style>
