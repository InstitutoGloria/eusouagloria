<template>
    <div id="projects">
        <div class="our-projects">
            <v-btn x-large outlined elevation="24" class="button">
                {{$t('about_page.projects.button') }}
            </v-btn>
        </div>
        <div class="projects">
            <div class="row">
                    <div class="col-md-12">
                    <div v-if="!isMobile" id="carousel-home-resources" class="carousel-home-resources" >
                        <carousel-3d 
                                    :perspective="0"
                                    :border="0"
                                    :width="650"
                                    :height="370"
                                    :controls-visible="true"
                                    :space="0"
                                    :inverseScaling="700"
                                    :display=2
                                    :clickable="true">

                            <slide v-for="(item,index) in slides" :index="index" :key="index">
                                <v-row style="align-content:end;">
                                    <v-col style="align-self:end" cols="3">
                                        <figcaption class="theme">{{$t(item.theme) }}</figcaption>
                                        <figcaption class="subtitle">{{$t(item.title) }}</figcaption>
                                        <figcaption class="button text-no-wrap">{{$t(item.button) }}</figcaption>
                                    </v-col>
                                    <v-col cols="12">
                                        <img style="position:absolute; right:0;bottom:0; width:80%" :src="item.img" />
                                    </v-col>
                                </v-row>
                            </slide>
                        </carousel-3d>
                    </div>

                    <div v-else class="carousel-home-resources-mobile" >
                        <carousel-3d 
                                    :controls-prev-html="'&#10092; '"
                                    :controls-next-html="'&#10093;'" 
                                    :controls-width="30"
                                    :controls-height="60"
                                    :controls-visible="true"
                                    :clickable="true">

                        <slide v-for="(item,index) in slides" :index="index" :key="index">
                            <figure>
                                <img :src="item.img" />
                                <figcaption class="mobile-title">{{$t(item.title) }}</figcaption>
                            </figure>
                        </slide>

                        </carousel-3d>
                    </div>
                    </div>
            </div>
        </div>
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
            isMobile: false,
            slides:[
                {
                    theme: 'home_page.projects.convida.theme',
                    title: 'home_page.projects.convida.title',
                    button: 'home_page.projects.button',
                    img: 'https://loremflickr.com/585/370/paris/?random=1',
                },
                {
                    theme: 'home_page.projects.game.theme',
                    title: 'home_page.projects.game.title',
                    button: 'home_page.projects.button',
                    img: 'https://loremflickr.com/585/370/paris/?random=2',
                },
                {
                    theme: 'home_page.projects.steam.theme',
                    title: 'home_page.projects.steam.title',
                    button: 'home_page.projects.button',
                    img: 'https://loremflickr.com/585/370/paris/?random=3',
                },
            ]
        }
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },
    methods:{
        onResize() {
            this.isMobile = window.innerWidth < 930;
        },
    }
}
</script>

<style scoped>
#projects{
    padding-top: 5%;
    padding-bottom: 5%;
    text-align: center;
}
.button{
    color: #853A94;
    font-weight: 700;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 30px;
}
.carousel-3d-slide.current{
    background-color: transparent;
}
.carousel-3d-container figcaption.subtitle{
    font-size: 24px;
    margin: 0;
    max-width: 15%;
    line-height: 1;
    position: absolute;
    bottom:10%;
    left:0;
}
.carousel-3d-container figcaption.subtitle-big{
    font-size: 24px;
    margin: 0;
    max-width: 23%;
    line-height: 1;
    position: absolute;
    bottom:10%;
    left:0;
}
.carousel-3d-container figcaption.theme{
    font-size: 10px;
    margin: 0;

    
    position: absolute;
    bottom:23%;
    left:0;
   
}
.carousel-3d-container figcaption.button{
    color: #FF473A;
    font-family: 'Montserrat',sans-serif;
    background-color: transparent;
   
    position: absolute;
    bottom:5%;
    left:0;
}
</style>