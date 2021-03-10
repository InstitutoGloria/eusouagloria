<template>
    <div id="HomePageData">
        <div>
            <v-row align="center" class="h_grid" v-for="(item,index) in content" :key="index">
                <v-col xl="4" md="4" sm="12">
                    <v-img :src="require(`@/assets/${item.img}`)"> </v-img>
                </v-col>
                <v-col xl="4" md="4" sm="12">
                    {{item.text}} <br>
                    <v-btn outlined class="button">{{item.button}}</v-btn>
                    <v-img :src="require(`@/assets/${item.arrow}`)"></v-img>
                    {{counter}}
                </v-col>
                <v-col xl="4" md="4" sm="12">
                    {{item.number}}<br>
                    {{item.second_text}}
                </v-col>
            </v-row>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            counter: 0,
            content:[
                {
                    //img2: "./../../assets/data-1.png",
                    img: "data-1.png",
                    text: "A cada 7.2 segundos, uma mulher é vítima de VIOLÊNCIA FÍSICA.",
                    button: "BOTÃO",
                    arrow: "arrow-right-purple.svg",
                    number: 0,
                    second_text: "MULHERES JÁ FORAM VÍTIMAS DE VIOLÊNCIA FÍSICA HOJE.",
                },
                {
                    img: "data-1.png",
                    text: "TEXT",
                    button: "BOTÃO",
                    arrow: "arrow-right-purple.svg",
                    number: 0,
                    second_text: "SEGUNDO TEXTO",
                },
                {
                    img: "data-1.png",
                    text: "TEXT",
                    button: "BOTÃO",
                    arrow: "arrow-right-purple.svg",
                    number: 0,
                    second_text: "SEGUNDO TEXTO",
                },
            ],
        }
    },
    mounted(){
        setInterval(function(){
             this.counter++
        },1000)
    },
    methods:{
            // self.data4 = Math.floor(diff/1500)
            // setInterval(function(){ 
            // self.data4++
            // }, 1500);

    }
}


</script>

<style scoped>

.h_grid{
    text-align: center;
}
.button{
    color: #853A94;
    background-color: white;
}

</style>