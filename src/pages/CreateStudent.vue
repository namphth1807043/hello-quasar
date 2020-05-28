<template>
  <div class="q-pa-md">
    <q-table
      title="Students"
      :data="students"
      :columns="columns"
      row-key="name"
      binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">
            {{ props.row.Id }}
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.Name }}
            <q-popup-edit v-model="props.row.Name" title="Update Name" buttons>
              <q-input type="text" v-model="props.row.Name" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="age" :props="props">
            <div class="text-pre-wrap">{{ props.row.Age }}</div>
            <q-popup-edit v-model="props.row.Age" title="Update Age" buttons>
              <q-input type="number" v-model="props.row.Age" dense autofocus />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
// import { httpClient } from '../api/http'
import axios from 'axios'
export default {
  data () {
    return {
      columns: [
        { name: 'id', align: 'center', label: 'Id', field: 'Id', sortable: true },
        { name: 'name', align: 'center', label: 'Name', field: 'Age', sortable: true },
        { name: 'age', align: 'center', label: 'Age', field: 'Name', sortable: true }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ],
      students: []
    }
  },
  mounted () {
    axios
      .get('https://localhost:44393/api/Students')
      .then(response => (this.students = response.data))
  },
  methods: {
    update () {
      axios({
        method: 'put',
        url: 'https://localhost:44393/api/Students/',
        data: {
        }
      })
    }
  }
}
</script>
