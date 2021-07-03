<template>
    <v-card flat>
        <v-toolbar flat>
        <v-toolbar-title><v-img width=160px src="@/assets/images/home/gloria.png"/></v-toolbar-title>
        <v-spacer></v-spacer>
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
                    <v-btn text @click="changeLocalew(item.id)">
                        {{item.name}}
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-menu>
        </v-toolbar>
    </v-card>
</template>

<script>

export default {
    props: [ 'items', 'languages', 'currentLang' ],
    data(){
        return {

        }
    },
    methods: {
        changeLocalew(item){
            this.$emit('changeLanguage', item)
        }

    }
}
</script>