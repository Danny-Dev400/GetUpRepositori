<template>
  <div class="card-recomendations">
      <img :src="img" alt="">
      <div></div>
      <h2>{{name}}</h2>
  </div>
</template>

<script>

export default {
  name: "GetUpBar",
  props: {
    img: String,
    name: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');

.card-recomendations {
    width: 250px;
    height: 400px;
    background-color: #685bf8;
    margin-top: 10px;
    margin-right: 20px;
    display: inline-block;
    border-radius: 20px;
}

.card-recomendations img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
}

.card-recomendations div{
    width: 100%;
    height: 405px;
    background-color: #685bf8;
    transform: translateY(-405px);
    border-radius: 20px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(255,255,255,0) 100%, rgba(2,0,36,1) 255%);
}

.card-recomendations h2{
    width: 100%;
    transform: translateY(-480px);
    color: white;
    font-family: 'Dosis', sans-serif;
    font-size: 1.1rem;
    text-transform: capitalize;
    font-weight: 400;
}



</style>