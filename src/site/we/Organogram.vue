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
            <div id="carousel-home-resources" class="carousel-home-resources">
                <carousel-3d 
                    :perspective="0"
                    :border="0"
                    :width="250"
                    :controls-visible="true"
                    :space="250"
                    :scaling="0"
                    :display="3"
                    :disable3d="true"
                    :clickable="true">
                <slide v-for="(head,index) in heads " :key="index" :index="head.index">
                    <figcaption class="subtitle">{{$t(`${head.department}`)}}</figcaption>
                    
                    <v-img :src='head.url' />
                </slide>   
                </carousel-3d>  
            
            </div>
                
        </v-container>   
    </div>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d'

export default {
    components: {
        Carousel3d,
        Slide
    }, 
    data(){
        return {
            heads: [
                { department:"we_page.organogram.ceo.department", head: "we_page.organogram.ceo.head", url:"https://loremflickr.com/250/370/paris/?random=1", index:0},
                { department:"we_page.organogram.business.department", head: "we_page.organogram.business.head", url:"https://loremflickr.com/250/370/paris/?random=8", index:1},
                { department:"we_page.organogram.legal.department", head: "we_page.organogram.legal.head", url:"https://loremflickr.com/250/370/paris/?random=2", index:2},
                { department:"we_page.organogram.tech.department", head: "we_page.organogram.tech.head", url:"https://loremflickr.com/250/370/paris/?random=3", index:3},
                { department:"we_page.organogram.fin.department", head: "we_page.organogram.fin.head", url:"https://loremflickr.com/250/370/paris/?random=4", index:4},
                { department:"we_page.organogram.gov.department", head: "we_page.organogram.gov.head", url:"https://loremflickr.com/250/370/paris/?random=5", index:5},
                { department:"we_page.organogram.proj.department", head: "we_page.organogram.proj.head", url:"https://loremflickr.com/250/370/paris/?random=6", index:6},
                { department:"we_page.organogram.com.department", head: "we_page.organogram.com.head", url:"https://loremflickr.com/250/370/paris/?random=7", index:7},
            ],
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