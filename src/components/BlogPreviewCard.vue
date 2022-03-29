<!-- TODO: figure out a way to generate dynamic blog cards to dynamically add to
overview page -->

<template>
  <article
    class="blg-entry-container"
    data-element="blog-fraction"
    data-tags="life berlin catlife philosophy"
  >
    <div class="blg-entry-snippet-container">
      <router-link
        to="./blog-my-first-medium-article.html"
        class="blg-article-snippet-link"
      >
        <h1 class="blg-main-headline">My first Medium article</h1>
        <img
          src="../assets/img/blog/740_450_blg-medium-title.jpg"
          alt="Two Powerpuff Girls avatars of the author, overlapped by little code snippets"
          class="blg-hero-img"
        />
      </router-link>

      <div class="fade-out-gradient"></div>

      <div class="blg-fade-out-container">
        <p class="blg-intro">
          Thoughts about writing and publishing my first article.
        </p>
        <hr class="hr-line" />
        <h3 class="blg-second-headline">
          Why should I write and publish? What are my goals in doing so?
        </h3>
        <p class="blg-main-text">
          There's a couple of things to mention here. First of all, it's a
          language thing. In an environment where English is THE language,
          writing in English will improve my skills.
        </p>
        <p class="blg-main-text">
          The next thing is documentations. Apparently every Engineer knows how
          important documenting is - but nobody wants to...
        </p>
      </div>
      <router-link
        to="./blog-my-first-medium-article.html"
        class="wobble-link blog"
        aria-label="click to get to blog post"
        rel="noopener noreferrer"
      >
        <p class="wobble-text blog">Read more</p>
        <SvgArrowRight />
      </router-link>
    </div>
  </article>
</template>

<script>
import SvgArrowRight from '../assets/img/svg/SvgArrowRight.vue'

export default {
  name: '',

  components: {
    SvgArrowRight,
  },
}
</script>

<style lang="scss">
.blg-entry-snippet-container {
  background-color: var(--pineappeslice);
  padding: 1em 1.5em;
}

.blg-article-snippet-link {
  text-decoration: none;
}

.blg-main-headline {
  font-family: 'Bitter', serif;
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 0.65em;

  @media screen and (min-width: 800px) {
    font-size: 2.5em;
  }
}

.blg-hero-img {
  height: 200px;

  object-fit: cover;
  width: 100%;

  @media screen and (min-width: 640px) {
    height: 300px;
  }

  &.full-article {
    border: 1px solid var(--darkgray);

    @media screen and (min-width: 640px) {
      height: 300px;
    }
  }
}

.blg-intro,
.blg-main-text {
  font-size: 1.25em;
  margin-top: 0.75em;
}
</style>
