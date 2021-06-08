<template>
    <form class="Register-Form">
        <h1>INICIAR<br>SESIÓN</h1>
        <input type="email" placeholder="Correo Electronico" id="nombre" v-model="email">
        <input type="password" placeholder="Contraseña" id="password" v-model="password">
        <button v-on:click="login" @click.prevent='click' class="btn-primary" type="submit">INICIAR SESIÓN</button>
        <button v-on:click="redirection" @click.prevent='click' class="btn-secondary">NO POSEO CUENTA</button>
    </form>
</template>

<script lang="ts">
import axios from 'axios'

export default  {
  name: 'Login',
  data(){
      return{
        email: "",
        password: ""
      }
  },
  methods:{
    redirection: function (){
        location.href = '/Register';
        console.log("hola")
    },
    redirectionExercise: function (){
        location.href = '/Home';
        console.log("hola")
    },
    async login(){
        const object = {
            email: this.email,
            password: this.password,
        }
        try{
            const response = await axios.post('http://localhost:3000/api/usuario/login', object);
            let token = response.data.tokenReturn;
            localStorage.setItem('token',token);
            if(token){
            this.$router.push('/Home');
            }
            console.log(response.data);
        }catch(e){
            alert(e)
        }

    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');

.Register-Form{
    width: 85%;
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
    font-size: 1rem;
    font-family: 'Dosis', sans-serif;
    font-weight: 600;
    color: white;
    padding: 15px 15px;
    border-radius: 10px;
    margin: 12px 0px;
}

.btn-primary{
    background-color: #685bf8;
    border: none;
}

.btn-secondary{
    background-color: #685bf863;
    border: 2px solid #685bf8;
}
</style>