<template>
  <div class="toolbar" :key="key">
    <mobile :items="items" :languages="languages" :currentLang="currentLang" v-on:changeLocale="changeLanguage" v-if="isMobile"></mobile>
    <web    :items="items" :languages="languages" :currentLang="currentLang" v-on:changeLocale="changeLanguage" v-if="!isMobile"></web>
  </div>
</template>

<script>
import web from "./toolbar/web.vue";
import mobile from "./toolbar/mobile.vue";
import i18n from "@/plugins/i18n";

export default {
  components: {
    web,
    mobile
  },
    data() {
        return {
            key: 0,
            isMobile: false,
            show: false,
            items: [
                { id: 1, name: "home_page.toolbar.home", routeName:"/" },
                { id: 2, name: "home_page.toolbar.about", routeName:"/about" },
                { id: 3, name: "home_page.toolbar.projects", routeName:"/projects" },
                { id: 4, name: "home_page.toolbar.news",routeName:"/news" },
                { id: 5, name: "home_page.toolbar.we", routeName:"/we"},

            ],
            languages: [
                { id: 'pt-br', name: 'Português', flag: '' },
                { id: 'en', name: 'English', flag: '' },
            ],
            currentLang: "pt-br"
        };
    },
    created() {},
    beforeDestroy() {
        if (typeof window !== "undefined") {
        window.removeEventListener("resize", this.onResize, { passive: true });
        }
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },
    methods: {
        onResize() {
            this.isMobile = window.innerWidth < 930;
        },
        goTo() {
            this.$router.push("/");
        },
        changeLanguage(locale) {
            // print(locale)
            i18n.locale = locale;
            this.currentLang = i18n.locale;
            // this.key++
        },
    }
};
</script>

<style scoped>
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

.style-top {
  height: 10px;
}
</style>
