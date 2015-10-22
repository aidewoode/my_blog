<template lang='jade'>
.site-content
  nav.global-nav.clearfix
    a.global-nav__title.float-left(v-link="{name: 'home'}") Aide's Blog
    ul.global-nav__list.float-left
      li.global-nav__item
        a.global-nav__link(href='https://github.com/aidewoode' target='_blank')
          i.icon.icon--github
      li.global-nav__item
        a.global-nav__link(href='mailto:aidewoode@gmail.com')
          i.icon.icon--mail
      li.global-nav__item
        a.global-nav__link(href='#')
          i.icon.icon--rss
   .content-container
     <router-view></router-view>
</template>
