<template>
    <div class="gloria-projects">
        <First/>
        <v-container>
            <description/>
            <projects/>
        </v-container>
        <ebook/>
    </div>
</template>

<script>
import First from "./home/Home.vue";
import description from "./projects/Description.vue"
import projects from "./projects/Projects.vue"
import ebook from "./projects/Ebook.vue"
import About from './About.vue';

export default {
    name: "gloria-projects",
    components: {
        First,
        description,
        projects,
        ebook,
        About
    },
    data(){
        return {

        }
    }
}
</script>

<style>

</style>