<template>
  <div class="Login container">
    <div class="columns is-centered">
      <div class="column is-6 is-centered box">
        <h1>MAP</h1>
        <div class="google-map">

        </div>
        <hr>
        <router-link to="/Process">
          <button type="button" class="button is-link is-large" style="width:80%;">Calling UBa</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
// var apiKey = 'AIzaSyDn7zvKP5RUc6FZnQFacNnH0TW1x1EE_qU'

export default {
  name: 'Loign',
  data () {
    return {
      center: {lat: 10.0, lng: 10.0},
      markers: [
        {
          position: {lat: 10.0, lng: 10.0}
        },
        {
          position: {lat: 11.0, lng: 11.0}
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .google-map {
    width: 100%;
    height: 450px;
    margin: auto;
    margin-bottom: 10px;
    background-color: grey;
  }
</style>
