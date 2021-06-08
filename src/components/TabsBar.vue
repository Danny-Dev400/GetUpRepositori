<template>
    <div class="tabs-container">
        <div class="tabs" @click="goToExcercises()">
            <i class="fas fa-dumbbell"></i>
            <h6>ejercicios</h6>
        </div>
        <div class="tabs">
            <i class="far fa-calendar-alt"  @click="goToRutines()"></i>
            <h6>rutinas</h6>
        </div>
        <div class="tabs">
            <i class="fas fa-chart-line" @click="goToCharts()"></i>
            <h6>estadisticas</h6>
        </div>
        <div class="tabs">
            <i class="fas fa-bell" @click="goToRemembers()"></i>
            <h6>recordatorios</h6>
        </div>
        <div class="tabs" @click="goToLogin()">
            <i class="fas fa-user"></i>
            <h6>Perfil</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabsBar',
    methods:{
        goToExcercises(){
            this.$router.push('/Exercise')
        },
        goToRutines(){
            this.$router.push('/Routines')
        },
        goToCharts(){
            this.$router.push('/Estadistics')
        },
        goToRemembers(){
            this.$router.push('/Notifications')
        },
        goToLogin(){
            this.$router.push('/Profile')
        },
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');

.tabs-container{
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: #685bf8;
    bottom: 0;
    left: 0;
    display:  flex;
}

.tabs{
    width: 20%;
    height:100%;
}

.tabs i{
    font-size: 1.5rem;
    margin: 5px auto;
    margin-top: 8px;
    color: #111111;
    height: 50%;
}

.tabs h6{
    font-family: 'Dosis', sans-serif;
    color: white;
    font-size: 0.6rem;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
}

</style>
