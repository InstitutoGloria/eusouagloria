<template>
    <div id="manifest">
        <v-row v-if="!isMobile" class="">
            <v-col xl="6" lg="6" md="6" sm="6" xs="6">
                <div id="video">
                    <iframe 
                        class="video-container"
                        width="350"
                        src="https://www.youtube.com/embed/zcxTR6wOFoE" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen/>
                </div>
            </v-col>
            <v-col xl="6" lg="6" md="6" sm="6" xs="6">
                <div class="main-text">
                    <span class="title-manifest font-weight-bold">{{title}}</span><br>
                    <span class="text-manifest font-weight-thin">{{text}}</span>
                </div>
            </v-col>
        </v-row>
        <v-col v-else>
            <v-row xl="6" lg="6" md="6" sm="6" xs="6">
                <div id="video">
                    <iframe 
                        class="video-container"
                        width="350"
                        src="https://www.youtube.com/embed/zcxTR6wOFoE" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen/>
                </div>
            </v-row>
            <v-row xl="6" lg="6" md="6" sm="6" xs="6">
                <div class="main-text">
                    <span class="title-manifest font-weight-bold">{{title}}</span><br>
                    <span class="text-manifest font-weight-thin">{{text}}</span>
                </div>
            </v-row>
        </v-col>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isMobile: false,
            title: "Conheça o nosso manifesto!",
            text: "Loren ipsum dolor sit amet, consectetur adipiscing elit. sed at risus neque. cras sit emet ligula ut justo"
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
#manifest{
    background-color: #C9EBFF;
    padding-left: 10%;
    padding-right: 10%;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0px 5px 5px rgba(128, 128, 128, 0.52);
    padding-top: 3%;
    padding-bottom: 3%;
}

#video{
    text-align: center;
}

.video-container{
    max-width: 100%;
    height: auto;
    padding: 5px;
    background-color: white;
}

.main-text {
    padding-top: 5%;
    font-family: 'Poppins', sans-serif;
}

.main-text .title-manifest{
    font-size: 25px;
}

.main-text .text-manifest{
    font-size: 17px;
}

</style>