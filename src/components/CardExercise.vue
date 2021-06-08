<template>
  <div class="card-exercise" :id="idComputed" :class="[select ? 'card-active' : 'card-deactive']">
      <div class="izq-card-content" @click="showModal(idComputed)">
          <img :src="img" alt="" srcset="">
      </div>
      <div class="der-card-content">
          <h2>{{name}}</h2>
          <ul>
              <li>Duracion: {{duracion}} min</li>
              <li>Series: {{series}}</li>
              <li>Repeticiones: {{repeticiones}}</li>
          </ul>
          <i class="fas fa-plus-circle" @click="selectCard()" ></i>
      </div>
  </div>

  <div class="modal-exercise" :id="idComputed2" >
      <img :src="img" alt="" >
      <div class="img-shadow"></div>
      <i class="fas fa-window-close" @click="dontShowModal(idComputed2)"></i>
      <div class="modal-body">
          <h3>{{name}}</h3>
          <p>{{description}}</p>
            <video controls id="fm-video">
                <source :src="video" type="video/mp4">
            </video>
      </div>
  </div>

  
</template>

<script>

export default {
  name: "CardExercise",
  props: {
    id: Number,
    img: String,
    name: String,
    series: Number,
    duracion: Number,
    repeticiones: Number,
    description: String,
    video: String,
  },
  data(){
      return{
        select: false,
      }
  },
  computed:{
      idComputed : function (){
          let idmod = "E" + this.id;
          return idmod;
      },
      idComputed2 : function (){
          let idmod = "E" + this.id +"M";
          return idmod;
      }
  },
  methods: {
    selectCard(){
        if(this.select){
            this.select = false
        }else{
            this.select = true;
        } 
    },
    showModal(index){
        let newIndex = index + "M";
        let object = document.querySelector(`#${newIndex}`)
        object.style.right = "2.5%";
    },
    dontShowModal(index){
        let object = document.querySelector(`#${index}`)
        console.log(object)
        object.style.right = "-100%";
    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');

.card-exercise{
    width: 95%;
    margin-left: 2.5%;
    color: white;
    display: flex;
    height: 160px;
    border-radius: 20px;
    font-family: 'Dosis', sans-serif;
    box-shadow: 0px 10px 15px black;
    margin-bottom: 20px;
}
.card-active{
    background-color : #685BF8;
}
.card-deactive{
    background-color : #151515;
}
.izq-card-content{
    width: 45%;
}
.der-card-content{
    width: 55%;
}
.izq-card-content img{
    width:100%;
    height: 160px;
    object-fit: cover;
    border-radius: 20px 0px 0px 20px;
}
.der-card-content h2{
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
    margin-left: 20px;
    margin-right: 40px;
    margin-top: 15px;
}

.der-card-content li{
    text-align: left;
}
.der-card-content i{
    position: relative;
    top: -120px;
    right: -80px;
    font-size: 1.5rem;
}

.modal-exercise{
    position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;
    right: -100%;
    top: 71px;
    width: 95%;
    height:85vh;
    background-color: #202020;
    color: white;
}

.modal-exercise i{
    position: absolute;
    top: 15px;
    font-size:3rem;
    color: #151515;
    right: 15px;
}


.modal-exercise img{
    width: 101%;
    height:230px;
    padding: 0;
    margin:0;
    object-fit: cover;
}

.modal-exercise .modal-body{
    width:85%;
    margin: 20px auto;
    padding: 15px;
    background-color: #252525;
    border-radius: 20px;

}
.img-shadow{
    width:100%;
    height:240px;
    position: absolute;
    transform: translateY(-240px);
    background: linear-gradient(0deg, rgba(32,32,32,1) 0%, rgba(255,255,255,0) 100%, rgba(2,0,36,1) 255%);
}

.modal-exercise h3{
    text-transform: uppercase;
    font-size: 1.5rem;
}

.modal-exercise video{
    width: 95%;
    border-radius: 10px;
}
</style>