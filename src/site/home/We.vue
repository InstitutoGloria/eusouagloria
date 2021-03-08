<template>
    <div class="home">
        <v-container class="container text-center">
            <p class="title">{{$t('home_page.we.title') }}</p>
            <div class="content">
            <p class=" text-justify">
               {{$t('home_page.we.description') }}
            </p>
            </div>
            <v-btn outlined class="button">{{$t('home_page.we.button') }}</v-btn>
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
.button{
    color: #853A94;
    font-weight: 700;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 30px;
}

</style>