<template>
  <div class="container-nav flex">
      <div class = "btn-nav" @click="activeStep1()" @click.prevent="click" :class="[step1Active ? 'active' : 'deactive']"></div>
      <div class = "btn-nav" @click="activeStep2()" @click.prevent="click" :class="[step2Active ? 'active' : 'deactive']"></div>
      <div class = "btn-nav" @click="activeStep3()" @click.prevent="click" :class="[step3Active ? 'active' : 'deactive']"></div>
    </div>
  <div class="container-step" :class="[step1Active ? 'step1' : 'nostep1']">
    <form class="Register-Form">
        <h1>REGISTRO</h1>
        <input type="text" placeholder="Nombre de Usuario" v-model="user.nombre" required>
        <input type="email" placeholder="Correo Electronico" v-model="user.email" required>
        <input type="password" placeholder="Contraseña" v-model="user.password" id="pass1" required>
        <input type="password" placeholder="Confirmar Contraseña" id="pass2" required>
        <button type="submit" @click.prevent="click" @click="activeStep2">SIGUIENTE</button>
        <button @click="redirectionBack" @click.prevent="click">VOLVER</button>
    </form>
  </div>
  <div class="container-step" :class="[step2Active ? 'step2' : 'nostep2']">
    <form class="Register-Form">
        <h1>REGISTRO</h1>

        <div class="gender-selector">
            <h1>
              ¿Con cuál genero te sientes mas identificado?
            </h1>
            <div class="gender-selector-body">
              <div class="women-container">
                <h2>MUJER</h2>
                <i class="fas fa-venus" :class="[mujer ? 'gender-active' : 'gender-deactive']" @click="female"></i>
              </div>
              <div class="men-container">
                <h2>HOMBRE</h2>
                <i class="fas fa-mars" :class="[hombre ? 'gender-active' : 'gender-deactive']" @click="male"></i>
              </div>
            </div>
        </div>

        <div class="weight-container">
          <h1>¿Que tan en forma estás?</h1>
          <div class="slidecontainer">
            <input type="range" min="1" max="100" v-model="user.nivel" class="slider" id="myRange">
          </div>
        </div>
        

        <button type="submit" @click.prevent="click" @click="activeStep3">SIGUIENTE</button>
        <button @click="activeStep1" @click.prevent="click">VOLVER</button>
    </form>
  </div>
  <div class="container-step" :class="[step3Active ? 'step3' : 'nostep3']">
    <form class="Register-Form">
        <h1>REGISTRO</h1>
        <input type="text" placeholder="Edad" v-model="user.edad">
        <input type="text" placeholder="Estatura" v-model="user.estatura">
        <button type="submit" @click.prevent="click" @click="validateUser">REGISTRAR</button>
        <button @click="activeStep2" @click.prevent="click">VOLVER</button>
    </form>
  </div>
</template>

<script lang="ts">

import axios from 'axios'

