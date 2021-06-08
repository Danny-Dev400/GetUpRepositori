<template>
  <div class="home">
    <GetUpBar />
    
    <h1>Ejercicios Rapidos</h1>
    <div class="card-wrap">
      <CardRecomendations v-for="(card, index) in dbRapidos" :key="index" 
                          :img="card.image"
                          :name="card.name "
                          />
    </div>
    <h1>Ejercicios Sujeridos</h1>
    <div class="card-wrap">
      <CardRecomendations v-for="(card, index) in dbAvanzados" :key="index" 
                          :img="card.imagen"
                          :name="card.nombre"
                          @click="goToExercises()"/>
    </div>

    <h1>Ejercicios Avanzados</h1>
    <div class="card-wrap">
      <CardRecomendations v-for="(card, index) in dbSujeridos" :key="index" 
                          :img="card.image"
                          :name="card.name"
                          />
    </div>
    <div class="footer"></div>
    <TabsBar />
  </div>
</template>

<script>
// @ is an alias to /src
import GetUpBar from '../components/GetUpBar.vue'
import CardRecomendations from '../components/CardRecomendations.vue'
import dbRecomendations from '../dbRecomendations.json'
import TabsBar from '../components/TabsBar.vue'

import axios from "axios"

export default {
  name: "Home",
  components:{
    GetUpBar,
    CardRecomendations,
    TabsBar,
  },
  data(){
    return {
      db : dbRecomendations,
      dbAvanzados: null
    }
  },
  methods: {
    goToExercises(){
      this.$router.push('/Exercise')
    }
  },
  async mounted(){
    try{
      const response = await axios.get('http://localhost:3000/api/rutinas/list')
      this.dbAvanzados = response.data
      for(let i = 0 ; i < this.dbAvanzados.length; i++){
        this.dbAvanzados[i].imagen = `http://localhost:3000/api/rutinas/buscar/${this.dbAvanzados[i].id}`
        console.log(this.dbAvanzados[i].imagen )
      }
    }catch(e){
      console.log(e)
    }
  },
  computed:{
    dbRapidos: function(){
      let db2 = [];
      for(let i=0; i < this.db.length; i++){
        if(this.db[i].type === "EJRapidos"){
          db2.push(this.db[i])
        }
      }
      return db2;
    },
    dbSujeridos: function(){
      let db2 = [];
      for(let i=0; i < this.db.length; i++){
        if(this.db[i].type === "EJSujeridos"){
          db2.push(this.db[i])
        }
      }
      return db2;
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');

.home{
  margin-top: 90px;
}

.home h1{
  color: white;
  font-family: 'Dosis', sans-serif;
  font-weight: 400;
}

.card-wrap{
  position: relative;
  width: 90%;
  height: 420px;
  left: 5%;
  white-space: nowrap;
  overflow-y: hidden; 
  overflow-x: auto;
}

.footer{
  width:100%;
  height:80px;
}

</style>