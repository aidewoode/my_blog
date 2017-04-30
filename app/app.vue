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
    loader(v-if='loading')
  .content-container
    router-view
</template>
<script>
  import browserUpdate from 'browser-update';
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

    mounted() {
      browserUpdate({
        vs: { i: 11, f: 50, o: 17, s: 10, c: 50 },
        text_en: `
          Your browser, {brow_name}, is too old.
          This site maybe have some display issues on your browser,
          please update your browser
          <a{up_but}>update</a><a{ignore_but}>ignore</a>
        `,
        text_zh: `
          你的浏览器 {brow_name} 太过老旧了，
          本网站在此浏览器上可能会有显示问题，
          请升级你的浏览器
          <a{up_but}>升级</a><a{ignore_but}>忽略</a>
        `,
        test: true
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
