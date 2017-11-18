<template>
  <div class="Login container">
    <div class="columns is-centered">
      <div class="column is-6box">
        <h1 class="title">Welcome to Uba</h1>
        <img src="" alt="">
        <router-link to="/Home">
          <button type="button" class="button is-link">LOGIN FACEBOOK</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
