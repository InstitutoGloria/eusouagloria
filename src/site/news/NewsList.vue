<template>
    <div id="news">
        <div class="new" v-for="(i, key) in news" :key="key">
            <v-row>
                <v-col xl="2" lg="2" md="2" sm="12" xs="12">
                    <div class="div_img">
                        <v-img
                            max-width="150"
                            class="img"
                            :src="require(`@/assets/images/logos/${i.img}`)"
                        />
                    </div>
                </v-col>
                <v-col xl="8" lg="8" md="8" sm="12" xs="12">
                    <div class="main_title">
                        <span>
                            {{ i.txt }}
                        </span>
                    </div>
                    <div class="icon-retangle"/>
                    <div class="datetime ">
                        <p class="font-weight-thin">
                            {{ i.date }}
                        </p>
                    </div>
                </v-col>
                <v-col xl="2" lg="2" md="2" sm="12" xs="12">
                    <div class="div_button">
                        <v-btn outlined class="button" :href="i.link" target="_blank">{{$t('news_page.button') }}</v-btn>
                    </div>
                </v-col>
            </v-row>
            <div class="divider">
                <v-divider/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            web: true,
            news: [
                { img: "logo-brand-camara-mobile.png", txt: "A embaixadora da WEAmericas, Cristina Castro Lucas, inaugurou o ciclo de palestras da CMulher no ano de 2019", date: "04/04/2019", link: "https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/comissao-de-defesa-dos-direitos-da-mulher-cmulher/noticias/a-embaixadora-da-weamericas-cristina-castro-lucas-inaugurou-o-ciclo-de-palestras-da-cmulher-no-ano-de-2019", video:false },
                { img: "600px-Seal_of_the_United_States_Department_of_State.png", txt: "Empowered Women Empower Others", date: "17/12/2019", link: "https://www.state.gov/empowered-women-empower-others/", video:false },
                { img: "gdf.svg", txt: "Teleatendimento em saúde para 5 unidades de acolhimento", date: "19/05/2020", link: "https://www.agenciabrasilia.df.gov.br/2020/05/19/teleatendimento-em-saude-para-5-unidades-de-acolhimento/", video:false },
                { img: "jbr.png", txt: "GDF lança projeto de teleatendimento em saúde para 5 unidades de acolhimento", date: "18/05/2020", link: "https://jornaldebrasilia.com.br/cidades/gdf-lanca-projeto-de-teleatendimento-em-saude-para-5-unidades-de-acolhimento/", video:false },
                { img: "itu.png", txt: "Girls and Women Talking Tech - 2020", date: "23/04/2020", link: "https://www.youtube.com/embed/WGEkkZA91VY", video:true },
                { img: "metropoles.png", txt: "Steam Power for Girls: programa incentiva formação de cientistas", date: "28/02/2020", link: "https://www.metropoles.com/colunas-blogs/claudia-meireles/steam-power-for-girls-programa-incentiva-formacao-de-cientistas", video:false },
                { img: "r7-logo.png", txt: "Inteligência artificial ajuda mulheres a denunciarem atos de violência", date: "08/01/2020", link: "https://recordtv.r7.com/fala-brasil/videos/inteligencia-artificial-ajuda-mulheres-a-denunciarem-atos-de-violencia-08012020", video:false },
                { img: "gdf.svg", txt: "Secretaria da Mulher recebe delegações africanas para discutir proteção feminina", date: "04/12/2019", link: "https://agenciabrasilia.df.gov.br/2019/12/04/secretaria-da-mulher-recebe-delegacoes-africanas-para-discutir-protecao-feminina/", video:false },
                { img: "logo_cb.png", txt: "Com vocês, Glória!", date: "17/10/2019", link: "https://www.camara.leg.br/noticias/600828-camara-homenageia-cinco-mulheres-com-diploma-mulher-cidada-carlota-pereira-de-queiros", video:false },
                { img: "logo-brand-camara-mobile.png", txt: "Câmara homenageia cinco mulheres com diploma Mulher-Cidadã Carlota Pereira de Queirós", date: "17/10/2019", link: "https://www.camara.leg.br/noticias/600828-camara-homenageia-cinco-mulheres-com-diploma-mulher-cidada-carlota-pereira-de-queiros", video:false },
                { img: "band.png", txt: "Band Cidade 2ª Edição", date: "26/11/2019", link: "https://www.youtube.com/watch?v=9vyXW5hD-oA&feature=youtu.be", video:false },
                { img: "logo_cb.png", txt: "Evento no DF debate feminicídio, machismo e educação", date: "19/10/2019", link: "https://www.correiobraziliense.com.br/app/noticia/cidades/2019/10/19/interna_cidadesdf,799112/evento-no-df-debate-feminicidio-machismo-e-educacao.shtml", video:false },
                { img: "itu.png", txt: "Câmara homenageia cinco mulheres com diploma Mulher-Cidadã Carlota Pereira de Queirós", date: "23/04/2019", link: "https://www.camara.leg.br/noticias/600828-camara-homenageia-cinco-mulheres-com-diploma-mulher-cidada-carlota-pereira-de-queiros", video:false },
                { img: "itu.png", txt: "Startups e movimentos de acolhimento à mulher lançam avatar “Glória” para atendimento de vítimas de violência", date: "23/04/2019", link: "https://www.cineplaneta.com.br/startups-e-movimentos-de-acolhimento-a-mulher-lancam-avatar-gloria/", video:false },
                { img: "itu.png", txt: "Plataforma para combater violência doméstica é lançada na Câmara", date: "23/04/2020", link: "https://odocumento.com.br/plataforma-para-combater-violencia-domestica-e-lancada-na-camara/", video:false },
                { img: "itu.png", txt: "Plataforma para combater violência doméstica é lançada na Câmara", date: "24/04/2020", link: "https://www.i9treinamentos.com/plataforma-para-combater-violencia-domestica-e-lancada-na-camara/", video:false },
                { img: "chumbogrosso.png", txt: "“Projeto Glória” – Plataforma para combater violência doméstica é lançada na Câmara", date: "24/04/2020", link: "https://chumbogrossomanaus.com.br/policia/projeto-gloria-plataforma-para-combater-violencia-domestica-e-lancada-na-camara/", video:false },
                { img: "itu.png", txt: "Plataforma para combater violência doméstica é lançada na Câmara", date: "23/04/2020", link: "https://www.jj.com.br/brasil-e-mundo/plataforma-para-combater-violencia-domestica-e-lancada-na-camara/", video:false },
                { img: "itu.png", txt: "Plataforma para combater violência doméstica é lançada na Câmara", date: "23/04/2020", link: "https://www.hojeemdia.com.br/primeiro-plano/plataforma-para-combater-viol%C3%AAncia-dom%C3%A9stica-%C3%A9-lan%C3%A7ada-na-c%C3%A2mara-1.709423/projeto-gl%C3%B3ria-1.709426", video:false },
                { img: "itu.png", txt: "Câmara lança inteligência artificial para combater violência doméstica", date: "24/04/2020", link: "http://www.jornalroraimahoje.com.br/index.php/geral/tecnologia/6958-plataforma-para-combater-violencia-domestica-e-lancada-na-camara", video:false },
                { img: "otempo.png", txt: "Plataforma para combater violência doméstica é lançada na Câmara", date: "23/04/2020", link: "https://www.otempo.com.br/politica/plataforma-para-combater-violencia-domestica-e-lancada-na-camara-1.2172086", video:false },
                { img: "diario_digital.png", txt: "Plataforma para combater violência doméstica é lançada na Câmara", date: "23/04/2020", link: "http://www.diariodigital.com.br/geral/plataforma-para-combater-violencia-domestica-e-lancada-na-camara/182008/", video:false },
                { img: "agencia_radio.png", txt: "Robô com inteligência artificial vai auxiliar no combate à violência contra a mulher", date: "23/04/2020", link: "https://www.agenciadoradio.com.br/noticias/robo-com-inteligencia-artificial-vai-auxiliar-no-combate-a-violencia-contra-a-mulher-pran197060", video:false },
                { img: "otempo.png", txt: "Glória: projeto de plataforma de inteligência artificial voltada para o combate à violência contra a mulher", date: "21/05/2019", link: "https://brasilpaisdigital.com.br/gloria-projeto-de-plataforma-de-inteligencia-artificial-voltada-para-o-combate-a-violencia-contra-a-mulher/", video:false },
                { img: "otempo.png", txt: "Saiba como Inteligência Artificial pode ajudar os seres humanos", date: "24/06/2019", link: "https://www.agenciadoradio.com.br/noticias/especial-saiba-como-inteligencia-artificial-pode-ajudar-os-seres-humanos-pran197464", video:false },
                { img: "g1_logo.png", txt: "Grupo ajuda no combate à violência contra a mulher", date: "28/09/2019", link: "https://g1.globo.com/df/distrito-federal/edicao/2019/09/28/videos-df1-de-sabado-28-de-setembro.ghtml#video-7958739-id", video:false },
                { img: "olhares.png", txt: "Olhares Podcast: Ep #056 Mulheres e tecnologia", date: "05/03/2020", link: "http://olharespodcast.com.br/ep-056-mulheres-e-tecnologia/", video:false },
            ]
        }
    }
}
</script>

<style scoped>

#news{
    margin-left: 5%;
    margin-right: 5%;
}

.new{
}

.divider{
    margin-top: 3%;
    margin-bottom: 3%;
}

.main_title{
    font-family: 'Pangram',sans-serif!important;
    font-weight: 900;
    font-size: 22px;
    line-height: 26.4px;
}

.datetime{
    font-family: 'Pangram',sans-serif!important;
}

.div_button{
    text-align: center;
}

.div_img{
    align-content: center;
    text-align: center;
}

.img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
}

.button{
    color: #853A94;
    font-weight: 700;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    width: 100%;
}

.icon-retangle{
    margin-top: 1%;
    margin-bottom: 2%;
    height: 3px;
    width: 30px;
    background-color: #853A94;
}
</style>