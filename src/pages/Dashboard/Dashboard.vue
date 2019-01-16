<template>
  <v-content>
      <dashboard_header></dashboard_header>
      <test></test>
  </v-content>

</template>

<script>
import test from '@/components/test'
import dashboard_header from '@/pages/Dashboard/dashboard_header'

export default {
  name: 'App',
  props: ['theme'],
  components: {
    "test": test,
    "dashboard_header": dashboard_header
  },

  data () {
    return {
      title: 'Dashboard',


    }
  },
  methods: {

  }
}
</script>
