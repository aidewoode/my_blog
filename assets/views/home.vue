<template lang='jade'>
  .articles-container
    ul.articles-list
      article-preview(v-repeat="article in articles | orderBy 'id' -1")
</template>

<script>
  module.exports = {
    inherit: true,

    data: function() {
      return {
        articles: null
      }
    },

    route: {
      data: function(transition) {
        var data = require('../data/articles.json').data;
        transition.next({ articles: data, loading: false });
      }
    },

    components: {
      'article-preview': require('../components/article-preview.vue')
    }
  }
</script>
