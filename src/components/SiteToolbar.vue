<template>
    <v-card flat>
        <v-toolbar flat>
        <v-toolbar-title>insert_logo</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text v-for="i in items" :key="i.id">
            {{ $t(`${i.name}`) }}
        </v-btn>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
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
                { id: 1, name: "home_page.toolbar.home" },
                { id: 2, name: "home_page.toolbar.news" },
                { id: 3, name: "home_page.toolbar.about" },
            ],
            languages: [
                { id: 'en', name: 'English', flag: '' },
                { id: 'pt-br', name: 'Português', flag: '' },
            ],
            currentLang: "en"
        }
    },
    methods: {
        changeLocale(locale) {
            i18n.locale = locale;
            this.currentLang = i18n.locale;
        },
    }
}
</script>