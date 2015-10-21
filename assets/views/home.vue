<template lang='jade'>
  .articles-container
    ul.articles-list
      article-preview(v-repeat="article in articles | orderBy 'id' -1")
</template>

<script>
  module.exports = {
    data: function() {
      return {
        articles: require('../../data/articles.json').data
      }
    },

    components: {
      'article-preview': require('../components/article-preview.vue')
    }
  }
</script>
