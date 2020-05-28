<template>
  <div class="q-pa-md">
    <q-select
      filled
      v-model="model"
      use-input
      hide-selected
      fill-input
      label="Search"
      :options="data"
      @filter="filterFn"
      style="width: 500px"
      @keyup.enter="submit"
    >
    </q-select>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      data: [],
      keyword: null,
      model: null
    }
  },
  mounted () {

  },
  methods: {
    filterFn (val, update) {
      setTimeout(() => {
        this.model = val
        update(() => {
          axios.get('http://localhost:4000/', {
            params: {
              keyword: val
            }
          }).then(response => {
            this.data = response.data.map(function (data) {
              return data.keyword
            })
          }).catch(e => {
            console.log(e)
          })
        })
      }, 500)
    },
    submit () {
      axios.get('http://localhost:4000/hot-keyword', {
        params: {
          keyword: this.model
        }
      }).then(response => {
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
