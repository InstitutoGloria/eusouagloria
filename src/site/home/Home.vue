<template>
    <div :class="{'home-home-small': $vuetify.breakpoint. smAndDown, 'home-home': $vuetify.breakpoint. mdAndUp}">
        <div :class="{'hero-img-small': $vuetify.breakpoint. smAndDown, 'hero-img': $vuetify.breakpoint. mdAndUp}">
            <p class="hero-title">{{ $t("home_page.title") }}</p><br>
            <p :class="{'hero-tag-small': $vuetify.breakpoint. smAndDown, 'hero-tag': $vuetify.breakpoint. mdAndUp}">{{ $t("home_page.tagline") }}</p>
            <button width="20%" height="12%" :class="{'donation-button-home-small': $vuetify.breakpoint. smAndDown, 'button-home-md': $vuetify.breakpoint. md, 'button-home': $vuetify.breakpoint. lgAndUp}">
                {{$t('home_page.home.button') }}
            </button>
        </div>

        <div>
            <v-img  
            :class="{'gloriaimg-small': $vuetify.breakpoint. smAndDown, 'gloriaimg-md': $vuetify.breakpoint. md, 'gloriaimg': $vuetify.breakpoint. lgAndUp}"
            src="../../assets/images/home/gloria-imagem-removebg-preview.png"
            contain
            />   
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
<style scoped>
.home-home{
    height: 110vh;
    margin-bottom: 10%;
}

.home-home-small{
    height: 80vh;
}

.gloriaimg{
    align-self: center;
    position: relative;
    top: -40vh;
    height: 80vh;
}

.gloriaimg-md{
    align-self: center;
    position: relative;
    top: -50vh; 
    height: 75vh;
}

.gloriaimg-small{
    align-self: center;
    position: relative;
    top: -10vh;
    height: 50vh;
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

.button-home-text{
    color: #853A94!important;
    font-weight: 800;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 30px;
    font-size: 230%;
    margin-top: 5%;
}

.button-home{
    color: #853A94!important;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 35px;
    font-weight: 800;
    font-size: 180%;
    width: 16%;
    height: 9%;
}

.button-home-md{
    color: #853A94!important;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 35px;
    font-weight: 800;
    font-size: 130%;
    width: 16%;
    height: 9%;
}

.donation-button-home-small{
    color: #853A94!important;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 30px;
    font-weight: 600;
    font-size: 20px;
    width: 50%;
    height: 11%;
}

button.button-home:hover, button.donation-button-home-small:hover, p.button-home-text:hover{
    background-color: rgba(255, 255, 255, 0.900);
    transition-delay: 0.01s;
}

button.button-home:active, button.donation-button-home-small:active, p.button-home-text:active{
    background-color: rgba(255, 255, 255, 0.700);
    transition-delay: 0.01s;
}

</style>