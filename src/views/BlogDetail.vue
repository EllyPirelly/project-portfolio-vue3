<template>
  <main class="blg-wrapper full-article">
    <nav class="sn-wrapper fullarticle" role="navigation">
      <SideNavigation />

      <section class="sn-tagfilterlink-container">
        <router-link to="./blog-overview.html#top" class="sn-headline-link">
          <h2 class="sn-headline">Go to filter by &nbsp;<SvgTag /></h2>
        </router-link>
      </section>
    </nav>

    <section class="blg-entry-wrapper">
      <article class="blg-entry-container full-article">
        <img
          src="../assets/img/blog/740_450_blg-medium-title.jpg"
          alt="Two Powerpuff Girls avatars of the author, overlapped by little code snippets"
          class="blg-hero-img full-article"
        />
        <h1 class="blg-main-headline full-article">My first Medium article</h1>
        <p class="blg-intro">
          Thoughts about writing and publishing my first article.
        </p>

        <hr class="hr-line" />

        <section class="blg-author-wrapper">
          <span class="blg-author-container">
            <img
              src="../assets/img/elle-powerpuff-500x500.png"
              class="blg-author-img"
              alt="Powerfuff Girls avatar of Elle"
            />
            <span class="blg-name-date-container">
              <span class="blg-author-name">Elle Hanschen</span>
              <span class="blg-pub-date">Publish Date: March 1st 2021</span>
            </span>
          </span>
        </section>

        <hr class="hr-line" />

        <h3 class="blg-second-headline full-article">
          Why should I write and publish? What are my goals in doing so?
        </h3>
        <p class="blg-main-text">
          There's a couple of things to mention here. First of all, it's a
          language thing. In an environment where English is THE language,
          writing in English will improve my skills.
        </p>
        <p class="blg-main-text">
          The next thing is documentations. Apparently every Engineer knows how
          important documenting is - but nobody wants to do it. I'm none of
          those persons I LOVE sharing knowledge and documenting. So why not
          getting better in structuring myself when writing and practicing to
          get better in documenting?
        </p>
        <p class="blg-main-text">
          This leads to the third thing: I want to help and give back as I'm
          greatly benefitting of what others put out there. Here, I want to also
          give a voice to the perspective of a career changer without Computer
          Science studies.
        </p>
        <p class="blg-main-text">
          And last but not least: I want to build a mix of articles to reference
          to as in the engineering world it's expected to publish at some point
          of your career. I want to show myself as an Engineer and future
          employee.
        </p>
        <div class="blg-second-img-wrapper">
          <img
            src="../assets/img/blog/blg-medium-questionmark.jpg"
            alt="a question mark on a dark background"
            class="blg-second-img full-article"
          />
          <span class="blg-img-caption">So many questions...</span>
        </div>
        <h3 class="blg-second-headline">Why Medium as a platform?</h3>
        <p class="blg-main-text">
          The idea of giving back to the platform I'm greatly benefitting from
          was a no-brainer for me. It's a great platform to publish programming
          stuff. It has a proper reach. Other engineers publish there, too. So
          Medium it was.
        </p>
        <h3 class="blg-second-headline">
          Thoughts on "owning your own content"
        </h3>
        <p class="blg-main-text">
          Of course I had some thoughts and mixed feelings about "giving up"
          ownership of my content in putting my writing out on Medium instead of
          hosting it on my own site. Here, my dislike for Medium trying to lure
          you into a payed account after reading 5 articles a day definitely
          added to the CON. But - even though I'm a big fan of owning your own
          content - as I don't publish 7 articles a week, as I have next to no
          reach and as I want to give back and help others - for now publishing
          on Medium (or maybe also other tech platforms in the future) is ok
          with me.
        </p>
        <a
          href="https://elly-pirelly.medium.com/how-i-improved-my-favicon-game-b848756e780c"
          class="wobble-link blog blg-link-full-article"
          aria-label="click to get to blog post"
          rel="noopener noreferrer"
        >
          <p class="wobble-text blog">
            See here for my first Medium article ...
          </p>
          <svg
            class="arrow-right-svg blog"
            fill="currentColor"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
            ></path>
          </svg>
        </a>

        <h3 class="blg-second-headline">What to publish?</h3>
        <p class="blg-main-text">
          As it was now clear to me that I want to write about job-related,
          technical stuff - which kind of topic to pick? Especially, with this
          quote in the back of my head:
        </p>
        <blockquote class="blg-quote-container">
          <p class="blg-quote">
            "Opinions are like buttholes, everyone has one, but nobody wants to
            hear about yours!"
          </p>
        </blockquote>
        <p class="blg-main-text">
          How to approach writing about topics where apparently everything has
          been said about already?
        </p>
        <p class="blg-main-text">
          Solution: focus on what's most valuable for ME to write about, at this
          time of my career. Focus, on what brings ME forward in learning and
          growing.
        </p>
        <p class="blg-main-text">
          In that sense my intention was to not write for others in terms of
          proving that I'm extra smart and bring new Einstein-ishy insights. I
          intentionally wanted to try to let myself do mistakes.
        </p>
        <p class="blg-main-text">
          So I looked for small topics I could get familiar with rather easily -
          I then selected the topic favicons as I was working on better
          implementing them anyhow.
        </p>
        <p class="blg-main-text">
          Focussing on the above should also help me to fight Imposter Syndrome.
          Everyone has been a starter at some point, right?
        </p>
        <h3 class="blg-second-headline">
          Techniques - Photoshop, Medium, et all
        </h3>
        <p class="blg-main-text">
          To be honest, figuring all of this out delayed my ambitious time goal
          quite a bit.
        </p>
        <p class="blg-main-text">
          Ambitious, as I was assuming while having the article in my head
          written down already, I will have it written down for real in 2 hours
          - not.
        </p>
        <p class="blg-main-text">I needed to figure out so many things.</p>
        <p class="blg-main-text">
          I re-learned Photoshop Elements on the way. I used to work with
          Photoshop CS5 back in the day and very infrequently Photoshop CC so I
          needed to figure out how all of them differ and what possibilities
          Photoshop Elements has.
        </p>
        <p class="blg-main-text">
          As the last time I did gifs has been around 2009, I needed to figure
          out how to do them with free tools out there, also finding the tools
          fitting for my needs. I ended up using
          <a
            href="https://helpfeel.com/Gyazo/Gyazo%20GIF-5de75e1e040e1d0017df4379"
            class="blg-link-full-article"
            >the Gyazo gif app.</a
          >
          This tool will give you a 7 seconds max gif. I didn't even register on
          that website as you can immediately download either a gif or a video
          without registering. At the moment I'm still figuring out, if I need
          to put both through
          <a href="https://gif.ski/" class="blg-link-full-article">Gifski</a> to
          get a better result. I'm not done with looking into that and decided
          for the first time publishing to be ok with the outcome.
        </p>
        <p class="blg-main-text">
          And of course I also needed to find out how Medium works, the
          shortfalls, the options, especially when it came to file sizes of
          images and gifs. Medium in general seems to be sufficient to work with
          but then again for someone coming from a digital media designer
          background and also used to work with a quite mighty Pimcore CMS, it's
          too limited. Why, for example, can't I have a proper drop shadow for
          images?
        </p>
        <h3 class="blg-second-headline">Conclusion</h3>
        <p class="blg-main-text">
          As I now know how to work with Photoshop Elements, gifs and Medium, I
          will be faster regarding the techniques the next time. What I came to
          notice though is, that as an overthinker I literally reflect over
          everything I write at least 4 times. Here, I want to get better in
          have things sound good at the first go.
        </p>
        <p class="blg-main-text">
          Language is not necessarily a hindrance but then again, it is.
          Sometimes phrasing something takes longer than it would in my first
          language.
        </p>
        <div class="blg-second-img-wrapper">
          <img
            src="../assets/img/blog/blg-medium-aha-moment.jpg"
            alt="a lightbulb on a dark background"
            class="blg-second-img full-article"
          />
          <span class="blg-img-caption">...lead to some insights</span>
        </div>
        <p class="blg-main-text">
          Getting familiar with the topic I'm writing about AND at the same time
          writing the article cost me time as I needed some extra rounds for
          rephrasing, restructuring and updating content. That's ok and I will
          plan for this in the future.
        </p>
        <p class="blg-main-text">
          Generally planning for more time is a good idea. There's no need for
          pressure, so I will always take the time to properly set up an
          article, collect thoughts, structure them and create the content
          needed. I would also plan to let a first draft sit a night and iterate
          on it until satisfied. The key here is, set realistic publish dates.
          And then PUBLISH.
        </p>
        <p class="blg-main-text">
          Last thought: Since time of publishing (5 days) I had 3 views on that
          article so it's really not worth sweating publishing - just do it.
        </p>
      </article>

      <!-- tags at bottom of blog post -->
      <section class="blg-tag-container">
        <div class="blg-tagitems-wrapper">
          <span class="blg-tag">
            <SvgTag />
            coding
          </span>
          <span class="blg-tag">
            <SvgTag />
            programming
          </span>
          <span class="blg-tag">
            <SvgTag />
            developer
          </span>
          <span class="blg-tag">
            <SvgTag />
            philosophy
          </span>
          <span class="blg-tag">
            <SvgTag />
            technology
          </span>
          <span class="blg-tag">
            <SvgTag />
            writing
          </span>
        </div>
      </section>

      <div class="blg-seperator-container">
        <SvgPen />
        <SvgPen />
        <SvgPen />
      </div>
    </section>
  </main>
</template>

<script>
import SideNavigation from '../components/SideNavigation.vue'
import SvgPen from '../assets/img/svg/SvgPen.vue'
import SvgTag from '../assets/img/svg/SvgTag.vue'

export default {
  name: 'BlogDetail',

  components: {
    SideNavigation,
    SvgPen,
    SvgTag,
  },

  methods: {
    //
  },

  data() {
    return {
      //
    }
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

.blg-wrapper.full-article {
  padding: 0 1em;
}

.blg-wrapper.full-article {
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

.blg-entry-snippet-container {
  background-color: var(--pineappeslice);
  padding: 1em 1.5em;
}

.blg-article-snippet-link {
  text-decoration: none;
}

.blg-link-full-article:hover {
  background-color: #eef2f7;
  text-decoration: none;
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

.blg-main-headline {
  font-family: 'Bitter', serif;
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 0.65em;

  @media screen and (min-width: 800px) {
    font-size: 2.5em;
  }
}

.blg-intro,
.blg-main-text {
  font-size: 1.25em;
  margin-top: 0.75em;
}

/* blog text section */
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
  text-align: center;
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

.blg-seperator-container {
  margin: 2em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
