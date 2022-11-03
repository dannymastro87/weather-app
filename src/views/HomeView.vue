<template>
  <div class="home">

    <h1>Weather App</h1>
    <div class="enter-city">
      <input 
      v-model="data.city"
      placeholder="Enter a city"
      type="text">
    </div>

    <div class="weather">
      <h1>6&deg;</h1>
      <h2>Cloudy</h2>
      <h3>Lots of clouds</h3>
    </div>

  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    let data = reactive({
      city: '',
      weather: null
    })

    return {
      data
    }
  }
}
</script>

<style lang="sass">
  .enter-city
    input
      font-size: 40px
  .weather
    margin-top: 10px
    h1
      font-size: 80px
    h1, h2, h3 
      margin: 0
</style>
