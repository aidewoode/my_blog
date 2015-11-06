<template lang='jade'>
  .yue {{{article}}}
</template>
<script>
  module.exports = {
    data: function() {
      return {
        article: null
      };
    },

    route: {
      data: function(transition) {
        this.startLoading();

        var fetch = require('../fetch');
        var marked = require('marked');

        fetch('articles', this.$route.params.id, function(response) {
          transition.next({ article: marked(response) });
          this.stopLoading();
        }.bind(this));
      }
    }
  }
</script>
