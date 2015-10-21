<template>
  {{article}}
</template>
<script>
  module.exports = {
    data: function() {
      return {
        article: require('../../articles/1.md')
      }
    }
  }
</script>
