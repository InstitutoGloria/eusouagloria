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
      if(currentUrl.hostname != "gloriainstitute"){
        i18n.locale = "pt-br"
      }else{
        i18n.locale = "en"
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
.font-title{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 44px;
    line-height: 36px;
    letter-spacing: 0.1px;
}
</style>
