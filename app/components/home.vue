<template lang='pug'>
.articles-container
  ul.articles-list
  li.articles-list__item(v-for='article of sortedArticles')
    .articles-list__date {{ formattedDate(article.date) }}
    .articles-list__title
      router-link(class='articles-list__link', :to="{ name: 'article', params: { id: article.id }}") {{ article.title }}
</template>
<script>
import articles from '../data/articles.json';

export default {
  data() {
    return {
      articles: articles.data
    };
  },

  computed: {
    sortedArticles() {
      return this.articles.sort((a, b) => {
        return b.id - a.id;
      });
    }
  },

  methods: {
    formattedDate(value) {
      const date = new Date(value);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  }
};
</script>
<style>
.articles-list__item {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3.33rem;
  align-items: center;
}

.articles-list__date {
  width: 30%;
  color: rgb(101, 103, 101);
  font-size: 1rem;
}

.articles-list__title {
  width: 70%;
  font-size: 1.1rem;
  font-weight: 400;
}

.articles-list__link {
  color: rgb(28, 28, 28);
  text-decoration: none;
}

@media screen and (max-width: 480px) {
  .articles-list__date {
    width: 100%;
  }
}
</style>
