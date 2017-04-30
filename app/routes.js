import Home from './components/home.vue';
import Article from './components/article.vue';
import PageNotFound from './components/pageNotFound.vue';

export default function (VueRouter) {
  return new VueRouter({
    routes: [
      { path: '/', name: 'home', component: Home },
      { path: '/articles/:id', name: 'article', component: Article },
      { path: '*', component: PageNotFound }
    ]
  });
}
