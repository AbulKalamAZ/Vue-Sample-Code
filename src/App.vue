<template>
  <!--//If it's login page -->
  <v-app v-if="isLogin">
    <router-view></router-view>
  </v-app>
  <!--//If it's not login page-->
  <v-app v-else class="inspire" :dark="showDrawer.isDark">
    <!--Header of this app-->
    <Header :showDrawer="showDrawer"></Header>
    <!--Side bar of this app-->
    <SideBar :showDrawer="showDrawer" :theme="theme"></SideBar>
    <!--This is other GUI part of app that routed from index.js-->
    <router-view :theme="theme"></router-view>


  </v-app>

</template>

<script>
import WebFontLoader from 'webfontloader'
import SideBar from '@/components/SideBar'
import Header from '@/components/Header'

export default {
  name: 'App',

  components: {
    'SideBar': SideBar,
    'Header': Header
  },
  data () {
    return {
      isLogin: true,
      showDrawer: {
        drawer: true,
        isDark: false
      }
    }
  },
  methods: {
  },

  mounted () {
    WebFontLoader.load({
      google: {
        families: ['Roboto:100,300,400,500,700,900']
      },
      active: this.setFontLoaded
    })
  },

  created () {
    if (window.location.pathname === '/dashboard') {
      this.isLogin = !this.isLogin
    }
  }
}
</script>

<style scoped>

  #app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
