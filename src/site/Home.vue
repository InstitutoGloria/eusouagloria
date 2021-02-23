<template>
    <div class="home">
        <First/>
        <We/>
        <Partners/>
        <Research/>
        <Data/>
    </div>
</template>

<script>
import First from "./home/Home.vue";
import We from "./home/We.vue";
import Partners from "./home/Partners.vue";
import Projects from "./home/Projects.vue";
import Research from "./home/Research.vue";
import Data from "./home/Data.vue";

export default {
    name: "Home",
    components: {
        First,
        We,
        Partners,
        Projects,
        Research,
        Data
    }, 
    data(){
        return {

        }
    }
}
</script>