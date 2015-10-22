module.exports = function(router) {
  router.map({
    '/': {
      name: 'home',
      component: require('./views/home.vue')
    },

    '/articles/:id': {
      name: 'article',
      component: require('./views/article.vue')
    }
  });
}
