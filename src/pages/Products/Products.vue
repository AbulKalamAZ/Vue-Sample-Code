<template>
  <v-content>
    <products_header></products_header>
    <Table></Table>
  </v-content>

</template>

<script>
import products_header from'@/pages/Products/products_header'
import Table from '@/components/Table'

export default {
  name: 'Products',
  components: {
    'Table': Table,
    'products_header': products_header
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
