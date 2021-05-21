<template>
    <div id="platform">
        <v-row>
            <v-col xl="6" lg="6" md="6" sm="6" xs="12" id="first-col">
                <div class="main-text">
                    <span class="font-weight-thin"> A plataforma </span><br>
                    <span class="font-weight-bold"> O CÍRCULO DE OURO </span>
                </div>
                <div class="icon-retangle"/>
                <div class="topics">
                    <span class="item"> {{ first }} </span><br><br>
                    <span class="item"> {{ second }} </span><br><br>
                    <span class="item"> {{ third }} </span>
                </div>
            </v-col>
            <v-col xl="6" lg="6" md="6" sm="6" xs="12" id="second-col">
                <div class="imagem">
                    <v-img
                        contain
                        width="400"
                        src="@/assets/images/circulo.png"
                    />
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            first: "1 - A glória nasceu com o ideal de reduzir (e, por que não, combater) a opressão e violência física, psicológica e sexual contra mulheres",
            second: "2 - A partir da coleta de dados, geramos conteúdo educacional e criamos uma rede de apoio com as ferramentas necessárias para a melhoria social",
            third: "3 - Uma plataforma segura e de fácil acesso para mulheres em situação de vulnerabilidade e repressão"
        }
    }
}
</script>

<style scoped>
#platform{
    font-family: 'Poppins', sans-serif;
    margin-bottom: 50px;
    margin-top: 5%;
    margin-bottom: 5%;
}

#first-col{
    padding-left: 10%;
}
.imagem{
    padding-left: 10%;
    padding-right: 10%;
    align-content: center;
    text-align: center;
}
.main-text{
    font-size: 30px;
    text-align: left;
}

.icon-retangle{
    margin-top: 3%;
    margin-bottom: 5%;
    height: 3px;
    width: 30px;
    background-color: #853A94;
}

/* span::before{
    content: attr(data-text);
    background: black;
    padding: 1px 8px;
} */

span span::before{
    content: "\A";
}

</style>