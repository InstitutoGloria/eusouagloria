<template>
    <div class="partners">
        <div class="title text-center">
            <span class="font-title">{{ $t('home_page.partners.title') }}</span>
        </div>
        <div v-if="!isMobile" id="scroll">
            <div class="text-center">
                <v-row align="center" >
                    <v-col align="center" class="p-10" v-for="img in images" :key="img.file">
                        <v-img
                            :src="require(`@/assets/images/parceiros/${img.file}`)"
                            contain
                            :height="img.height"
                            :width="img.width"
                        >
                        </v-img>
                    </v-col>
                </v-row>
            </div>
        </div>
        <div v-else class="carousel-home-resources-mobile" >
            <carousel-3d 
                        :autoplay="true"
                        :autoplay-timeout="3000"
                        :controls-prev-html="'&#10092; '"
                        :controls-next-html="'&#10093;'" 
                        :controls-width="30"
                        :controls-height="60"
                        :controls-visible="false"
                        :clickable="true">

            <slide class="carousel-home-mobile" v-for="(item,index) in images" :index="index" :key="index">
                <v-col cols="12">
                    <figure class="carousel-home-mobile">
                        <v-img 
                            :src="require(`@/assets/images/parceiros/${item.file}`)"
                            :height="item.height"
                            :width="item.width"
                            contain
                        />
                        <!-- <img src="@/assets/images/parceiros/embassy.png" /> -->
                        <!-- <figcaption class="mobile-title">{{$t(item.title) }}</figcaption> -->
                    </figure>
                </v-col>
                
            </slide>

            </carousel-3d>
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
            images: [
                //main ones height 120 (we and bf are too small 150)
                { file: "embassy.png" ,height: "100px", width: "200px"},
                { file: "demarest.webp" ,height: "100px", width: "200px"},
                { file: "unb.svg" ,height: "100px", width: "200px"},
                { file: "microsoft.png" ,height: "100px", width: "200px"},
                { file: "ibm.png" ,height: "100px", width: "150px"},
                { file: "weamericas.png" ,height: "100px", width: "200px"},
                { file: "blockforce.svg" ,height: "130px", width: "200px"},
                
                //second tier 100
                { file: "qubo.svg" ,height: "100px", width: "200px"},
                { file: "ambev_voa.png" ,height: "130px", width: "200px"},
                // { file: "cosmobots.png" ,height: "100px", width: "200px"},
                { file: "mlabs.png" ,height: "150px", width: "200px"},

                //third tier height 75(demarest too big 50)
                { file: "ink.png" ,height: "100px", width: "200px"},
                { file: "brasscom.png" ,height: "100px", width: "200px"},
                { file: "caravela.png" ,height: "100px", width: "200px"},
                { file: "handtalk.png" ,height: "150px", width: "200px"},
                { file: "AD&M.png" ,height: "130px", width: "200px"},
                { file: "cnpq.jpg" ,height: "100px", width: "200px"},
                { file: "logo_genesys.png" ,height: "130px", width: "200px"},
                { file: "ddd.png" ,height: "100px", width: "200px"},                
                { file: "TechSoup.jpg" ,height: "100px", width: "200px"},

                { file: "pactoglobal.jpg" ,height: "100px", width: "200px"},

                // { file: "freefree.png" },
                // { file: "seedin.png" },
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.carousel-home-mobile{
    background-color: white;
    display: flex;
    align-items: center;
}

.partners{
    padding-left: 4%;
    padding-right: 4%;
}

.title{
    padding-top: 3%;
    padding-bottom: 4%;
}

img{
    padding: 8px 8px 8px 8px
}

.img{
    float: left;
    widows: 33.33%;
    padding: 5px;
}

.image{
    vertical-align: middle;
    text-align: center;
    margin: 1em 0;
}

.partners{
    padding-top: 2%;
    padding-bottom: 3%;
}

</style>