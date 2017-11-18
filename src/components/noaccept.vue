<template>
  <div class="noaccept">
    <center>
    <img src="https://media.giphy.com/media/l2QEjQ0WyTRvHeTFm/giphy.gif" /></a></center>
    <button class="button button5">Call Again</button>
  </div>
</template>

<script>
export default {
  name: 'noaccept',
  data () {
    return {
      msg: 'No Accept!'
    }
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
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: Black;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
.button5 {
    background-color: white;
    color: RGBA (255, 0, 0, 0.2);
    border: 2px solid #228B22;
}

.button5:hover {
    background-color:#228B22;
    color: white;
}
</style>
