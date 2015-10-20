<template lang='jade'>
.site-content
  nav.global-nav
    a.global-nav__title.float-left(v-link="{name: 'home'}") Aide's Blog
    ul.global-nav__list
      li.global-nav__item
      li.global-nav__item
      li.global-nav__item
   <router-view></router-view>

</template>
