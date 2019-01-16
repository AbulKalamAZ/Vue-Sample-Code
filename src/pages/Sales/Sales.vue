<template>
  <v-content>
    <sales_header></sales_header>

    <v-container fluid>
      <v-layout justify-center align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">This is your Sales page</h3>

          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>

          <v-divider class="my-4 mx-2"></v-divider>

          <div class="title mb-3">Click below to get all your sales stats</div>

          <v-btn
            class="mx-0"
            color="primary"
            large>See more
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

</template>

<script>
  import sales_header from '@/pages/Sales/sales_header'
export default {
  name: 'Sales',
  components: {
    'sales_header': sales_header
  },

  data () {
    return {
      title: 'Sales',
      gradient: 'to bottom, #66BB6A, #81C784'

    }
  },

  methods: {

  }
}
</script>

<style scoped>

</style>
