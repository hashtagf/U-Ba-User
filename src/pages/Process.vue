<template>
  <div class="Process container">
    <div class="columns is-centered has-text-centered">
      <div class="column is-6">
        <h3 class="is-size-1">Uba-User</h3>
        <div class="google-map">
          <gmap-map :center="center" :zoom="15" style="width: 100%; height: 400px">
            <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position">
            </gmap-marker>
          </gmap-map>
        </div>
        <div class="columns">
          <div class="column is-3"><br>
            <img :src="user.fb.photoURL" alt="" width="100px" height="100px" style="border-radius:50%;"><br>
          </div>
          <div class="column is-9">
            <h1 class="is-size-4">User</h1>
            ID : {{user.fb.uid}} <br>
            Name : {{user.displayName}}
          </div>
        </div>
        <hr>
        <div class="columns">
          <div class="column is-3 has-text-centered"><br>
            <img :src="driver.driver.fb.photoURL" width="100px" height="100px" style="border-radius:50%;" alt="">
          </div>
          <div class="column is-9 has-text-centered">
            <h1 class="is-size-4">Driver</h1>
            ชื่อ : {{driver.driver.displayName}} <br>
            ราคา : {{driver.cost}}  บาท<br>
            ระยะเวลา : {{driver.time}} วินาที<br>
          </div>
        </div>
        <hr>
        <div class="" v-if="driver.state === 'no wait'">
          <router-link to="/Home"><button type="button" name="button" class="button is-medium is-danger"> HOME </button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Process',
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
      'isReady',
      'driver'
    ])
  },
  methods: {
    ...mapActions([
      'login',
      'logout',
      'call',
      'setDriver'
    ])
  },
  mounted () {
    this.setDriver(this.user.uid)
    setInterval(() => {
      this.setDriver(this.user.uid)
      this.center.lat = this.driver.Latitude
      this.center.lng = this.driver.Longitude
      this.markers[0].position.lat = this.driver.Latitude
      this.markers[0].position.lng = this.driver.Longitude
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    border-radius: 50%;
  }
  .google-map {
    width: 100%;
    height: 400px;
    margin: auto;
    margin-bottom: 10px;
    background-color: grey;
  }
</style>