export default  {
  name: 'Register',
  data(){
      return{
        step1Active: true,
        step2Active: false,
        step3Active: false,
        hombre: false,
        mujer: false,
        user: {
          nombre:"",
          email: "",
          password: "",
          genero:"",
          nivel: 40,
          edad: "",
          estatura: "",
        }
      }
  },
  methods:{
    redirectionBack(){
        this.$router.push('/Login');
        console.log("hola");
    },
    male(){
      this.hombre = true;
      this.mujer = false;
    },
    female(){
      this.mujer = true ;
      this.hombre = false;
    },
    activeStep1: function (){
      this.step1Active = true;
      this.step2Active = false;
      this.step3Active = false;
    },
    activeStep2: function (){
      this.step1Active = false;
      this.step2Active = true;
      this.step3Active = false;
    },
    activeStep3: function (){
      this.step1Active = false;
      this.step2Active = false;
      this.step3Active = true;
    },

    async registerUser(){
      try{
        const response = await axios.post('http://localhost:3000/api/usuario/add', this.user)
        this.$router.push('/Login')
        console.log(response);
      }catch(e){
        alert(e)
      }
    },

    validateUser(){
      let pass1 = document.querySelector("#pass1");
      let pass2 = document.querySelector("#pass2");
      let allFine = true;

      if(this.hombre){
        this.user.genero = "Masculino"
      }else if(this.mujer){
        this.user.genero = "Femenino"
      }else{
        alert("seleccione un genero")
        allFine = false;
      }

      if(this.user.nombre == ""){
        alert("Llene el campo nombre")
        allFine = false;
      }
      if(this.user.email == ""){
        alert("Llene el campo email")
        allFine = false;
      }
      if(this.user.nombre == ""){
        alert("Llene el campo contraseña")
        allFine = false;
      }
      if(this.user.nombre == ""){
        alert("Llene el campo confirmar contraseña")
        allFine = false;
      }
      if(this.user.edad == ""){
        alert("Llene el campo edad")
        allFine = false;
      }
      if(this.user.estatura == ""){
        alert("Llene el campo estatura")
        allFine = false;
      }
      if(pass1.value != pass2.value){
        alert("Las contraseñas no coinciden")
        allFine = false;
      }
      if(allFine){
        this.registerUser();
      }
    }
    
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');

.flex{
  display: flex;
}

.container-step{
  position: absolute;
  width: 100%;
  left: 0;
}
.nostep1{
  display: none;
}
.step1{
  display: inline;
}

.nostep2{
  display: none;
}
.step2{
  display: inline;
}

.nostep3{
  display: none;
}
.step3{
  display: inline;
}

.container-nav{
  justify-content: space-around;
  margin: auto;
  margin-top: 20px;
  width: 80%;

}

.Register-Form{
    width: 80%;
    margin: auto;
    color: white;
}

.Register-Form h1{
    font-size: 3rem;
    text-align: center;
    font-family: 'Dosis', sans-serif;
    font-weight: 600;
}

.Register-Form input{
    width: 100%;
    background-color: white;
    font-size: 1rem;
    font-family: 'Dosis', sans-serif;
    font-weight: 400;
    color: black;
    padding: 15px 0px;
    border-radius: 10px;
    border: none;
    margin: 12px 0px;
}

.Register-Form button{
    width: 100%;
    background-color: #685BF8;
    font-size: 1rem;
    font-family: 'Dosis', sans-serif;
    
    font-weight: 600;
    color: white;
    padding: 15px 12px;
    border-radius: 10px;
    border: none;
    margin: 12px 0px;
}

.btn-nav{
  width: 30px;
  background-color:#685BF8;
  height: 30px;
  margin: auto 20px;
  border-radius: 50%;
}

.active{
  width: 50px;
  height: 50px;
}

.deactive{
  width: 30px;
  height: 30px;
}

/*----- register 2 -------*/

.gender-selector{
  width: 100%;
  margin: auto;
  background-color:#232323 ;
  padding: 10px 0px;
  border-radius: 15px;
}

.gender-deactive{
  background-color:white;
  color: #111111;
}

.gender-active{
  background-color:#685BF8;
  color: white;
}

.gender-selector h1{
  font-size:1.5rem;
  font-weight: 400;
}

.gender-selector-body{
  display: flex;
  width: 100%;
}
.gender-selector-body .women-container{
  width: 50%;
}

.gender-selector-body .women-container h2{
  font-size:1.3rem;
  font-weight: 400;
}

.gender-selector-body .women-container i{
  font-size:5rem;
  padding:20px 40px;
  border-radius:50%;
}

.gender-selector-body .men-container{
  width: 50%;
}

.gender-selector-body .men-container h2{
  font-size:1.3rem;
  font-weight: 400;
}

.gender-selector-body .men-container i{
  font-size:5rem;
  padding:20px 30px;
  border-radius:50%;
}
/*------ slider  and weight ---------*/

.weight-container{
  background-color: #232323;
  width: 100%;
  margin-top: 10px;
  padding:10px 0px;
  border-radius:15px;
}

.weight-container h1{
  font-size: 1.5rem;
  font-weight: 400;
}

.slidecontainer {
  width: 90%; /* Width of the outside container */
  margin: auto;
}

.slider {
  -webkit-appearance: none; 
  appearance: none;
  width: 100%; 
  height: 1px; 
  background: #ffffff; 
  outline: none; 
  opacity: 1; 
}



.slider::-webkit-slider-thumb {
  -webkit-appearance: none; 
  appearance: none;
  width: 25px; 
  height: 25px; 
  background: #685BF8;
  cursor: pointer; 
  border-radius: 50%;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D; 
  cursor: pointer;
}

</style>