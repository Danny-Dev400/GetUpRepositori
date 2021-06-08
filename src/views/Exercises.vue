<template>
  <GetUpBar />
    <div class="container">
      <h1>Ejercicios </h1> 
      <div class="sports">
        <div class="body-sports" v-for="(ejercicios, index) in dataEx" :key="index">
          <h2>{{ejercicios.rutina}} </h2>
                <CardExercise v-for="cardE in ejercicios.objetos"
                  :id="cardE.id"
                  :key="cardE.id"
                  :img="cardE.imagen"
                  :name="cardE.nombre"
                  :duracion="cardE.duracion" 
                  :video="cardE.video"
                  :series="cardE.series"
                  :repeticiones="cardE.repeticiones"
                  :description="cardE.descripcion"/>
        </div>
      </div>
    </div>

    <button @click="CrearRutina"> Crear rutina</button>
    <TabsBar />
</template>

<script lang="ts">
import GetUpBar from "../components/GetUpBar.vue";
import TabsBar from "../components/TabsBar.vue";
import CardExercise from "../components/CardExercise.vue";
/*import dataExercises from "../dbExercises.json";*/

import axios from "axios"

export default  {
  name: 'Exercise',
  components:{
    GetUpBar,
    TabsBar,
    CardExercise
  },
  data(){
      return{
        dataR : null,
        dataE : null,
        dataEx : [],
      }
  },
  methods:{
    CrearRutina(){
        let obj = document.querySelectorAll(".card-active")
        let arraySelected = []
        for(let i = 0 ; i< obj.length; i++){
          let newIndex = obj[i].id.substring(1);
          arraySelected.push(newIndex)
        }
        console.log(arraySelected)
        
    }
  },
  async created(){
    try{
      const response2 = await axios.get('http://localhost:3000/api/rutinas/list')
      
      this.dataR = response2.data

      for(let i = 0; i < this.dataR.length; i++){

        let json = {
          newId : "",
          rutina: null,
          objetos: null,
        }
        json.newId = "R" + this.dataR[i].id;
        json.rutina = this.dataR[i].nombre;

        let ejercicios = await axios.get(`http://localhost:3000/api/rutinas/${this.dataR[i].id}/ejercicios`)

        for(let j = 0; j < ejercicios.data.length; j++){
          ejercicios.data[j].imagen = `http://localhost:3000/api/ejercicios/buscar/${ejercicios.data[j].id}`
        }
        json.objetos = ejercicios.data;
        this.dataEx.push(json)
      }
    }catch(e){
      console.log(e)
    }
  },
  mounted(){
    
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');

.flex{
  display: flex;
}

button{
  /*position: absolute;*/
  width:95%;
  padding: 15px 5px;
  margin-bottom: 100px;
  border-radius:15px;
  background-color: #685bf8;
  font-size: 1.5rem;
  font-family: 'Dosis', sans-serif;
  font-weight: 600;
  border: none;
  text-transform: uppercase;
  color: white;
}
video{
  width: 95%;
}
.container{
  margin-top: 80px;
  font-family: 'Dosis', sans-serif;
}
.container h2{
  color: white;
  margin: auto;
  font-size: 2rem;
  margin-bottom: 20px;

}

.container img{
  width: 100%;
}

.container h1{
  font-size: 3rem;
  font-weight: 400;
  color: white;
}

.sports{

}
.header-sports{
  width: 100%;
  display: flex;
    justify-content:space-around;
}
.section-sport{
  width:50px;
  height: 50px;
  background-color:#685bf8 ;
  border-radius: 50%;
}

.body-sports{
  margin-bottom: 0px;
}

</style>