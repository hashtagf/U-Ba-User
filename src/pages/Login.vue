<template>
  <div class="Login container">
    <div class="columns is-centered">
      <div class="column is-6 box">
        <h1 class="title">Welcome to Uba</h1>
        <img src="" alt="">
          <button type="button" class="button is-link" @click="login()">LOGIN FACEBOOK</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'user',
      'isReady'
    ])
  },
  methods: {
    ...mapActions([
      'login',
      'logout'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
