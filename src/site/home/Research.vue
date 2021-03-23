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
                    <v-btn rounded outlined class="button" @click="form=!form" v-if="!form && !block"><b> {{ $t('home_page.research.button') }} </b></v-btn>
                    <span v-if="block">
                        <p class="poppins text-h5 purple--text">Obrigado!</p>
                    </span>
                        <v-btn rounded outlined class="button-clear" @click="clear" v-if="form"><b> X </b></v-btn>
                        <v-btn rounded outlined class="button-send" @click="sendInfo" v-if="form"><b> Enviar </b></v-btn>     
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
                                    :label="`${ $t('home_page.form.email')}`"
                                    :hint="`${ $t('home_page.form.email')}`"
                                    :rules="email_rules"
                                />
                                <v-text-field
                                    class="textfield"
                                    solo
                                    rounded
                                    v-model="research.phone"
                                    v-mask="'(##) ###########'"
                                    :label="`${ $t('home_page.form.phone')}`"
                                    :hint="`${ $t('home_page.form.phone')}`"
                                    placeholder="(00) 12345-1234"
                                />
                                <v-text-field
                                    class="textfield"
                                    solo
                                    rounded
                                    v-model="research.birth"
                                    v-mask="'##/##/####'"
                                    :label="`${ $t('home_page.form.birth')}`"
                                    :hint="`${ $t('home_page.form.birth')}`"
                                />
                                <div class="flex-center">

                                <v-radio-group
                                        v-model="research.gender"
                                        row
                                        class="to_center"
                                    >
                                        <v-radio
                                            :label="`${ $t('home_page.form.gender.masc')}`"
                                            color="#853A94"
                                            value="masc"
                                        ></v-radio>
                                        <v-radio
                                            :label="`${ $t('home_page.form.gender.fem')}`"
                                            color="#853A94"
                                            value="fem"
                                        ></v-radio>
                                        <v-radio
                                            :label="`${ $t('home_page.form.gender.other')}`"
                                            color="#853A94"
                                            value="other"
                                        ></v-radio>
                                    </v-radio-group>
                                </div>
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
                                <div class="flex-center">
                                    <p class="font-weight-bold"> {{ $t('home_page.research.form.know') }} </p>
                                    <v-radio-group
                                        v-model="research.know"
                                        row
                                    >
                                        <v-radio
                                            :label="`${ $t('home_page.form.yes')}`"
                                            color="#853A94"
                                            value="true"
                                        ></v-radio>
                                        <v-radio
                                            :label="`${ $t('home_page.form.no')}`"
                                            color="#853A94"
                                            value="false"
                                        ></v-radio>
                                    </v-radio-group>
                                </div>
                                <div class="flex-center">
                                    <p class="font-weight-bold">{{ $t('home_page.research.form.suffer') }}</p>
                                    <v-radio-group
                                        v-model="research.suffer"
                                        row
                                        justify-center
                                    >
                                        <v-radio
                                            :label="`${ $t('home_page.form.yes')}`"
                                            color="#853A94"
                                            value="true"
                                        ></v-radio>
                                        <v-radio
                                            :label="`${ $t('home_page.form.no')}`"
                                            color="#853A94"
                                            value="false"
                                        ></v-radio>
                                    </v-radio-group>
                                </div>
                                <div class="flex-center">
                                    <p class="font-weight-bold">{{ $t('home_page.research.form.type') }}</p>
                                    <v-radio-group
                                        v-model="research.fear"
                                        row
                                    >
                                        <v-radio
                                            :label="`${ $t('home_page.form.violence.physical')}`"
                                            color="#853A94"
                                            value="physical"
                                        ></v-radio>
                                        <v-radio
                                            :label="`${ $t('home_page.form.violence.sexual')}`"
                                            color="#853A94"
                                            value="sexual"
                                        ></v-radio>
                                        <v-radio
                                            :label="`${ $t('home_page.form.violence.psychological')}`"
                                            color="#853A94"
                                            value="psychological"
                                        ></v-radio>
                                        <v-radio
                                            :label="`${ $t('home_page.form.violence.digital')}`"
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
            form: false,
            block: false,
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
        },
        sendInfo(){
            alert("Sending info...")
            this.block = true
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

.poppins{
    font-family: 'Poppins', sans-serif;
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

.flex-center{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>