<template>
  <v-app> 
    <router-view/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import i18n from "@/plugins/i18n";

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    currentUrl: ""
  }),
  created(){
    this.selectLang();
  },
  methods: {
    selectLang(){
      let currentUrl = window.location;
      if(currentUrl.hostname == "gloriainstitute"){
        i18n.locale = "en"
      }else{
        i18n.locale = "pt-br"
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

</style>
