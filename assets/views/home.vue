<template lang='jade'>
  p {{articles.data[0].title}}
  i.icon.icon--github
<template>

<script>
  module.exports = {
    data: function() {
      return {
        // test data
        articles: require('../../data/articles.json')
      }
    }
  }
</script>
