<template>
    <div class="home">
        <div class="container">
            <v-row>
                <v-col cols="8">
                    <span class="title text-h4 mb-3">
                        {{ $t('home_page.research.title') }}
                    </span><br>
                    <span class="black--text">
                        {{ $t('home_page.research.subtitle') }}
                    </span>
                </v-col>
                <v-col cols="4" class="pt-8">
                    <v-btn rounded outlined class="button" @click="form=!form" v-if="!form"><b> {{ $t('home_page.research.button') }} </b></v-btn>
                    <v-btn rounded outlined class="button-clear" @click="clear" v-if="form"><b> limpar </b></v-btn>
                    <v-btn rounded outlined class="button-send" v-if="form"><b> Enviar </b></v-btn>
                </v-col>
            </v-row>
            <v-expand-transition>
                <v-row v-if="form" class="form">
                    <v-col xs="12" sm="6" md="6" lg="6" xl="6">
                        <v-form>
                            <v-form>
                                <v-text-field
                                    class="textfield"
                                    solo
                                    rounded
                                    v-model="research.email"
                                    label="E-mail"
                                    :rules="email_rules"
                                    hint="E-mail"
                                />
                                <v-text-field
                                    class="textfield"
                                    solo
                                    rounded
                                    v-model="research.phone"
                                    v-mask="'(##) ###########'"
                                    label="Phone"
                                    hint="Phone"
                                    placeholder="(00) 12345-1234"
                                />
                                <v-text-field
                                    class="textfield"
                                    solo
                                    rounded
                                    v-model="research.birth"
                                    v-mask="'##/##/####'"
                                    label="Data de Nascimento"
                                    hint="Data de Nascimento"
                                />
                                <v-radio-group
                                        v-model="research.gender"
                                        row
                                    >
                                        <v-radio
                                            label="Masculino"
                                            color="#853A94"
                                            value="masc"
                                        ></v-radio>
                                        <v-radio
                                            label="Feminino"
                                            color="#853A94"
                                            value="fem"
                                        ></v-radio>
                                        <v-radio
                                            label="Outro"
                                            color="#853A94"
                                            value="other"
                                        ></v-radio>
                                    </v-radio-group>
                                        <v-select
                                            :items="states"
                                            v-model="research.state"
                                            label="Select"
                                            dense
                                        ></v-select>
                            </v-form>
                        </v-form>
                    </v-col>
                    <v-col xs="12" sm="6" md="6" lg="6" xl="6">
                        <v-form v-model="valid">
                            <div class="to_center">
                                <div>
                                    <p>Você sabe o que é violência física?</p>
                                    <v-radio-group
                                        v-model="research.know"
                                        row
                                    >
                                        <v-radio
                                            label="Sim"
                                            color="#853A94"
                                            value="true"
                                        ></v-radio>
                                        <v-radio
                                            label="Não"
                                            color="#853A94"
                                            value="false"
                                        ></v-radio>
                                    </v-radio-group>
                                </div>
                                <div>
                                    <p>Você já sofreu algum tipo de violência?</p>
                                    <v-radio-group
                                        v-model="research.suffer"
                                        row
                                    >
                                        <v-radio
                                            label="Sim"
                                            color="#853A94"
                                            value="true"
                                        ></v-radio>
                                        <v-radio
                                            label="Não"
                                            color="#853A94"
                                            value="false"
                                        ></v-radio>
                                    </v-radio-group>
                                </div>
                                <div>
                                    <p>Qual tipo de violência você tem mais medo?</p>
                                    <v-radio-group
                                        v-model="research.fear"
                                        row
                                    >
                                        <v-radio
                                            label="Física"
                                            color="#853A94"
                                            value="physical"
                                        ></v-radio>
                                        <v-radio
                                            label="Sexual"
                                            color="#853A94"
                                            value="sexual"
                                        ></v-radio>
                                        <v-radio
                                            label="Psicológica"
                                            color="#853A94"
                                            value="psychological "
                                        ></v-radio>
                                        <v-radio
                                            label="Digital"
                                            color="#853A94"
                                            value="digital"
                                        ></v-radio>
                                    </v-radio-group>
                                </div>
                            </div>
                        </v-form>
                    </v-col>
                </v-row>
            </v-expand-transition>
        </div>
    </div>
</template>

<script>
import { mask } from 'vue-the-mask';
import states from '../../texts/other/states.js';


export default {
    directives: {
        mask
    },
    data(){
        return {
            subtext: "Não se preocupe! Nossa pesquisa é totalmente anônima",
            form: true,
            research: {
                email: '',
                phone: '',
                birth: '',
                gender: '',
                state: '',
                know: '',
                suffer: '',
                fear: '',
            },
            research_default: {
                email: '',
                phone: '',
                birth: '',
                gender: '',
                state: '',
                know: '',
                suffer: '',
                fear: '',
            },
            email_rules: [
                v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            states: states
        }
    },
    methods: {
        open_form(){
            this.form = true
        },
        clear(){
            Object.assign(this.research, this.research_default);
            this.form = false
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

.button-clear{
    color: #853A94;
    background-color: rgb(240, 145, 145);
}

.button-send{
    color: #853A94;
    background-color: rgb(148, 240, 145);
}

.to_center{
    text-align: center;
}

.textfield{
    color: #853A94;
}
</style>