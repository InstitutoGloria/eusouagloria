<template>
    <div class="projects">
        <v-expansion-panels flat>
            <v-expansion-panel
                v-for="(item,i) in projects"
                :key="i"
            >
            <v-expansion-panel-header>
                <span class="list-title">
                    {{ item.title }}
                </span>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
                <div class="box-images">
                    <div 
                        v-for="img in item.images" 
                        :key="img"
                        class="image">
                    <v-img 
                        
                        max-width="150"
                        src="https://picsum.photos/id/11/500/300"
                    />
                    </div>
                </div>
                <span class="list-description font-weight-light">
                    {{ item.description }}
                </span>
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    name: "projects",
    data(){
        return {
            projects: [
                { title: "Ações Projeto STEAM Power for Girls", images: [ 'logo.png' ], description: "Projeto STEAM Power for Girls" },
                { title: "Rede Convida - Plataforma de Tele Atendimento (2020 até o presente)", images: [ 'logo.png', 'logo2.png' ], description: "Projeto Rede CONVIDA" },
                { title: "Jogo para novos talentos - 'O Mundo de Gloria'", images: [ ], description: "" },
                { title: "Ações Sociais", images: [ ], description: "" },
                { title: "Parecria no levantamento de dados para o Relatório Mundial ONU/Mulheres (2020)", images: [ ], description: "" },
                { title: "Estruturação da Biblioteca Digital da Gloria (BDG) - 2020", images: [ ], description: "" },
                { title: "Vídeos do projeto Gloria", images: [ ], description: "" },
                { title: "Educação Financeira para Meninas de Escolas Públicas", images: [ ], description: "" },
                { title: "Signatário do Pacto Global - ONU", images: [ ], description: "" },
                { title: "TODAS ELAS - Fundação Assis Chateaubriand", images: [ ], description: "" },
                { title: "Programa VOA - Ambev", images: [ ], description: "" },
                { title: "Projeto de empreendedorismo para mulheres que sofreram acidente escalpeladas. UNOPs - MPT", images: [ ], description: "" },
                { title: "Programa de microcrédito com mulheres de Recife", images: [ ], description: "" },
                { title: "Embaixadora Estudantil Gloria", images: [ ], description: "" },
                { title: "Embaixadoras da Rede WEAmericas", images: [ ], description: "" },
                { title: "Mapa de Segurança Gloria - Projeto em busca de financiamento", images: [ ], description: "" },
                { title: "Grupo de Trabalho - Direito da Mulher", images: [ ], description: "" },
                { title: "Grupo de Pesquisa - CULTI/CNPq", images: [ ], description: "" },
                { title: "eBook UMDI", images: [ ], description: "" },

            ]
        }
    }
}
</script>

<style>
.projects{
    margin-right: 10%;
    margin-left: 10%;
}
.list-title{
    color: #843A93;
}
.list-description{
    color: #737373;
    padding-top: 3%;
    padding-left: 2%;
    padding-right: 6%;
    font-size: 14px;
    padding-bottom: 20px;
}
.box-images::after{
    content: "";
    clear: both;
    display: table;
}
.image{
    float: left;
    width: 25.00%;
    padding: 5px;
}

</style>