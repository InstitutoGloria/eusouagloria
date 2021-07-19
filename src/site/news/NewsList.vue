<template>
    <div id="news">
        {{$t('we_page.campaigns.title') }}
        <div class="new" v-for="(i, key) in $t('news_page.news')" :key="key">
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
            web: true
        }
    }
}
</script>

<style scoped>

#news{
    margin-left: 5%;
    margin-right: 5%;
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