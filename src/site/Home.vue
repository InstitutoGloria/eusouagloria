<template>
    <div class="home">
        <First/>
        <We/>
        <v-divider/>
        <Partners/>
        <v-divider/>
        <Projects/>
        <v-divider/>
        <Survey/>
        <Data/>
    </div>
</template>

<script>
import First from "./home/Home.vue";
import We from "./home/We.vue";
import Partners from "./home/Partners.vue";
import Projects from "./home/Projects.vue";
import Survey from "./home/survey.vue";
import Data from "./home/Data.vue";

export default {
    name: "Home",
    components: {
        First,
        We,
        Partners,
        Projects,
        Survey,
        Data
    }, 
    data(){
        return {

        }
    }
}
</script>