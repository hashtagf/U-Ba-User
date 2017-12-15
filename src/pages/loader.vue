<template>
  <div class="loading columns is-centered">
    <div class="column is-6 has-text-centered">
      <br>
      <h3 class="is-size-1">Uba-User</h3>
      <center>
      <img src="https://camo.envatousercontent.com/68674b4a8e1e614bd339a4a30f1861398d204e0e/687474703a2f2f7468656d65732e706f74656e7a61676c6f62616c736f6c7574696f6e732e636f6d2f68746d6c2f6361726465616c65722f6173736574732f696d616765732f707265766965772d66696c652f6c6f616465722e676966" /></a>
      </center>
        <center>
          <div class="im">
            <img src="http://3.bp.blogspot.com/-HQJwsg8XcBA/VPz4EOrZvcI/AAAAAAAANeE/0FXbJPNCJsc/s1600/11-02%2B~%2BGIF%2B~%2BPlease%2BWait.gif" /></a>
          </div>
          <hr>
          <h1 class="is-size-4 bold">{{time}} วินาที</h1> {{next}}
          <hr>
          <br>
          <button type="button" class="button is-large is-danger" name="button" @click="backhome()">Cancel</button>
        </center>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'loading',
  data () {
    return {
      time: 0,
      msg: 'No Accept!'
    }
  },
  methods: {
    ...mapActions([
      'login',
      'logout',
      'call',
      'setDriver',
      'setStat'
    ]),
    backhome () {
      this.setStat({
        uid: this.user.uid,
        state: 'no wait'
      })
      this.$router.push({path: '/Home'})
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'isReady',
      'driver'
    ]),
    next () {
      if (this.driver.state === 'driving') {
        this.$router.push({path: '/Process'})
        return ''
      } else {
        return ''
      }
    }
  },
  mounted () {
    setInterval(() => {
      this.setDriver(this.user.uid)
      this.time++
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.im {
  width: 400px;
  height: 100px;
}
</style>
