<template lang='pug'>
.site-content
  nav.global-nav
    a.global-nav__title Aide's Blog
    ul.global-nav__list
      li.global-nav__item
        a.global-nav__link(href='https://github.com/aidewoode' target='_blank')
          i.icon.icon--github
      li.global-nav__item
        a.global-nav__link(href='mailto:aidewoode@gmail.com')
          i.icon.icon--mail
      li.global-nav__item
        a.global-nav__link(href='#')
          i.icon.icon--rss
    loader(v-if='loading')
  .content-container
    router-view
</template>
<script>
  import loader from './components/loader.vue';

  export default {
    data() {
      return { loading: false };
    },

    components: {
      loader
    }
  };
</script>
<style>
@import './css/index.css';
</style>
