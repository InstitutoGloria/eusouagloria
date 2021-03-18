<template>
    <div class="home">
        <div class="container">
            <v-row>
                <v-col cols="8">
                    <span class="title text-h4 mb-3">
                        {{ $t('home_page.research.title') }}
                    </span><br>
                    <span class="white--text">
                        {{ $t('home_page.research.subtitle') }}
                    </span>
                </v-col>
                <v-col cols="4" class="pt-8">
                    <v-btn rounded outlined class="button" @click="form=!form"><b> {{ $t('home_page.research.button') }} </b></v-btn>
                </v-col>
            </v-row>
            <v-expand-transition>
                <v-row v-if="form">
                    <v-form v-model="valid">
                        <v-container>
                            <v-row>
                                <v-col md="4" xl="4" cols="12">
                                    <v-text-field
                                        class="textfield"
                                        solo
                                        rounded
                                        v-model="firstname"
                                        label="Nome"
                                        hint="Nome"
                                    />
                                </v-col>
                                <v-col md="4" xl="4">
                                    <v-text-field
                                        solo
                                        rounded
                                        v-model="firstname"
                                        label="E-mail"
                                        hint="E-mail"
                                    />
                                </v-col>
                                <v-col md="4" xl="4">
                                    <v-text-field
                                        solo
                                        rounded
                                        v-model="firstname"
                                        hint=Nascimento
                                        label="Nascimento"
                                    />
                                </v-col>
                                <v-col cols="12 pt-0 bt-0 mt-0">
                                    <v-btn rounded outlined class="button" @click="form=!form"><b> {{ $t('home_page.research.button_send') }} </b></v-btn>
                                </v-col>
                                
                            </v-row>
                        </v-container>
                    </v-form>
                </v-row>
            </v-expand-transition>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            subtext: "Não se preocupe! Nossa pesquisa é totalmente anônima",
            form: false,
        }
    },
    methods: {
        open_form(){
            this.form = true
        }
    }
}
</script>

<style scoped>
.home{
    text-align: center;
    background-color: #FFC79F;
    padding-left: 10%;
    padding-right: 10%;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0px 5px 5px rgba(128, 128, 128, 0.52);

}
.container{
    padding-top: 44px;
    padding-bottom: 44px;
}
.title{
    color: #853A94;
    padding-bottom: 10px;
}
.button{
    color: #853A94;
    background-color: white;
}
.textfield{
    color: #853A94;
}
</style>