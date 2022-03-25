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
    <section class="section-wrapper code">
      <main class="code-container">
        <section class="code-displayed">
          <h1 class="main-headline code">Code</h1>
          <div class="overlay-container">
            <a
              href="https://github.com/EllyPirelly/project-wesbos-grid-image-gallery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="overlay-img"
                src="../assets/img/example/ex-github-cssgrid-gallery.jpg"
                alt="desktop screenshot of the website 'css grid image gallery'"
              />
              <div class="overlay-textcontainer">
                <div class="overlay-text">
                  GitHub: first steps in CSS Grid, based on Wes Bos' CSS Grid
                  course
                </div>
              </div>
            </a>
          </div>
          <div class="overlay-container">
            <a
              href="https://codepen.io/ellypirelly/pen/YzpYRdv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="overlay-img"
                src="../assets/img/example/ex-codepen-checkboxhack-toggle.jpg"
                alt="desktop screenshot of a 'checkbox hack' toggle button"
              />
              <div class="overlay-textcontainer">
                <div class="overlay-text">
                  CodePen: simple example of a "checkbox hack" toggle button
                </div>
              </div>
            </a>
          </div>
          <div class="overlay-container">
            <a
              href="https://github.com/EllyPirelly/project-resp-site-with-refresh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="overlay-img"
                src="../assets/img/example/ex-github-site-refresh.jpg"
                alt="desktop screenshot of the website with 'refresh' button"
              />
              <div class="overlay-textcontainer">
                <div class="overlay-text">
                  GitHub: website with "refresh site" button
                </div>
              </div>
            </a>
          </div>
          <div class="overlay-container">
            <a
              href="https://github.com/EllyPirelly/project-flexbox-grid-page-layout"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="overlay-img"
                src="../assets/img/example/ex-github-pie-gallery.jpg"
                alt="desktop screenshot of the website 'pie gallery', homepage"
              />
              <div class="overlay-textcontainer">
                <div class="overlay-text">
                  GitHub: website, based on Frontendmasters' "CSS Grid and
                  Flexbox for Responsive Web Design"
                </div>
              </div>
            </a>
          </div>
        </section>
        <!-- additional code on click -->
        <section class="extra-content-wrapper" data-element="extra-content">
          <button
            class="extra-content-button"
            data-toggle="extra-content-toggle"
            data-target="[data-element=extra-content]"
          >
            <span class="button-text-more">Click for more</span>
            <span class="button-text-less">Click for less</span>
          </button>
          <div class="extra-examples-wrapper">
            <div class="overlay-container">
              <a
                href="https://github.com/EllyPirelly/project-privacy-dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="overlay-img"
                  src="../assets/img/example/ex-github-privacy-dialog.jpg"
                  alt="desktop screenshot of the website 'privacy dialoge'"
                />
                <div class="overlay-textcontainer">
                  <div class="overlay-text">
                    GitHub: website "privacy dialoge"
                  </div>
                </div>
              </a>
            </div>
            <div class="overlay-container">
              <a
                href="https://codepen.io/ellypirelly/pen/BaQQeqR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="overlay-img"
                  src="../assets/img/example/ex-codepen-eventlistener-toggle.jpg"
                  alt="desktop screenshot of an addEventListener toggle example"
                />
                <div class="overlay-textcontainer">
                  <div class="overlay-text">
                    CodePen: simple example of an addEventListener toggle
                  </div>
                </div>
              </a>
            </div>
            <div class="overlay-container">
              <a
                href="https://github.com/EllyPirelly/project-integrate-library"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="overlay-img"
                  src="../assets/img/example/ex-github-animation.jpg"
                  alt="desktop screenshot of website with integrated 'popmotion animation'"
                />
                <div class="overlay-textcontainer">
                  <div class="overlay-text">
                    GitHub: animation, based on Frontendmasters' "Intro to Web
                    Development" (integrate popmotion library)
                  </div>
                </div>
              </a>
            </div>
            <div class="overlay-container">
              <a
                href="https://github.com/EllyPirelly/project-simple-calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="overlay-img"
                  src="../assets/img/example/ex-github-calculator.jpg"
                  alt="desktop screenshot of the project 'simple calculator'"
                />
                <div class="overlay-textcontainer">
                  <div class="overlay-text">
                    GitHub: simple calculator, based on Frontendmasters' "Intro
                    to Web Development"
                  </div>
                </div>
              </a>
            </div>
            <div class="overlay-container">
              <a
                href="https://codepen.io/ellypirelly/pen/qBaKWvX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="overlay-img"
                  src="../assets/img/example/ex-codepen-cssgrid.jpg"
                  alt="desktop screenshot of a simple CSS Grid example"
                />
                <div class="overlay-textcontainer">
                  <div class="overlay-text">
                    CodePen: simple CSS Grid example
                  </div>
                </div>
              </a>
            </div>
            <div class="overlay-container">
              <a
                href="https://github.com/EllyPirelly/project-simple-API-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="overlay-img"
                  src="../assets/img/example/ex-github-clicks-for-dogs.jpg"
                  alt="desktop screenshot of the project 'clicks for dogs'"
                />
                <div class="overlay-textcontainer">
                  <div class="overlay-text">
                    GitHub: API call "Clicks for Dogs", based on
                    Frontendmasters' "Intro to Web Development"
                  </div>
                </div>
              </a>
            </div>
            <div class="overlay-container">
              <a
                href="https://github.com/EllyPirelly/project-portfolio-gatsby-tailwindCSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="overlay-img"
                  src="../assets/img/example/ex-github-gatsby-tailwind.jpg"
                  alt="desktop screenshot of the GatsbyJS/TailwindCSS website, 'About me' page"
                />
                <div class="overlay-textcontainer">
                  <div class="overlay-text">
                    GitHub: first steps with GatsbyJS and Tailwind CSS
                  </div>
                </div>
              </a>
            </div>
            <div class="overlay-container">
              <a
                href="https://github.com/EllyPirelly/project-custom-info-banner"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="overlay-img"
                  src="../assets/img/example/ex-github-info-banner.jpg"
                  alt="desktop screenshot of the 'customer information banner', in 5 color schemes"
                />
                <div class="overlay-textcontainer">
                  <div class="overlay-text">
                    GitHub: customer information banner in 5 color schemes
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </section>

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
import SvgArrowRight from '../assets/img/svg/SvgArrowRight.vue'
import WeatherCard from '../components/WeatherCard.vue'

