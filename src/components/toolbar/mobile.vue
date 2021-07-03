<template>
    <div class="toolbar">
        <v-expand-transition>
        <div class="menu-mobile" v-if="drawer">
            <div class="button-position" v-for="item in items" :key="item.id">
                <v-btn
                    text
                    :to="item.routeName"
                    @click="drawer = false"
                    >
                    {{ $t(`${item.name}`) }}
                </v-btn>
            </div>
            <div class="button-position">
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
            </div>
        </div>
        </v-expand-transition>
        <div class="" />
        <v-app-bar flat class="">
            <v-app-bar-nav-icon @click="drawer = !drawer" />
            <div @click="goTo()" class="logo-mobile">
                <span class="titleText  nameLogo base--text">
                    <h2><v-img width=160px src="@/assets/images/home/gloria.png"/></h2>
                </span>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
    props: [ 'items', 'languages', 'currentLang' ],
    data() {
        return {
            drawer: false,
        };
    },
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    },
    methods: {
        changeLocale(locale) {
            this.$emit('changeLocale', locale)
        },
        goTo() {
            this.$router.push("/");
            this.drawer = false;
        }
    }
};
</script>

<style scoped>
.button-position {
  padding-top: 2px;
  text-align: center;
}

.menu-mobile{
  padding-bottom: 10px;

}
.logo-mobile {
  text-align: center;
}

.nameLogo {
  float: left;
}

.titleText {
  padding-left: 10px;
}

.rotateLogo:hover {
  transform: rotate(360deg);
  transition: 2s;
}

.toolbar {
  font-family: "Titillium Web", sans-serif;
}

.botao {
  font-family: "Raleway", sans-serif;
}

.hoverItem {
  background-color: blue;
}


</style>
