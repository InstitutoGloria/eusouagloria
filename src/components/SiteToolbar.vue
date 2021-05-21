<template>
    <v-card flat>
        <v-toolbar flat>
        <v-toolbar-title><v-img width=160px src="../assets/images/home/gloria.png"/></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text>
            {{ $t('home_page.toolbar.manifest') }}
        </v-btn>
        <v-btn text v-for="i in items" :key="i.id" :to="i.routeName">
            {{ $t(`${i.name}`) }}
        </v-btn>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="#853A94" dark v-bind="attrs" v-on="on">
                    {{ currentLang }}
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in languages" :key="index">
                    <v-btn text @click="changeLocale(item.id)">
                        {{item.name}}
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-menu>
        </v-toolbar>
    </v-card>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
    data(){
        return {
            items: [
                { id: 1, name: "home_page.toolbar.home", routeName:"/" },
                { id: 1, name: "home_page.toolbar.about", routeName:"/about" },
                { id: 2, name: "home_page.toolbar.news",routeName:"/news" },
                { id: 3, name: "home_page.toolbar.we", routeName:"/we"},
            ],
            languages: [
                { id: 'en', name: 'English', flag: '' },
                { id: 'pt-br', name: 'Português', flag: '' },
            ],
            currentLang: "en"
        }
    },
    created(){
        this.selectLang();
    },
    methods: {
        selectLang(){
        let currentUrl = window.location;
        if(currentUrl.hostname == "gloriainstitute"){
            this.currentLang = "en"
        }else{
            this.currentLang = "pt-br"
        }
        },
        changeLocale(locale) {
            i18n.locale = locale;
            this.currentLang = i18n.locale;
        },
    }
}
</script>