export default {
  name: 'Home',

  components: {
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

.section-wrapper.code {
  @media screen and (min-width: 800px) {
    grid-row: 5 / 13;
  }
}

.code-container {
  background-color: var(--darkgray85);
}

.main-headline.code {
  @media screen and (min-width: 640px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
}

.code-displayed {
  @media screen and (min-width: 640px) {
    display: grid;
    gap: 0 4%;
    grid-template-columns: repeat(auto-fill, 48%);
    grid-template-rows: auto;
  }

  @media screen and (min-width: 800px) {
    display: block;
  }
}

.extra-content-wrapper {
  text-align: center;
}

.extra-content-button {
  color: var(--darkgray);
  background-color: var(--paleorange);
  box-shadow: 0 0 10px 0 var(--darkgray60);
  font-family: 'Bitter', serif;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.6;
  margin: 2em 0 0 0;
  padding: 1em;

  &:hover {
    background-color: var(--blissfulblue85);
    cursor: pointer;
  }

  &:active,
  &:focus {
    border: 1px solid var(--darkgray);
  }
}

.button-text-more {
  .toggle & {
    display: none;
  }
}

.button-text-less {
  display: none;
  .toggle & {
    display: inline-block;
  }
}

.extra-examples-wrapper {
  display: none;
  margin-top: 2em;

  @media screen and (min-width: 640px) {
    gap: 0 4%;
    grid-template-columns: repeat(auto-fill, 48%);
    grid-template-rows: auto;
  }

  @media screen and (min-width: 800px) {
    gap: 0 0%;
    grid-template-columns: repeat(auto-fill, 100%);
    grid-template-rows: auto;
  }

  .extra-content-wrapper.toggle & {
    display: grid;
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
