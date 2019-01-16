<template>
  <v-toolbar app fixed @click="show">
    <v-toolbar-side-icon @click.stop="changeDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>{{pageTitle}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <!--<v-switch label="Switch theme color" v-model="theme.isDark" class="switch"></v-switch>-->
  </v-toolbar>
</template>

<script>

export default {
  props: ['showDrawer'],

  name: 'sales_header',

  data () {
    return {
      pageTitle: 'This is page title'
    }
  },
  methods: {
    changeDrawer: function () {
      let showDrawer = this.showDrawer.drawer
      this.showDrawer.drawer = !showDrawer
    },
    show: () => {
      console.log(this.showDrawer.drawer)
    }
  }
}
</script>

<style scoped>
  position: relative;
  right: 50px;
  top: 20px;
</style>
