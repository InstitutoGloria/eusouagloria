<template>
    <div :class="{'home-home-small': $vuetify.breakpoint. smAndDown, 'home-home': $vuetify.breakpoint. mdAndUp}">
        <div :class="{'hero-img-small': $vuetify.breakpoint. smAndDown, 'hero-img': $vuetify.breakpoint. mdAndUp}">
            <p class="hero-title">{{ $t("home_page.title") }}</p><br>
            <p :class="{'hero-tag-small': $vuetify.breakpoint. smAndDown, 'hero-tag': $vuetify.breakpoint. mdAndUp}">{{ $t("home_page.tagline") }}</p>
            <v-btn :class="{'button-home-small': $vuetify.breakpoint. smAndDown, 'button-home': $vuetify.breakpoint. mdAndUp}"> {{$t('home_page.home.button') }}</v-btn>
        </div>
        <div :class="{'gloriaimg-small': $vuetify.breakpoint. smAndDown, 'gloriaimg': $vuetify.breakpoint. mdAndUp}">
            <v-img height="50vh" contain src="../../assets/images/home/gloria-imagem-removebg-preview.png"/>
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
.home-home{
    height: 110vh;
}
.home-home-small{
    height: 80vh;
}

.gloriaimg{
    position: relative;
    top: -35vh;
}

.gloriaimg-small{
    position: relative;
    top: -10vh;
}

.hero-img{
    background-image: url(../../assets/images/home/hero.png);
    height: 95vh;
    width: 100%;
    background-size: contain;
    text-align: center;
}

.hero-img-small{
    background-image: url(../../assets/images/home/hero.png);
    height: 40vh;
    width: 100%;
    background-size: cover;
    text-align: center;
}

.hero-title{
    font: 900 24px 'Poppins',sans-serif;
    position: relative;
    align-content: center;
    justify-content: center;
    text-align: center;
    margin: 0!important;
    width: 100%;
    padding: 3%;
    color: #FFFFFF;
}
.hero-tag{
    font: 900 52px 'Poppins',sans-serif;
    position: relative;
    align-content: center;
    align-self: center;
    text-align: center;
    width: 100%;
    padding: 0 10%;
    color: #FFFFFF;
}

.hero-tag-small{
    font: 900 20px 'Poppins',sans-serif;
    position: relative;
    align-content: center;
    align-self: center;
    text-align: center;
    width: 100%;
    padding: 0 10%;
    color: #FFFFFF;
}

.button-home{
    color: #853A94!important;
    font-weight: 700;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 30px;
}

.button-home-small{
    color: #853A94!important;
    font-weight: 700;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 30px;
    font-size: 10px;
    margin-bottom: 100px;
}

</style>