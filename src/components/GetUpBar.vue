<template>
  <div class="brand">
      <h1 @click="goToHome()">GetUp!</h1>
  </div>
</template>

<script>

export default {
  name: "GetUpBar",
  props: {
    msg: String,
  },
  methods:{
    goToHome(){
      this.$router.push('/Home')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

.brand {
    width: 100%;
    height: 70px;
    background-color: #685bf8;
    position: absolute;
    top: 0;
    left: 0;
}

.brand h1{
    font-family: 'Kaushan Script', cursive;
    font-size:2.7rem;
    font-weight: 400;
    margin: auto;
    padding:0;
    color: #111111;
}
</style>