<template>
  <v-navigation-drawer
    v-model="showDrawer.drawer"
    fixed
    disable-resize-watcher
    clipped
    app
    width="180"
    class="drawer body grey darken-3">

    <!--divider-->
    <v-divider></v-divider>
    <!--list-tile-->
    <v-list dense class="white--text nav-buttons">
      <router-link to="/dashboard" exact>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="white--text">dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>DASHBOARD</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>

      <router-link to="/products" exact>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="white--text">archive</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>PRODUCTS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>

      <router-link to="/sales" exact>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="white--text">pie_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>SALES</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>

      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">multiline_chart</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>REPORTS</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">account_box</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>CONTACTS</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">add_shopping_cart</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>ORDERS</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">monetization_on</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>PAYMENTS</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">attach_money</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>DEBT</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">local_grocery_store</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Inventory</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Adjustment</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">commute</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Delivery</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">group</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Employees</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">redeem</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Promotion</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">redeem</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Promotion</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">redeem</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Promotion</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="white--text">chevron_left</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Collapse</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  props: ['showDrawer', 'theme'],

  name: 'Sidebar',

  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .drawer {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 20;
    background: #2D3B3E ;
    width: 14%;
    overflow-y: scroll;
  }
  a {
    color: #fff;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #212121;
  }
  ::-webkit-scrollbar-thumb {
    background: #757575;
  }

  .switch {
    position: relative;
    left: 60px;
  }

</style>
