<template>
  <v-toolbar app fixed  clipped-left>
    <v-toolbar-side-icon @click.stop="changeDrawer"></v-toolbar-side-icon>
    <img src="@/assets/img/solsersoft.png" alt="brand_logo" style="height: 50px; width: 50px; margin-left: 10px">
    <!--<v-toolbar-title>{{brandName}}</v-toolbar-title>-->
    <v-spacer></v-spacer>
    <v-avatar color="light-blue lighten-2">
    <v-icon color="white">account_circle</v-icon>
  </v-avatar>
  <span>
      <v-menu
        offset-y="true"
        origin="center center"
        transition="slide-y-transition"
      >
      <v-btn
        flat
        slot="activator"
      >
        <span class="user-name">{{userName}}</span>
        <v-icon>arrow_drop_down</v-icon>
      </v-btn>

      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          @click="changeTheme"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </span>
    <!--<v-switch label="Switch theme color" v-model="theme.isDark" class="switch"></v-switch>-->
  </v-toolbar>
</template>

<script>

export default {
  props: ['showDrawer'],

  name: 'Header',

  data () {
    return {
      brandName: 'Solsersoft',
      userName: 'User name',
      items: [
        { title: 'Profile' },
        { title: 'Accounts' },
        { title: 'Settings' },
        { title: 'Switch Theme' }
      ]
    }
  },
  methods: {
    changeDrawer: function () {
      let showDrawer = this.showDrawer.drawer;
      this.showDrawer.drawer = !showDrawer
    },
    changeTheme: function () {
  let showDrawer = this.showDrawer.isDark;
  this.showDrawer.isDark = !showDrawer
    },
  }
}
</script>

<style scoped>
  .user-name {
    font-weight: 300;
  }
</style>
