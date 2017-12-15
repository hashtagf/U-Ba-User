<template>
  <div class="Login container">
  <br>
    <div class="columns is-centered ">
      <div class="column is-6 is-centered has-text-centered">
              <h3 class="is-size-1">Uba-User</h3>
        <div class="google-map">
          <gmap-map :center="center" :zoom="15" style="width: 100%; height: 450px">
            <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position">
            </gmap-marker>
          </gmap-map>
        </div>
        <hr>
        <div class="columns">
          <div class="column is-4">
            <img :src="user.fb.photoURL" alt="" width="100px" height="100px" style="border-radius:50%;"><br>
            <button type="button" name="button"class="button is-danger is-right" @click="logout()">Logout</button>
          </div>
          <div class="column is-8">
            ID : {{user.fb.uid}} <br>
            Name : {{user.displayName}} <br>
            <div id="location">
            </div>
            {{latitude}} : {{longitude}}
            <br> <br>
            <button type="button" class="button is-link is-medium" style="width:80%;" @click="call()">Calling UBa</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// var apiKey = 'AIzaSyDn7zvKP5RUc6FZnQFacNnH0TW1x1EE_qU'
getLocation()
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      latitude: 0,
      longitude: 0,
      msg: 'Header',
      center: {lat: 13.754, lng: 100.5014},
      markers: [{
        position: {lat: 13.754, lng: 100.5014}
      }]
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'isReady'
    ])
  },
  methods: {
    ...mapActions([
      'login',
      'logout',
      'call'
    ])
  }
}
function getLocation () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  }
}
function showPosition (position) {
  // var mapOptions = {
  //   center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
  //   zoom: 10,
  //   mapTypeId: google.maps.MapTypeId.HYBRID
  // }
  // google.maps.Map(document.getElementById('google-map'), mapOptions)
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
