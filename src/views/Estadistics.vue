<template>
  <GetUpBar />
    <div class="container">
      <h1>Estadisticas </h1> 
    </div>
  <TabsBar />
</template>

<script lang="ts">
import GetUpBar from "../components/GetUpBar.vue";
import TabsBar from "../components/TabsBar.vue";

export default  {
  name: 'Estadistics',
  components:{
    GetUpBar,
    TabsBar
  },
  data(){
      return{
        step1Active: true,
        step2Active: false,
        step3Active: false,
      }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');

.flex{
  display: flex;
}

.container{
  margin-top: 80px;
  font-family: 'Dosis', sans-serif;
}

.container h1{
  font-size: 3rem;
  font-weight: 400;
  color: white;
}


</style>