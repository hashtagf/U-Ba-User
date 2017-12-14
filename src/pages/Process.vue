<template>
  <div class="Process container">
    <div class="columns is-centered">
      <div class="column is-6 box">
        <div class="google-map">

        </div>
        <hr>
        <div class="columns">
          <div class="column is-3">
            <img src="http://www.knowmuhammad.org/img/noavatarn.png" class="image is-128x128" alt="">
          </div>
          <div class="column is-9">
            ชื่อ : SSSSSSSSSSSSSSS SSSSSSS <br>
            เบอร์ : 099-9999999 <br>
            ยี่ห้อรถ : LAMBO <br>
            สี : ส้ม <br>
            ทะเบียน : วดฟ 5555
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Process',
  data () {
    return {

    }
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
