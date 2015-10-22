<template lang='jade'>
  .yue {{{article}}}
</template>
<script>
  module.exports = {
    data: function() {
      return {
        article: require('../articles/' + this.$route.params.id + '.md')
      }
    }
  }
</script>
