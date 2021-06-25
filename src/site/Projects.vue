<template>
    <div class="gloria-projects">
        <v-container>
            <description/>
            <projects/>
        </v-container>
        <ebook/>
    </div>
</template>

<script>
import description from "./projects/Description.vue"
import projects from "./projects/Projects.vue"
import ebook from "./projects/Ebook.vue"

export default {
    name: "gloria-projects",
    components: {
        description,
        projects,
        ebook
    },
    data(){
        return {

        }
    }
}
</script>

<style>

</style>