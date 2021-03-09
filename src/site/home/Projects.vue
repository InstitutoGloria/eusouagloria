<template>
    <div class="home">
       <v-container class="container">
            <p class="title text-center">{{$t('home_page.projects.title') }}</p>
            <div class="content">
                <div class="containe">
                    <v-row>
                        <v-col style="align-self:end" cols="1">
                            <p class="theme">{{$t('home_page.projects.convida.theme') }}</p>
                            <p class="subtitle">{{$t('home_page.projects.convida.title') }}</p>
                            <v-btn text class="button">{{$t('home_page.projects.button') }}</v-btn>
                        </v-col>

                        <v-col cols="10" md="8">
                            <img
                                src="https://via.placeholder.com/650x350"
                            >
                        </v-col>
                </v-row>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>

export default {
   
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
.subtitle{
    font-size: 24px;
    margin: 0;
}
.theme{
    font-size: 10px;
    margin: 0;
}
.content{
    font-weight: 500;
    font-family: 'Montserrat',sans-serif;
    
    margin: auto;
    height: fit-content;

    text-align: justify;
    text-justify: inter-cluster;
}
.button{
    color: #FF473A;
    font-family: 'Montserrat',sans-serif;
    background-color: transparent;
   
}

</style>