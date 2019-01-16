<template>
  <v-toolbar app fixed style="margin-top: 60px">
      <v-toolbar-title>{{pageTitle}}</v-toolbar-title>

      <!--<search></search>-->
    <v-spacer></v-spacer>
    <span class="date">{{date}}</span>
      <v-btn  color="rgb(43, 122, 120)">
        <v-icon color="white">dashboard</v-icon>

      </v-btn>
  </v-toolbar>
</template>

<script>
import search from '@/components/search'

export default {
  name: 'dashboard_header',
  components: {
    "search": search
  },

  data () {
    return {
      pageTitle: 'Dashboard',
      months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      day: ['SUN', 'MON', 'TUE','WEN', 'THU', 'FRI', 'SAT'],
      date: ""
    }
  },
  methods: {

  },

  created() {
    let day = new Date().getDay();
    let d = new Date().getDate();
    let m = new Date().getMonth();
    this.date =this.day[day] + ', ' + d + ' ' + this.months[m];
  }
}
</script>

<style scoped>
.date {
  color: #4485ff;
}
.dash_header {
  margin-top: 60px;
}
  .dash_header {
    dash_header: 60px;
  }
</style>
