<template>
  <main class="blog">Blog Page Content - ToDo</main>

  <!-- blog overview-->
  <main class="blg-wrapper">
    <!-- sidenav -->
    <nav class="sn-wrapper" role="navigation">
      <!-- back to homepage -->
      <section class="sn-back-btn">
        <a href="/" class="sn-back-btn-container wobble-link">
          <SvgArrowLeft />
          <span class="sn-back-btn-text">Back to Homepage</span>
        </a>
      </section>

      <!-- blog posts overview -->
      <section class="sn-bp-container">
        <a href="./blog-overview.html" class="sn-headline-link">
          <h2 class="sn-headline">Blog Posts Overview</h2>
        </a>
        <div class="sn-bp-wrapper">
          <a href="./blog-my-first-medium-article.html" class="sn-bp-link"
            >My first Medium article<span class="sn-bp-seperator">|</span></a
          >
          <a href="./blog-dummy01.html" class="sn-bp-link"
            >Lorem Dummy 01<span class="sn-bp-seperator">|</span></a
          >
          <a href="./blog-dummy02.html" class="sn-bp-link"
            >Dummy Ipsum Dolor 02<span class="sn-bp-seperator">|</span></a
          >
          <a href="./blog-dummy03.html" class="sn-bp-link"
            >At Verso Dummy 03<span class="sn-bp-seperator">|</span></a
          >
          <a href="./blog-dummy04.html" class="sn-bp-link"
            >Accusam Dummy et 04<span class="sn-bp-seperator">|</span></a
          >
          <a href="./blog-dummy05.html" class="sn-bp-link"
            >Dummy Sanctus Est 05</a
          >
        </div>
      </section>
    </nav>

    <!-- blog entries - all snippets -->
    <section class="blg-entry-wrapper">
      <!-- tags filtering -->
      <section class="tagitems-container">
        <h2 class="tagitems-headline">
          Filter by &nbsp;
          <SvgTag />
        </h2>
        <!-- tags -->
        <div class="tagitems-wrapper" data-element="tag-filter"></div>
        <div class="tagselectbtn-wrapper">
          <button
            type="button"
            class="tagselect allselect"
            data-button="select"
          >
            Select all
          </button>
          <button
            type="button"
            class="tagselect unselect"
            data-button="unselect"
          >
            Unselect all
          </button>
        </div>
      </section>

      <!-- blog entry medium -->
      <article
        class="blg-entry-container"
        data-element="blog-fraction"
        data-tags="coding programming developer philosophy technology writing"
      >
        <div class="blg-entry-snippet-container">
          <a
            href="./blog-my-first-medium-article.html"
            class="blg-article-snippet-link"
          >
            <h1 class="blg-main-headline">My first Medium article</h1>
            <img
              src="../assets/img/blog/740_450_blg-medium-title.jpg"
              alt="Two Powerpuff Girls avatars of the author, overlapped by little code snippets"
              class="blg-hero-img"
            />
          </a>
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
              The next thing is documentations. Apparently every Engineer knows
              how important documenting is - but nobody wants to...
            </p>
          </div>
          <a
            href="./blog-my-first-medium-article.html"
            class="wobble-link blog"
            aria-label="click to get to blog post"
            rel="noopener noreferrer"
          >
            <p class="wobble-text blog">Read more</p>
            <SvgArrowRight />
          </a>
        </div>
        <!-- seperator -->
        <div class="blg-seperator-container">
          <SvgPen />
          <SvgPen />
          <SvgPen />
        </div>
      </article>
      <!-- blog entry 01 -->
      <article
        class="blg-entry-container"
        data-element="blog-fraction"
        data-tags="life berlin catlife philosophy"
      >
        <div class="blg-entry-snippet-container">
          <a href="./blog-dummy01.html" class="blg-article-snippet-link">
            <h1 class="blg-main-headline">Lorem ipsum dolor sit a - 01</h1>
            <img
              src="../assets/img/blog/740x480_dummy01.png"
              alt=""
              class="blg-hero-img"
            />
          </a>
          <div class="fade-out-gradient"></div>
          <div class="blg-fade-out-container">
            <p class="blg-intro">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
            <hr class="hr-line" />
            <h3 class="blg-second-headline">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed?
            </h3>
            <p class="blg-main-text">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
            <p class="blg-main-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore...
            </p>
          </div>
          <a
            href="./blog-dummy01.html"
            class="wobble-link blog"
            aria-label="click to get to blog post"
            rel="noopener noreferrer"
          >
            <p class="wobble-text blog">Read more</p>
            <SvgArrowRight />
          </a>
        </div>
        <!-- seperator -->
        <div class="blg-seperator-container">
          <SvgPen />
          <SvgPen />
          <SvgPen />
        </div>
      </article>
      <!-- blog entry 02 -->
      <article
        class="blg-entry-container"
        data-element="blog-fraction"
        data-tags="coding programming developer travel nature life photography berlin"
      >
        <div class="blg-entry-snippet-container">
          <a href="./blog-dummy02.html" class="blg-article-snippet-link">
            <h1 class="blg-main-headline">Lorem ipsum dolor sit a - 02</h1>
            <img
              src="../assets/img/blog/740x480_dummy02.png"
              alt=""
              class="blg-hero-img"
            />
          </a>
          <div class="fade-out-gradient"></div>
          <div class="blg-fade-out-container">
            <p class="blg-intro">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
            <hr class="hr-line" />
            <h3 class="blg-second-headline">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed?
            </h3>
            <p class="blg-main-text">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
            <p class="blg-main-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores...
            </p>
          </div>
          <a
            href="./blog-dummy02.html"
            class="wobble-link blog"
            aria-label="click to get to blog post"
            rel="noopener noreferrer"
          >
            <p class="wobble-text blog">Read more</p>
            <SvgArrowRight />
          </a>
        </div>
        <!-- seperator -->
        <div class="blg-seperator-container">
          <SvgPen />
          <SvgPen />
          <SvgPen />
        </div>
      </article>
      <!-- blog entry 03 -->
      <article
        class="blg-entry-container"
        data-element="blog-fraction"
        data-tags="travel nature technology writing catlife"
      >
        <div class="blg-entry-snippet-container">
          <a href="./blog-dummy03.html" class="blg-article-snippet-link">
            <h1 class="blg-main-headline">Lorem ipsum dolor sit a - 03</h1>
            <img
              src="../assets/img/blog/740x480_dummy03.png"
              alt=""
              class="blg-hero-img"
            />
          </a>
          <div class="fade-out-gradient"></div>
          <div class="blg-fade-out-container">
            <p class="blg-intro">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
            <hr class="hr-line" />
            <h3 class="blg-second-headline">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed?
            </h3>
            <p class="blg-main-text">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
            <p class="blg-main-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore...
            </p>
          </div>
          <a
            href="./blog-dummy03.html"
            class="wobble-link blog"
            aria-label="click to get to blog post"
            rel="noopener noreferrer"
          >
            <p class="wobble-text blog">Read more</p>
            <SvgArrowRight />
          </a>
        </div>
        <!-- seperator -->
        <div class="blg-seperator-container">
          <SvgPen />
          <SvgPen />
          <SvgPen />
        </div>
      </article>
      <!-- blog entry 04 -->
      <article
        class="blg-entry-container"
        data-element="blog-fraction"
        data-tags="programming life philosophy photography berlin"
      >
        <div class="blg-entry-snippet-container">
          <a href="./blog-dummy04.html" class="blg-article-snippet-link">
            <h1 class="blg-main-headline">Lorem ipsum dolor sit a - 04</h1>
            <img
              src="../assets/img/blog/740x480_dummy04.png"
              alt=""
              class="blg-hero-img"
            />
          </a>
          <div class="fade-out-gradient"></div>
          <div class="blg-fade-out-container">
            <p class="blg-intro">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
            <hr class="hr-line" />
            <h3 class="blg-second-headline">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed?
            </h3>
            <p class="blg-main-text">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
            <p class="blg-main-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores...
            </p>
          </div>
          <a
            href="./blog-dummy04.html"
            class="wobble-link blog"
            aria-label="click to get to blog post"
            rel="noopener noreferrer"
          >
            <p class="wobble-text blog">Read more</p>
            <SvgArrowRight />
          </a>
        </div>
        <!-- blog entry seperator -->
        <div class="blg-seperator-container">
          <SvgPen />
          <SvgPen />
          <SvgPen />
        </div>
      </article>
      <!-- blog entry 05 -->
      <article
        class="blg-entry-container"
        data-element="blog-fraction"
        data-tags="developer nature photography technology catlife"
      >
        <div class="blg-entry-snippet-container">
          <a href="./blog-dummy05.html" class="blg-article-snippet-link">
            <h1 class="blg-main-headline">Lorem ipsum dolor sit a - 05</h1>
            <img
              src="../assets/img/blog/740x480_dummy05.png"
              alt=""
              class="blg-hero-img"
            />
          </a>
          <div class="fade-out-gradient"></div>
          <div class="blg-fade-out-container">
            <p class="blg-intro">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
            <hr class="hr-line" />
            <h3 class="blg-second-headline">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed?
            </h3>
            <p class="blg-main-text">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
            <p class="blg-main-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore...
            </p>
          </div>
          <a
            href="./blog-dummy05.html"
            class="wobble-link blog"
            aria-label="click to get to blog post"
            rel="noopener noreferrer"
          >
            <p class="wobble-text blog">Read more</p>
            <SvgArrowRight />
          </a>
        </div>
        <!-- blog entry seperator -->
        <div class="blg-seperator-container">
          <SvgPen />
          <SvgPen />
          <SvgPen />
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import SvgArrowLeft from '../assets/img/svg/SvgArrowLeft.vue'
import SvgArrowRight from '../assets/img/svg/SvgArrowRight.vue'
import SvgTag from '../assets/img/svg/SvgTag.vue'
import SvgPen from '../assets/img/svg/SvgPen.vue'

export default {
  name: 'Blog',

  components: {
    SvgArrowLeft,
    SvgArrowRight,
    SvgTag,
    SvgPen,
  },

  methods: {
    //
  },
}
</script>

<style lang="scss">
.blog {
  background-color: rgb(252, 222, 212);
}
</style>
