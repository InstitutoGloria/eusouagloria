<template>
    <div class="home">
        <div class="hero-img">
            <v-img src="../../assets/images/home/hero.png"></v-img>
            <p class="hero-title ">{{ $t("home_page.title") }}</p><br>
            <p class="hero-tag ">{{ $t("home_page.tagline") }}</p>
        <div class="hero-container">
            <v-img 
                src="../../assets/images/home/gloria-imagem-removebg-preview.png"/>
        </div>
        </div>
    </div>
   
</template>

<script>
export default {
    components:{
      
    },
    data(){
        return {

        }
    }
}
</script>
<style>
.hero-container{
    height:fit-content;
    position: absolute;
    top: 580px;
    left: 34.25%;
}
.hero-img{
    margin-bottom: 25%;
}
.hero-title{
    font: 700 24px 'Poppins',sans-serif;
    position: absolute;
    top: 8%;
    
    left: 45%;
    width: 60%;
    color: #FFFFFF;
}
.hero-tag{
    font: 700 52px 'Poppins',sans-serif;
    position: absolute;
    top: 12%;
    left: 25%;
    width: 60%;

    color: #FFFFFF;
}
</style>