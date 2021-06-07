<template>
    <div class="description">
        <div class="main-title">
            <span>
                coração - 
            </span>
            <span>
                Nossos Projetos
            </span>
        </div>
        <div class="subtitle font-weight-light">
            <span>
                {{ text }}
            </span>
        </div><br>
        <v-divider class="subtitle"/>
    </div>
</template>

<script>
export default {
    name: "description",
    data(){
        return {
            text: "Coletamos dados através de todos os projetos desenvolvidos pelo Instituto Glória. De formas diversas buscamos, constantemente, analisar predições de comportamentos relacionados à violência de gênero"
        }
    }
}
</script>

<style>
.description .main-title{
    font-family: 'Poppins';
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    padding-top: 3%;
    padding-bottom: 3%;
}

.description .subtitle {
    margin-right: 15%;
    margin-left: 15%;
    font-family: 'Montserrat';
    color: #737373;
    size: 24px;
}
</style>