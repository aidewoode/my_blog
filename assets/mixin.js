module.exports = function(vue) {
  vue.mixin({
    methods: {
      startLoading: function() {
        this.$root.loading = true;
      },

      stopLoading: function() {
        this.$root.loading = false;
      }
    }
  });
}
