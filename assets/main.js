require('normalize.css');
require('./css/index.css');

var Vue = require('vue');
var VueRouter = require('vue-router');
var App = require('./app.vue');

Vue.use(VueRouter);

var router = new VueRouter({
  hashbang: false,
  history: true,
  saveScrollPosition: true
});

require('./routers')(router);

router.start(App, '#app');
