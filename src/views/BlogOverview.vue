<template>
  <main class="blg-wrapper">
    <nav class="sn-wrapper fullarticle" role="navigation">
      <SideNavigation />
    </nav>

    <section class="blg-entry-wrapper">
      <BlogFilter />

      <!-- blog entry medium -->
      <BlogPreviewCard />
      <div class="blg-seperator-container">
        <SvgPen />
        <SvgPen />
        <SvgPen />
      </div>

      <!-- blog entry 01 -->
      <BlogPreviewCard />
      <div class="blg-seperator-container">
        <SvgPen />
        <SvgPen />
        <SvgPen />
      </div>

      <!-- blog entry 02 -->
      <BlogPreviewCard />
      <div class="blg-seperator-container">
        <SvgPen />
        <SvgPen />
        <SvgPen />
      </div>

      <!-- blog entry 03 -->
      <BlogPreviewCard />
      <div class="blg-seperator-container">
        <SvgPen />
        <SvgPen />
        <SvgPen />
      </div>

      <!-- blog entry 04 -->
      <BlogPreviewCard />
      <div class="blg-seperator-container">
        <SvgPen />
        <SvgPen />
        <SvgPen />
      </div>

      <!-- blog entry 05 -->
      <BlogPreviewCard />
      <div class="blg-seperator-container">
        <SvgPen />
        <SvgPen />
        <SvgPen />
      </div>
    </section>
  </main>
</template>

<script>
import BlogFilter from '../components/BlogFilter.vue'
import BlogPreviewCard from '../components/BlogPreviewCard.vue'
import SideNavigation from '../components/SideNavigation.vue'
import SvgPen from '../assets/img/svg/SvgPen.vue'

export default {
  name: 'BlogOverview',

  components: {
    BlogFilter,
    BlogPreviewCard,
    SideNavigation,
    SvgPen,
  },

  methods: {
    //
  },
}
</script>

<style lang="scss">
.blg-quote-container {
  margin-left: -20px;
  padding-left: 24px;
  box-shadow: inset 3px 0 0 0 var(--darkgray);
  margin: 2.5em 0;
}

.blg-quote {
  font-size: 1.25em;
  font-style: italic;
}

.blg-wrapper {
  margin-top: 40px;

  @media screen and (min-width: 480px) {
    padding: 0 2em;
  }

  @media screen and (min-width: 640px) {
    margin-top: 74px;
    padding: 0 3em;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0;
  }

  @media screen and (min-width: 1200px) {
    padding-left: calc((100vw - 1072px) / 2);
    padding-right: calc((100vw - 1072px) / 2);
  }
}

.blg-author-container {
  align-items: center;
  display: flex;
}

.blg-author-img {
  height: 60px;
}

.blg-name-date-container {
  font-size: 1em;
  margin-left: 0.55em;
}

.blg-author-name {
  display: block;
  font-weight: 500;
}

.blg-entry-wrapper {
  @media screen and (min-width: 800px) {
    flex-basis: 0;
    flex-grow: 999;
    margin-left: 2em;
    margin-top: 2em;
    min-width: 40%;
  }
}

.blg-entry-container {
  /* background-color: $pineappeslice; */
  margin-top: 2em;
  /* padding: 1em 1.5em; */

  @media screen and (min-width: 800px) {
    margin-top: 0;
  }

  &.full-article {
    background-color: transparent;
    padding: 0;
  }

  &.hidden {
    display: none;
  }
}

.blg-link-full-article:hover {
  background-color: #eef2f7;
  text-decoration: none;
}

.blg-second-img-wrapper {
  margin-top: 1em;
  text-align: center;
}

.blg-second-headline {
  font-size: 1.5em;
  font-weight: 500;
  margin-top: 20px;
}

.blg-second-img {
  width: 50%;

  &.full-article {
    border: 1px solid var(--darkgray);
  }
}

.blg-img-caption {
  display: block;
  font-size: 1.25em;
  font-style: italic;
}

.blg-seperator-container {
  margin: 2em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.blg-seperator-svg {
  color: var(--darkgray);
  height: 1.5em;
  margin: 0 0.3em;
}

.blg-tag-container {
  margin-top: 6px;
}

.blg-tag-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.blg-tag {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 12px;
  margin-right: 16px;
}

.blg-tag-svg {
  color: var(--darkgray);
  height: 1.5em;
  margin-right: 4px;
}
</style>
