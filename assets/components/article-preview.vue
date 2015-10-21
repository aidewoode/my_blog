<template lang='jade'>
  li.articles-list__item
    .articles-list__date {{article.date | formattedDate}}
    h1.articles-list__title
      a.articles-list__link(v-link="{ name: 'article', params: { id: article.id }}") {{article.title}}
</template>
<script>
</script>
<style>
</style>
