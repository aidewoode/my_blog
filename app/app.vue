<template lang='pug'>
.site-content
  nav.global-nav
    router-link.global-nav__title(:to="{ name: 'home'}") Aide's Blog
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
  import mixin from './mixin';

  export default {
    mixins: [mixin],

    data() {
      return { loading: false };
    },

    created() {
      this.loadingBus.$on('toggleLoading', (val) => {
        this.loading = val;
      });
    },

    components: {
      loader
    }
  };
</script>
<style>
@import './css/index.css';
</style>
