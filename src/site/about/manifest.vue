<template>
    <div id="manifest">
        <v-row>
            <v-col xl="5" lg="5" md="5" sm="5" xs="12">
                <div id="video">
                    <iframe 
                        class="video-container"
                        width="360" height="38" 
                        src="https://www.youtube.com/embed/zcxTR6wOFoE" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen/>
                </div>
            </v-col>
            <v-col xl="7" lg="7" md="7" sm="7" xs="12">
                <div class="main-text">
                    <span class="title-manifest font-weight-bold">{{title}}</span><br>
                    <span class="text-manifest font-weight-thin">{{text}}</span>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: "Conheça o nosso manifesto!",
            text: "Loren ipsum dolor sit amet, consectetur adipiscing elit. sed at risus neque. cras sit emet ligula ut justo"
        }
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
}

#video{
    text-align: center;
    align-content: center;
}

.video-container{
    max-width: 100%;
    height: auto;
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