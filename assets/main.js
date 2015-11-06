require('normalize.css');
require('./css/index.css');
// typography style, from https://github.com/lepture/yue.css.
// But I do a little change in this stylesheet.
require('./css/yue.css');

var Vue = require('vue');
var VueRouter = require('vue-router');
var App = require('./app.vue');

Vue.use(VueRouter);

var router = new VueRouter();

require('./mixin')(Vue);
require('./filters')(Vue);
require('./routers')(router);

router.start(App, '#js-app');
