<template>
  <div class="back-to-top">
    <a class="back-to-top__scroll" href="#top" data-link title="back to top">
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
.back-to-top {
  bottom: 28px;
  display: none;
  position: fixed;
  right: 28px;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
}

a.back-to-top__scroll {
  align-items: center;
  background-color: var(--blissfulblue85);
  border: 1px solid var(--blissfulblue);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 0.5em;
}

.arrow-up-svg {
  color: var(--darkgray);
  height: 24px;
  width: 24px;
}
</style>
