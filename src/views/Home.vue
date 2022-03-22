<template>
  <div class="home">
    <!-- <h1>{{ title }}</h1> -->
    <img
      class
      alt="work in progress"
      src="../assets/img/under-construction.png"
    />
    <img
      class
      alt="work in progress"
      src="../assets/img/under-construction.png"
    />
    <img
      class
      alt="work in progress"
      src="../assets/img/under-construction.png"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {
    //
  },

  data() {
    return {
      title: 'Portfolio in Preparation',
    }
  },
}
</script>

<style lang="scss">
.home {
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  row-gap: 100px;
}
</style>
