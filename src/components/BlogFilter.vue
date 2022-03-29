<template>
  <section class="tagitems-container">
    <h3 class="tagitems-headline">Filter by &nbsp;<SvgTag /></h3>

    <div class="tagitems-wrapper" data-element="tag-filter">
      TODO: dynamically rendered tags
    </div>

    <div class="tagselectbtn-wrapper">
      <button type="button" class="tagselect allselect" data-button="select">
        Select all
      </button>
      <button type="button" class="tagselect unselect" data-button="unselect">
        Unselect all
      </button>
    </div>
  </section>
</template>

<script>
import SvgTag from '../assets/img/svg/SvgTag.vue'

export default {
  name: '',

  components: {
    SvgTag,
  },
}
</script>

<style lang="scss">
.tagitems-container {
  margin-top: 1.5em;
  padding: 0 1.5em;

  @media screen and (min-width: 480px) {
    padding: 0;
  }

  @media screen and (min-width: 800px) {
    margin-bottom: 12px;
    margin-top: 0;
  }
}

.tagitems-headline {
  display: flex;
  font-family: 'Bitter', serif;
  font-size: 1.25em;
  font-weight: 500;
  margin-right: 12px;
}

.tagitems-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.taglink {
  background-color: var(--pineappeslice65);
  border: 1px solid var(--pineappeslice50darken);
  border-radius: 4px;
  color: var(--darkgray);
  font-size: 16px;
  margin: 8px 8px 0 0;
  padding: 6px 8px;
  text-decoration: none;

  &.selected {
    background-color: var(--pineappeslice50darken);
    color: var(--pineappeslice85);

    &:hover {
      background-color: var(--pineappeslice50darken);
      border: 1px solid var(--pineappeslice50darken);
      color: var(--pineappeslice85);
    }
  }

  &:hover {
    background-color: var(--pineappeslice);
  }
}

.tagselectbtn-wrapper {
  margin-top: 16px;
}

.tagselect {
  background-color: var(--pineappeslice50darken);
  color: var(--pineappeslice85);
  border: 1px solid var(--pineappeslice50darken);
  cursor: pointer;
  font-size: 16px;
  margin-right: 8px;
  padding: 10px;
  transition-duration: 0.2s;

  &:hover {
    box-shadow: 0 4px 8px 0 var(--darkgray60);
  }
}
</style>
