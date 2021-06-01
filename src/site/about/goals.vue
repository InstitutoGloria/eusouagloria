<template>
    <div id="goals">
        <v-container>
            <v-row>
                <v-col xl="6" lg="6" md="6" sm="6" xs="12" class="first-col">
                    <div class="img-container">
                        <img contain width="400" src="@/assets/images/meta-20milhoes.png"/>
                    </div>
                </v-col>
                <v-col xl="6" lg="6" md="6" sm="6" xs="12">
                    <div class="main-text">
                        <span class="title-goals font-weight-bold"> <b>{{title}}</b> </span><br>
                        <div class="icon-retangle"/>
                        <span class="text-goals">{{text}}</span>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: "Em 2 anos, queremos que a Glória esteja no mundo inteiro",
            text: "O objetivo do projeto é impactar mais de 20 milhões de pessoas, além de gerar relatórios com segmentação \
            por faixa etária, local, dados socioeconômicos e padrão de ocorrências, que auxiliem o público na formação de \
            políticas, projetos e ações para combater a violência contra a mulher"
        }
    }
}
</script>

<style scoped>
#goals{
    padding-top: 70px;
    padding-bottom: 70px;
    font-family: 'Poppins', sans-serif;
}

.img-container{
    text-align: center;
}

img{
    text-align: center;
}

.title-goals{
    font-size: 26px;
    padding-right: 30%;
}

.text-goals{
    padding-right: 5%;
    font-size: 12px;
}
.icon-retangle{
    margin-top: 3%;
    margin-bottom: 5%;
    height: 3px;
    width: 30px;
    background-color: #853A94;
}
</style>