<template>
  <footer class="footer__wrapper" id="connect">
    <h2 class="footer__headline">Find me:</h2>

    <ul role="list" class="footer__socialmedia-items">
      <li class="footer__socialmedia-item">
        <a
          href="https://github.com/EllyPirelly?tab=repositories"
          class="footer__link"
          aria-labbelledby="The github logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgGithub />
        </a>
        <span class="sr-only"
          >Click here to go to Elle's github repositories</span
        >
      </li>
      <li class="footer__socialmedia-item">
        <a
          href="https://codepen.io/ellypirelly"
          class="footer__link"
          aria-labbelledby="The codepen logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgCodepen />
        </a>
        <span class="sr-only"
          >Click here to go to Elle's codepen code fiddles</span
        >
      </li>
      <li class="footer__socialmedia-item">
        <a
          href="https://twitter.com/ellypirelly"
          class="footer__link"
          aria-labbelledby="The twitter logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgTwitter />
        </a>
        <span class="sr-only">Click here to go to Elle's twitter</span>
      </li>
      <li class="footer__socialmedia-item">
        <a
          href="https://www.instagram.com/ellypirelly/"
          class="footer__link"
          aria-labbelledby="The instagram logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgInstagram />
        </a>
        <span class="sr-only">Click here to go to Elle's instagram</span>
      </li>
      <li class="footer__socialmedia-item">
        <a
          href="https://www.linkedin.com/in/elke-hanschen-651440133/"
          class="footer__link"
          aria-labbelledby="The linkedin logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgLinkedin />
        </a>
        <span class="sr-only">
          Click here to go to Elle's linkedin page and to connect professionally
        </span>
      </li>
      <li class="footer__socialmedia-item">
        <a
          href="https://www.facebook.com/elly.pirelly.3/"
          class="footer__link"
          aria-labbelledby="The facebook logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgFacebook />
        </a>
        <span class="sr-only">Click here to go to Elle's facebook page</span>
      </li>
    </ul>
    <span class="footer__copyright">©&thinsp;2022 Elle Hanschen</span>
  </footer>
</template>

<script>
import SvgCodepen from '../assets/img/svg/SvgCodepen.vue'
import SvgFacebook from '../assets/img/svg/SvgFacebook.vue'
import SvgGithub from '../assets/img/svg/SvgGithub.vue'
import SvgInstagram from '../assets/img/svg/SvgInstagram.vue'
import SvgLinkedin from '../assets/img/svg/SvgLinkedin.vue'
import SvgTwitter from '../assets/img/svg/SvgTwitter.vue'

export default {
  name: 'TheFooter',
  components: {
    SvgCodepen,
    SvgFacebook,
    SvgGithub,
    SvgInstagram,
    SvgLinkedin,
    SvgTwitter,
  },
}
</script>

<style lang="scss">
.footer__wrapper {
  background-color: var(--pumicestone);
  padding: 1em 1.5em;

  @media screen and (min-width: 640px) {
    text-align: center;
  }
}

.footer__headline {
  margin-bottom: auto;
  font-size: 1.25em;
  font-weight: 500;
  pointer-events: none;
}

.footer__socialmedia-items {
  align-items: center;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 640px) {
    display: block;
    justify-content: center;
    margin-top: 1em;
  }
}

.footer__socialmedia-item {
  display: inline-block;
}

.footer__link {
  display: inline-block;
  margin: 0 1.25em 0 0;
}

.footer__link:last-child {
  @media screen and (min-width: 640px) {
    margin-right: 0;
  }
}

.footer__copyright {
  @media screen and (min-width: 640px) {
    display: block;
    margin-top: 1em;
  }
}
</style>
