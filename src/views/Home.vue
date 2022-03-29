<template>
  <main class="home main-wrapper">
    <!-- <h1>{{ title }}</h1> -->

    <span id="home"></span>
    <section class="section-wrapper home">
      <div class="home-container">
        <h1 class="main-headline home">Hi! I'm Elle</h1>
        <img
          src="../assets/img/740-IMG_1625-landscape-sw.jpg"
          alt="the Brandenburg Gate in Berlin as seen from the Pariser Platz"
          class="home-img"
        />
        <h2 class="second-headline home">
          a North Sea coast transplant living in Berlin, Germany.
        </h2>
        <p class="main-text home">
          As a career-changer late in life, I've internalized that you never
          stop learning.
        </p>
        <p class="main-text home">
          The site you're currently visiting is my playground to get better in
          what I do, it's an ongoing work in progress.
        </p>
      </div>
    </section>

    <!-- about me -->
    <span id="about-me"></span>
    <section class="section-wrapper about">
      <div class="about-container">
        <h1 class="main-headline about">About Me</h1>
        <img
          src="../assets/img/740-IMG_8327-bw.jpg"
          alt="Elle and her husband on a rainy day, standing on the Straße des 17. Juni"
          class="about-img"
        />
        <p class="main-text about">
          I'm a Frontend Engineer, living in Berlin with my husband and our
          senior cats Peaches and Simon.
        </p>
        <p class="main-text about">
          With my background of 26 years in print media as digital media
          designer, image editor and proof reader, I'm working on and improving
          in merging the digital and physical world - to turn things into
          semantic HTML and subjectively pretty CSS.
        </p>
        <p class="main-text about">
          One of the things I'm currently doing is building the first draft of
          this portfolio site you are currently visiting. This draft is a work
          in progress and non-modular on purpose. If you want to check out the
          code, visit
          <a
            href="https://github.com/EllyPirelly/project-portfolio"
            class="link-style"
            >the portfolio project on GitHub.</a
          >
        </p>
        <p class="main-text about">
          When I'm not working, you might catch me training for my next run,
          find me getting my socks rocked off at a gig or spot me strolling
          around in a museum or gallery.
        </p>
        <p class="main-text about">
          Pre-Corona I loved to travel, I hope to be able to pick this up again
          some day soon.
        </p>
      </div>
    </section>

    <!-- weather -->
    <span id="weather"></span>
    <WeatherCard />

    <!-- code -->
    <span id="code"></span>
    <CodeCard />

    <!-- blog -->
    <span id="blog"></span>
    <section class="section-wrapper blog">
      <div class="blog-container">
        <h1 class="main-headline blog">Blog</h1>
        <img
          src="../assets/img/blog/740_480_blog-laptop.jpg"
          alt="open mac book standing on a desktop"
          class="blog-img"
        />
        <p class="wobble-text blog">
          I’m planning to little by little put all of my handwritten findings
          about „the galaxy life, the universe and everything“ into my blog
          section, along with general blog posts.
        </p>
        <router-link
          to="/blog-overview"
          class="wobble-link blog"
          aria-label="click to get to blog post"
          rel="noopener noreferrer"
        >
          <p class="wobble-text blog">Click here for blog posts overview</p>
          <SvgArrowRight />
        </router-link>
      </div>
    </section>

    <!-- publication -->
    <span id="publication"></span>
    <section class="section-wrapper publication">
      <div class="publication-container">
        <h1 class="main-headline publication">Publications</h1>
        <a
          href="https://elly-pirelly.medium.com/how-i-improved-my-favicon-game-b848756e780c"
          class="wobble-link"
          aria-label="click to get to publication"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="wobble-text publication">
            Medium: How I improved my favicon game
          </p>
          <SvgArrowRight />
        </a>
        <hr class="hr-line" />
        <a
          href="https://elly-pirelly.medium.com/create-the-perfect-toggle-switch-with-pure-html-css-no-javascript-necessary-7889adf04b69"
          class="wobble-link"
          aria-label="click to get to publication"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="main-text publication">
            Medium: Create the perfect toggle switch
          </p>
          <SvgArrowRight />
        </a>
      </div>
    </section>
  </main>
</template>

<script>
import CodeCard from '../components/CodeCard.vue'
import SvgArrowRight from '../assets/img/svg/SvgArrowRight.vue'
import WeatherCard from '../components/WeatherCard.vue'

export default {
  name: 'Home',

  components: {
    CodeCard,
    SvgArrowRight,
    WeatherCard,
  },

  data() {
    return {
      title: 'Portfolio in Preparation',
    }
  },
}
</script>

<style lang="scss">
.main-wrapper {
  margin-bottom: 62px;

  @media screen and (min-width: 480px) {
    padding: 0 2em;
  }

  @media screen and (min-width: 640px) {
    padding: 0 3em;
  }

  @media screen and (min-width: 800px) {
    display: grid;
    gap: 0 1.5em;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media screen and (min-width: 1200px) {
    padding-left: calc((100vw - 983px) / 2);
    padding-right: calc((100vw - 983px) / 2);
  }

  @media screen and (min-width: 1200px) {
    padding-left: calc((100vw - 983px) / 2);
    padding-right: calc((100vw - 983px) / 2);
  }

  @media screen and (min-width: 1200px) {
    padding-left: calc((100vw - 1072px) / 2);
    padding-right: calc((100vw - 1072px) / 2);
  }
}

// CARD -------------------------------------------------
.home-container,
.about-container,
.wea-container,
.code-container,
.blog-container,
.publication-container,
.footer-container {
  padding: 1em 1.5em;
}

#home,
#code,
.section-wrapper.home,
.section-wrapper.code {
  @media screen and (min-width: 800px) {
    grid-column: 1 / 2;
  }
}

#about-me,
.section-wrapper.about,
#weather,
.section-wrapper.weather,
#blog,
.section-wrapper.blog,
#publication,
.section-wrapper.publication {
  @media screen and (min-width: 800px) {
    grid-column: 2 / 3;
  }
}

#code,
#about-me,
#weather,
#blog,
#publication {
  display: block;
  height: 98px;

  @media screen and (min-width: 640px) {
    height: 132px;
  }
}

