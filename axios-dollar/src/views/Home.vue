<template>
  <div>
  <v-layout :wrap="true">
      <v-flex xs12>

        <v-card>
          <v-date-picker 
            v-model="date" 
            :full-width="true"
            locale="es-cl"
            :min="minimum"
            :max="maximum"
            @change="getDollar(date)"
          >
          </v-date-picker>
        </v-card>

        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">
            {{ dollar }}
          </v-card-text>
        </v-card>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  name: 'home',
  data(){
    return{
      date: new Date().toISOString().substr(0, 10),
      minimum: '1984',
      maximum: new Date().toISOString().substr(0, 10),
      dollar : null
    }
  },
  methods: {
    ...mapMutations(['showLoading', 'hideLoading']),
    async getDollar(day){
      let arrayDate = day.split(['-'])
      let ddmmyy = arrayDate.reverse().join('-')
      try {
        this.showLoading({title: 'Accessing to info', color: 'secondary'})

        let data = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)

        if(data.data.serie.length > 0){
          this.dollar = await data.data.serie[0].valor
        }else{
          this.dollar = 'No results'
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.hideLoading()
      }
     
    }
  },
  created() { 
    this.getDollar(this.date)
  }
}
</script>
