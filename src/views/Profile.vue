<template>
  <GetUpBar />
    <div class="container">
      <h1>Perfil</h1> 
      <form :action="postImagen" enctype="multipart/form-data" method="POST">
        <i class="fas fa-user-alt perfil" v-if="mostrarImagen === false"></i>
        <img :src="user.imagen" alt="" srcset="" v-if="mostrarImagen === true">
        <input type="file" name="pic">
        <button type="submit">Enviar Imagen</button>
      </form>

      <form action="" class="form-user">
        <input type="text" id="nombre" v-model="user2.nombre">
        <i class="fas fa-edit editar" @click="aNombre()"></i>
        <input type="email" id="email" v-model="user2.email">
        <i class="fas fa-edit editar" @click="aEmail()"></i>
        <input type="text" id="estatura" v-model="user2.estatura">
        <i class="fas fa-edit editar" @click="aEstatura()"></i>
        <input type="text" id="edad" v-model="user2.edad">
        <i class="fas fa-edit editar" @click="aEdad()"></i>
        <button class="btn" @click="updateUser()" @click.prevent="click"> Guardar Cambios</button>
        <button class="btn2" @click="LogOut()" @click.prevent="click"> Cerrar Sesión</button>
      </form>
    </div>
  <TabsBar />
</template>

<script lang="ts">
import GetUpBar from "../components/GetUpBar.vue";
import TabsBar from "../components/TabsBar.vue";
import vuejwt from 'vue-jwt-decode'
import axios from 'axios'


export default  {
  name: 'Notifications',
  components:{
    GetUpBar,
    TabsBar
  },
  data(){
      return{
        activeNombre: false,
        activeEmail: false,
        activeEstatura: false,
        activeEdad: false,
        user: null,
        user2:{
          id: "",
          nombre: "",
          email: "",
          estatura: "",
          edad: "",
        },
        mostrarImagen: false,
        postImage: ""
      }
  },
  methods:{
    async updateUser(){
      try{
        let response = await axios.put('http://localhost:3000/api/usuario/update', this.user2)
        console.log(response)
        this.$router.push('/Home')
      }catch(e){
        alert(e)
      }

    },
    LogOut(){
      this.$router.push('/Login')
      localStorage.removeItem('token');
    },
    aNombre(){
      let inputNombre = document.querySelector("#nombre")
      if(this.activeNombre){
        inputNombre.readOnly = false;
        this.activeNombre = false
      }else{
        inputNombre.readOnly = true;
        this.activeNombre = true
      }
    },
    aEmail(){
      let inputNombre = document.querySelector("#email")
      if(this.activeEmail){
        inputNombre.readOnly = false;
        this.activeEmail = false
      }else{
        inputNombre.readOnly = true;
        this.activeEmail = true
      }
    },
    aEstatura(){
      let inputNombre = document.querySelector("#estatura")
      if(this.activeEstatura){
        inputNombre.readOnly = false;
        this.activeEstatura = false
      }else{
        inputNombre.readOnly = true;
        this.activeEstatura = true
      }
    },
    aEdad(){
      let inputNombre = document.querySelector("#edad")
      if(this.activeEdad){
        inputNombre.readOnly = false;
        this.activeEdad = false
      }else{
        inputNombre.readOnly = true;
        this.activeEdad = true
      }
    }
  },
  async mounted(){
    let token = localStorage.getItem('token');

    let inputNombre = document.querySelector("#nombre")
    let inputEmail = document.querySelector("#email")
    let inputEstatura = document.querySelector("#estatura")
    let inputEdad = document.querySelector("#edad")
    let user = vuejwt.decode(token);

    let response = await axios.get(`http://localhost:3000/api/usuario/buscar/${user.id}`)
    this.user = response.data

    if(response.data.imagen){
      this.mostrarImagen = true
      this.user.imagen = `http://localhost:3000/api/usuario/buscarImagen/${this.user.id}`
    }else{
      this.mostrarImagen = false
    }
    this.postImagen = `http://localhost:3000/api/usuario/${this.user.id}/uploadImage`

    console.log(response)
    //console.log(user);
    this.user2.id = response.data.id
    this.user2.nombre = response.data.nombre
    this.user2.email = response.data.email
    this.user2.estatura = response.data.estatura
    this.user2.edad = response.data.edad

    if(this.activeNombre){
      inputNombre.readOnly = false;
    }else{
      inputNombre.readOnly = true;
    }

    if(this.activeEmail){
      inputEmail.readOnly = false;
    }else{
      inputEmail.readOnly = true;
    }

    if(this.activeEstatura){
      inputEstatura.readOnly = false;
    }else{
      inputEstatura.readOnly = true;
    }

    if(this.activeEdad){
      inputEdad.readOnly = false;
    }else{
      inputEdad.readOnly = true;
    }
    
  }
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

.container img{
  width: 15rem;
  border-radius: 50%
}


.container .perfil{
  font-size:15rem;
  color: white;
}

.container h1{
  font-size: 3rem;
  font-weight: 400;
  color: white;
}

.from-user{
  width:90%;
  margin-top:15px;
}

.editar{
  position:absolute;
  font-size:1.2rem;
  color: gray;
  transform: translate(-30px, 20px)
}

.form-user input{
  width:82%;
  padding: 18px 10px;
  margin: 7px 0;
  border: none;
  border-radius: 10px;
  font-family: 'Dosis', sans-serif;
  font-weight: 400;
  font-size:0.9rem;
}

.btn{
  width:87%;
  padding: 15px 5px;
  margin-bottom: 15px;
  border-radius:15px;
  background-color: #685bf8;
  font-size: 1.5rem;
  font-family: 'Dosis', sans-serif;
  font-weight: 600;
  border: none;
  text-transform: uppercase;
  color: white;
}

.btn2{
  width:87%;
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

</style>