#home {
  display: block;
  height: 32px;

  @media screen and (min-width: 640px) {
    height: 64px;
  }
}

#home,
#about-me {
  @media screen and (min-width: 800px) {
    height: 84px;
  }
}

.section-wrapper.home,
.section-wrapper.about,
.section-wrapper.weather,
.section-wrapper.code,
.section-wrapper.blog,
.section-wrapper.publication {
  @media screen and (min-width: 800px) {
    margin-top: 0;
  }
}

/* home */
#home {
  @media screen and (min-width: 800px) {
    grid-row: 2 / 3;
  }
}

.section-wrapper.home {
  @media screen and (min-width: 800px) {
    grid-row: 3 / 4;
  }
}

.home-container {
  background-color: var(--pastelgreen);
}

.home-img {
  @media screen and (min-width: 640px) {
    grid-row: 3 / 6;
    margin-top: 0.8em;
    width: auto;
  }
}

.second-headline.home {
  @media screen and (min-width: 640px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
}

.main-text.home {
  @media screen and (min-width: 640px) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }

  &:nth-of-type(2) {
    @media screen and (min-width: 640px) {
      grid-row: 4 / 5;
    }
  }
}

/* about */
#about-me {
  @media screen and (min-width: 800px) {
    grid-row: 1 / 2;
  }
}

.section-wrapper.about {
  @media screen and (min-width: 800px) {
    grid-row: 2 / 6;
  }
}

.about-container {
  background-color: var(--pineappeslice);
}

.about-img {
  @media screen and (min-width: 640px) {
    grid-column: 2 / 3;
    grid-row: 3 / 8;
    margin-top: 0.8em;
    width: auto;
  }
}

.second-headline.about {
  @media screen and (min-width: 640px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
}

.main-text.about {
  @media screen and (min-width: 640px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  &:nth-of-type(2) {
    @media screen and (min-width: 640px) {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }
  }

  &:nth-of-type(3) {
    @media screen and (min-width: 640px) {
      grid-column: 1 / 3;
      grid-row: 5 / 6;
    }
  }

  &:nth-of-type(4) {
    @media screen and (min-width: 640px) {
      grid-column: 1 / 3;
      grid-row: 6 / 7;
    }
  }

  &:nth-of-type(5) {
    @media screen and (min-width: 640px) {
      grid-column: 1 / 3;
      grid-row: 7 / 8;
    }
  }
}

.main-headline.home,
.main-headline.about,
.main-headline.blog {
  @media screen and (min-width: 640px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
}

.home-img,
.about-img,
.blog-img {
  height: 200px;
  object-fit: cover;
  width: 100%;

  @media screen and (min-width: 640px) {
    height: 300px;
  }
}

.home-container,
.about-container,
.blog-container {
  @media screen and (min-width: 640px) {
    display: grid;
    gap: 0 4%;
    grid-template-columns: auto;
    grid-template-rows: auto;
    padding: 2em;
  }

  @media screen and (min-width: 800px) {
    display: block;
  }
}

/* weather */
#weather {
  @media screen and (min-width: 800px) {
    grid-row: 6 / 7;
  }
}

/* code */
#code {
  @media screen and (min-width: 800px) {
    grid-row: 4 / 5;
  }
}

/* blog */
#blog {
  @media screen and (min-width: 800px) {
    grid-row: 8 / 9;
  }
}

.section-wrapper.blog {
  @media screen and (min-width: 800px) {
    grid-row: 9 / 10;
  }
}

.blog-container {
  background-color: var(--balletslipper);
}

.blog-img {
  @media screen and (min-width: 640px) {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
  }
}

.main-text.blog {
  @media screen and (min-width: 640px) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
}

/* publication */
#publication {
  @media screen and (min-width: 800px) {
    grid-row: 10 / 11;
  }
}

.section-wrapper.publication {
  @media screen and (min-width: 800px) {
    grid-row: 11 / 36;
  }
}

.publication-container {
  background-color: var(--blissfulblue);
}

.main-text.publication {
  font-size: 1.5em;
}

// CARD OVERLAY --------------------------------------------

.overlay-container {
  box-shadow: 0 0 10px 0 var(--darkgray60);
  position: relative;

  &:hover .overlay-textcontainer {
    height: 100%;
  }
}

div.overlay-container {
  &:not(:nth-of-type(1)) {
    margin-top: 2em;
  }

  &:nth-of-type(2) {
    @media screen and (min-width: 640px) {
      margin-top: 0;
    }

    @media screen and (min-width: 800px) {
      margin-top: 2em;
    }
  }
}

.overlay-img {
  display: block;
  width: 100%;
}

.overlay-textcontainer {
  background-color: rgba(#fef8f4, 0.8);
  bottom: 0;
  height: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  transition: 0.5s ease;
  width: 100%;
}

.overlay-text {
  font-size: 1em;
  left: 50%;
  overflow: hidden;
  padding: 0 0.6em;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  @media screen and (min-width: 480px) {
    font-size: 1.25em;
  }
}
</style>
