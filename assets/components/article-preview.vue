<template lang='jade'>
  li.articles-list__item
    .articles-list__date {{article.date | formattedDate}}
    h1.articles-list__title
      a.articles-list__link(v-link="{ name: 'article', params: { id: article.id }}") {{article.title}}
</template>
<script>
</script>
<style>
  .articles-list__item {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 60px;
  }

  .articles-list__date {
    width: 30%;
    color: rgb(101, 103, 101);
    font-size: 18px;
    padding-top: 6px;
  }

  .articles-list__title {
    width: 70%;
    margin: 0;
    font-size: 22px;
    font-weight: 400;
    font-family: 'Merriweather', 'Hiragino Sans GB', 'Hiragino Sans GB W3', 'Microsoft YaHei', 'Wenquanyi Micro Hi', sans-serif;
  }

  .articles-list__link {
    color: rgb(28, 28, 28);
    text-decoration: none;
  }
</style>
