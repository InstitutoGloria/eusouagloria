<template>
    <div id="HomePageData">
        <div>
            <v-row class="h_grid" v-for="(item,index) in content" :key="index">
                <v-col xl="4" md="4" sm="12">
                    {{item.img}}
                </v-col>
                <v-col xl="4" md="4" sm="12">
                    {{item.text}} <br>
                    {{item.button}}
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
            content:[
                {
                    img: "IMAGEM",
                    text: "TEXT",
                    button: "BOTÃO",
                    number: "NUMERO QUALQUER",
                    second_text: "SEGUNDO TEXTO",
                },
                {
                    img: "IMAGEM",
                    text: "TEXT",
                    button: "BOTÃO",
                    number: "NUMERO QUALQUER",
                    second_text: "SEGUNDO TEXTO",
                },
                {
                    img: "IMAGEM",
                    text: "TEXT",
                    button: "BOTÃO",
                    number: "NUMERO QUALQUER",
                    second_text: "SEGUNDO TEXTO",
                },
            ],
        }
    },

    methods:{

    }
}


</script>

<style scoped>

.h_grid{
    text-align: center;
}

</style>