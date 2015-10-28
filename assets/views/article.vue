<template lang='jade'>
  .yue {{{article}}}
</template>
<script>
  module.exports = {
    inherit: true,

    data: function() {
      return {
        article: null
      };
    },

    route: {
      data: function(transition) {
        var fetch = require('../fetch');
        var marked = require('marked');

        fetch('articles', this.$route.params.id, function(response) {
          transition.next({ article: marked(response), loading: false });
        }.bind(this));
      }
    }
  }
</script>
