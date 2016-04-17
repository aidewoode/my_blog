import homeComponent from './views/home.vue';
import articleComponent from './views/article.vue';

export default function(router) {
  router.map({
    '/': {
      name: 'home',
      component: homeComponent
    },

    '/articles/:id': {
      name: 'article',
      component: articleComponent
    }
  });
}
