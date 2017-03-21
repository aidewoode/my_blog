<template lang='pug'>
.yue(v-html='article')
</template>
<script>
import marked from 'marked';
import mixin from '../mixin';

export default {
  mixins: [mixin],

  data() {
    return { article: null };
  },

  created() {
    this.fetchArticle();
  },

  watch: {
    $route: 'fetchArticle'
  },

  methods: {
    fetchArticle() {
      this.loadingBus.$emit('toggleLoading', true);

      const request = new XMLHttpRequest();

      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
          this.article = marked(request.responseText);
          this.loadingBus.$emit('toggleLoading', false);
        }
      };

      request.open('GET', `articles/${this.$route.params.id}.md`, true);
      request.send();
    }
  }
};
</script>
