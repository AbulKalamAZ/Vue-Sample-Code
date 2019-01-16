<template>
  <v-container>
    <v-layout>
      <v-flex >
        <v-data-table
          style="margin-top: 60px"
          v-model="selected"
          :headers="headers"
          :items="desserts"
          :pagination.sync="pagination"
          select-all
          item-key="name"
          class="elevation-1"
        >
          <template slot="headers" slot-scope="props">
            <tr>
              <th>
                <v-checkbox
                  :input-value="props.all"
                  :indeterminate="props.indeterminate"
                  primary
                  hide-details
                  @click="toggleAll"
                ></v-checkbox>
              </th>

              <th
                v-for="header in props.headers"
                :key="header.text"
                :class="[pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
              >
                {{ header.text }}
              </th>
            </tr>
          </template>
          <template slot="items" slot-scope="props" >
            <tr :active="props.selected" @click="props.selected = !props.selected">
              <td>
                <v-checkbox
                  :input-value="props.selected"
                  primary
                  hide-details
                ></v-checkbox>
              </td>
              <td>
                <v-img
                  :src="`../assets/img/${ props.item.src }`"
                  class="grey lighten-2"
                  height="70"
                  width="70"
                ></v-img>
              </td>
              <td>{{ props.item.name }}</td>
              <td >{{ props.item.calories }}</td>
              <td >{{ props.item.fat }}</td>
              <td >{{ props.item.carbs }}</td>
              <td >{{ props.item.protein }}</td>
              <td >{{ props.item.iron }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    pagination: {
      sortBy: 'name'
    },
    selected: [],
    headers: [
      {text: ''},
      {
        text: 'PRODUCTS',
        align: 'left',
        value: 'name'
      },
      { text: 'CODE', align: 'left', value: 'calories' },
      { text: 'CATEGORY', align: 'left', value: 'fat' },
      { text: 'VARIANTS', align: 'left', value: 'carbs' },
      { text: 'PRICE', align: 'left', value: 'protein' },
      { text: 'RELEASED', align: 'left', value: 'iron' }
    ],
    desserts: [
      {
        src:'img1.jpg',
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%'
      },
      {
        src:'img2.jpg',
        value: false,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%'
      },
      {
        src:'img3.jpg',
        value: false,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%'
      },
      {
        src:'img4.jpg',
        value: false,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%'
      },
      {
        src:'img5.jpg',
        value: false,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%'
      },
      {
        src:'img6.png',
        value: false,
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%'
      },
      {
        src:'img7.jpg',
        value: false,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%'
      },
      {
        src:'img8.jpg',
        value: false,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%'
      },
      {
        src:'img9.jpg',
        value: false,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%'
      },
      {
        src:'img10.jpeg',
        value: false,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%'
      }
    ]
  }),

  methods: {
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    }
  }
}
</script>
