<template>
    <div class="home">
       <v-container class="container">
            <p class="font-title text-center">{{$t('home_page.projects.title') }}</p>
                <div class="row">
                    <div class="col-md-12">
                    <div id="carousel-home-resources" class="carousel-home-resources">
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

                        <slide :index="0">
                          <v-row style="align-content:end;">
                            <v-col style="align-self:end" cols="3">
                                <figcaption class="theme">{{$t('home_page.projects.convida.theme') }}</figcaption>
                                <figcaption class="subtitle">{{$t('home_page.projects.convida.title') }}</figcaption>
                                <figcaption class="button text-no-wrap">{{$t('home_page.projects.button') }}</figcaption>
                            </v-col>
                             <v-col cols="12">
                                <img style="position:absolute; right:0;bottom:0; width:80%" src="https://loremflickr.com/585/370/paris/?random=1" />
                            </v-col>
                          </v-row>
                        </slide>

                        <slide :index="1">
                            <v-row style="align-content:end;">
                            <v-col style="align-self:end" cols="3">
                                <figcaption class="theme">{{$t('home_page.projects.game.theme') }}</figcaption>
                                <figcaption class="subtitle-big">{{$t('home_page.projects.game.title') }}</figcaption>
                                <figcaption class="button text-no-wrap">{{$t('home_page.projects.button') }}</figcaption>
                            </v-col>
                             <v-col cols="12">
                                <img style="position:absolute; right:0;bottom:0; width:80%" src="https://loremflickr.com/585/370/paris/?random=2" />
                            </v-col>
                          </v-row>
                        </slide>

                        <slide :index="2">
                            <v-row style="align-content:end;">
                            <v-col style="align-self:end" cols="3">
                                <figcaption class="theme">{{$t('home_page.projects.steam.theme') }}</figcaption>
                                <figcaption class="subtitle">{{$t('home_page.projects.steam.title') }}</figcaption>
                                <figcaption class="button text-no-wrap">{{$t('home_page.projects.button') }}</figcaption>
                            </v-col>
                             <v-col cols="12">
                                <img style="position:absolute; right:0;bottom:0; width:80%" src="https://loremflickr.com/585/370/paris/?random=3" />
                            </v-col>
                          </v-row>
                        </slide>

                        </carousel-3d>
                    </div>
                    </div>
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

        }
    }
}
</script>

<style scoped>
.home{
    background-color: #FFFFFF;
    padding-left: 10%;
    padding-right: 10%;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0px 5px 5px rgba(128, 128, 128, 0.52);
}
.container{
    display: flexbox;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: center;

    font-family: 'Montserrat',sans-serif;
    font-weight: 400;
}
.title{
    color: #000000;
    font-weight: 600;
    padding-bottom: 10px;

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
.content{
    font-weight: 500;
    font-family: 'Montserrat',sans-serif;
    
    margin: auto;
    height: fit-content;

    text-align: justify;
    text-justify: inter-cluster;
}



</style>