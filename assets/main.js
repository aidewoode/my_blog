require('normalize.css');
require('./css/index.css');
require('./css/yue.css');

var Vue = require('vue');
var VueRouter = require('vue-router');
var App = require('./app.vue');

Vue.use(VueRouter);

var router = new VueRouter();

require('./filters')(Vue);
require('./routers')(router);

router.start(App, '#app');
