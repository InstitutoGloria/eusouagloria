<template>
    <div class="we">
        <v-container class="container text-center">
            <p class="font-title">{{$t('we_page.organogram.title') }}</p>
            <div :class="{'content-small': $vuetify.breakpoint. smAndDown, 'content': $vuetify.breakpoint. mdAndUp}">
            <p class=" text-justify">
               {{$t('home_page.we.description') }}
            </p>
            </div>
        </v-container>
        <v-divider/>
        <v-container class="container text-center">
            <Team></Team>
        </v-container>   
        <v-divider/>
        <v-container class="container text-center">
            <TeamProj></TeamProj>
        </v-container> 
    </div>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d'
import Team from '../../components/Team'
import TeamProj from '../../components/TeamProj'

export default {
    components: {
        Carousel3d,
        Slide,
        Team,
        TeamProj
    }, 
    data(){
        return {
            
        }
    },
    methods:{
        call_team(name){
            
        }
    }
}
</script>
<style scoped>
.we{
    background-color: #FFFFFF;
    padding-left: 10%;
    padding-right: 10%;
    font-family: 'Poppins', sans-serif;
}
.container{
    display: flexbox;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: center;
    
}
.carousel-home-resources{
    width: 100%;
}
.title{
    color: #000000;
    font-weight: 600;
    padding-bottom: 10px;
}
.content{
    font-weight: 500;
    font-family: 'Montserrat',sans-serif;
    
    margin: auto;
    max-width: 60%;
    height: fit-content;

    text-align: justify;
    text-justify: inter-cluster;
}

.content-small{
    font-weight: 500;
    font-family: 'Montserrat',sans-serif;
    
    margin: auto;
    max-width: 80%;
    height: fit-content;

    text-align: justify;
    text-justify: inter-cluster;
}
.button{
    color: #853A94;
    font-weight: 700;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 30px;
}
.carousel-3d-slide{
    background-color: transparent;
}
.carousel-3d-container figcaption{
    font-size: 24px;
    margin: 0;
    line-height: 1;
    color:rgba(0,0,0,0);
    background-color: rgba(0, 0, 0, 0);
    
}
figcaption:hover{
    font-size: 24px;
    margin: 0;
    line-height: 1;
    color: #000;
    background-color: rgba(0, 0, 0, 0.1);
}
</style>