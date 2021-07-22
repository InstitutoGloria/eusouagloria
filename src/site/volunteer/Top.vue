<template>
    <div :class="{'volunteer-top-small': $vuetify.breakpoint. smAndDown, 'volunteer-top': $vuetify.breakpoint. mdAndUp}">
        <div :class="{'hero-img-small': $vuetify.breakpoint. smAndDown, 'hero-img': $vuetify.breakpoint. mdAndUp}">
            <p class="hero-title">{{ $t("volunteer_page.title") }}</p><br>
            <p :class="{'hero-tag-small': $vuetify.breakpoint. smAndDown, 'hero-tag': $vuetify.breakpoint. mdAndUp}">{{ $t("volunteer_page.tagline") }}</p>
            <v-btn 
                width="20%" 
                height="12%" 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeMA_xB2I1H-uBigevs8MmDKgoMv5aMxVS3ZVDeYfgwHxZR8A/viewform?usp=sf_link"
                target="blank"
                :class="{'donation-button-home-small': 
                    $vuetify.breakpoint. smAndDown, 'button-home-md': 
                    $vuetify.breakpoint. md, 'button-home': 
                    $vuetify.breakpoint. lgAndUp}"
                @click="redirectToForm()">
                {{$t('volunteer_page.top.button') }}
            </v-btn>
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
    },
    methods:{
    }
}
</script>
<style scoped>
.volunteer-top{
    height: 70vh;
    margin-bottom: 10%;
}

.volunteer-top-small{
    height: 40vh;
}

.hero-img{
    background-image: url(../../assets/images/home/hero.png);
    height: 90vh;
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
    font-size: 24pt;
    margin-top: 5%;
}

.button-home{
    color: #853A94!important;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 35px;
    font-weight: 800;
    font-size: 16pt;
    width: 43%;
    height: 5%;
    border: 3px solid #853A94;

}

.button-home-md{
    color: #853A94!important;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 35px;
    font-weight: 800;
    font-size: 16pt;
    width: 43%;
    height: 5%;
    border: 3px solid #853A94;

}

.donation-button-home-small{
    color: #853A94!important;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 30px;
    font-weight: 600;
    font-size: 10pt;
    width: 50%;
    height: 5%;
    border: 3px solid #853A94;

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