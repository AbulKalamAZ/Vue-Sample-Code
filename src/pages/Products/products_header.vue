<template>
    <v-toolbar app fixed @click="show" style="margin-top: 60px">
      <v-toolbar-title>{{pageTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn-toggle >
        <v-btn flat color="rgb(43, 122, 120)">
          <v-icon>format_align_left</v-icon> IMPORTS
        </v-btn>
        <v-btn color="rgb(43, 122, 120)">
          <v-icon>format_align_center</v-icon>EXPORTS
        </v-btn>
      </v-btn-toggle>
      <!--<v-switch label="Switch theme color" v-model="theme.isDark" class="switch"></v-switch>-->
    </v-toolbar>
  </template>

<script>

export default {
  props: ['showDrawer'],

  name: 'products_header',

  data () {
    return {
      pageTitle: 'Products'
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

  </style>
