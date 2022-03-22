<template>
  <div class="blog">
    <BlogCard />
  </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue'

export default {
  name: 'Blog',

  components: {
    BlogCard,
  },
}
</script>

<style lang="scss">
.blog {
  background-color: rgb(252, 222, 212);
}
</style>
