import HomeComponent from './components/home.vue';
// import ArticleComponent from './components/article.vue';

export default function (VueRouter) {
  return new VueRouter({
    routes: [
      { path: '/', name: 'home', component: HomeComponent }
    ]
  });
}
