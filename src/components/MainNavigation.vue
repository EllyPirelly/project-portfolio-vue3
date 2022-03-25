<template>
  <button
    @click="toggleMainNav"
    class="navbutton"
    data-toggle="nav-toggle"
    data-target="[data-element=navbar]"
  >
    <SvgBurger />
  </button>

  <input
    type="checkbox"
    class="icon-mode-checkbox"
    id="icon-mode-checkbox"
    value="dark"
    data-element="icon-mode-switch"
  />

  <label for="icon-mode-checkbox" class="icon-mode-button">
    <SvgSun />
    <SvgMoon />
  </label>

  <nav class="navbar toggle" data-element="navbar" role="navigation">
    <a
      href="#about-me"
      data-toggle="nav-toggle"
      data-target="[data-element=navbar]"
      data-link
      class="nav-item"
      >About Me</a
    >
    <a
      href="#code"
      data-toggle="nav-toggle"
      data-target="[data-element=navbar]"
      data-link
      class="nav-item"
      >Code</a
    >
    <a
      href="#blog"
      data-toggle="nav-toggle"
      data-target="[data-element=navbar]"
      data-link
      class="nav-item"
      >Writing</a
    >
    <a
      href="#connect"
      data-toggle="nav-toggle"
      data-target="[data-element=navbar]"
      data-link
      class="nav-item"
      >Connect</a
    >
    <a
      href="./de/index.html"
      data-toggle="nav-toggle"
      data-target="[data-element=navbar]"
      class="nav-item"
      >DE</a
    >
  </nav>
</template>

<script>
import SvgBurger from '../assets/img/svg/SvgBurger.vue'
import SvgMoon from '../assets/img/svg/SvgMoon.vue'
import SvgSun from '../assets/img/svg/SvgSun.vue'
import { toggleClass, toggleVisibility } from '../helpers/_toggle'

export default {
  name: 'MainNavigation',

  components: {
    SvgBurger,
    SvgMoon,
    SvgSun,
  },

  methods: {
    toggleMainNav() {
      toggleClass()
      toggleVisibility()
    },
  },
}
</script>

<style lang="scss">
button {
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0;

  &:active,
  &:focus {
    outline: 2px solid var(--paleorange);
  }
}

.burger-menu-logo {
  color: var(--darkgray);
  height: 30px;
}

.navbar {
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    width: 100vw;
  }
}

.nav-item {
  display: none;
  font-family: 'Bitter', serif;
  font-size: 1.25em;
  font-weight: 500;
  padding: 10px 14px;
  text-align: right;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    align-items: center;
    display: inline-flex;
  }

  &:last-of-type {
    margin-top: 70px;

    @media screen and (min-width: 768px) {
      margin-left: 70px;
      margin-top: 0;
    }
  }

  &:hover {
    background-color: var(--blissfulblue);
    border-radius: 4px;
    color: var(--paleorange);
    padding: 10px 14px;
  }
}

.navbar.toggle {
  background-color: var(--delicateblue);
  padding: 1.5em;
  position: absolute;
  top: 60px;
  right: 0;
  width: 65vw;

  & .nav-item {
    display: block;
  }

  @media screen and (min-width: 768px) {
    background-color: var(--delicateblue);
    padding: 0;
    position: initial;
    top: 0;
    width: 100vw;

    & .nav-item {
      display: inline-flex;
    }
  }
}

.navbutton {
  height: 32px;
  position: absolute;
  right: 22px;
  top: 18px;
  width: 32px;

  @media screen and (min-width: 768px) {
    display: none;
  }
}

.icon-mode-checkbox {
  display: none;
}

.icon-mode-button {
  border: 1px solid transparent;
  cursor: pointer;
  position: absolute;
  right: 70px;
  top: 13px;

  @media screen and (min-width: 768px) {
    right: 92px;
  }

  @media screen and (min-width: 1200px) {
    right: 130px;
  }

  @media screen and (min-width: 1244px) {
    right: 20px;
  }

  @media screen and (min-width: 1440px) {
    right: 120px;
  }
}

.icon-mode-svg {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 4px;
}

.icon-mode-svg.sun {
  background-color: var(--paleorange);
  color: var(--darkgray);

  body:not(.dark-theme) & {
    display: none;
  }
}

.icon-mode-svg.moon {
  display: none;

  body:not(.dark-theme) & {
    background-color: var(--delicateblue50darken);
    color: var(--delicateblue85);
    display: inline-block;
  }
}
</style>
