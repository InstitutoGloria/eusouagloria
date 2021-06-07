<template>
    <div class="gloria-projects">
        <v-container>
            <description/>
            <projects/>
        </v-container>
    </div>
</template>

<script>
import description from "./projects/Description.vue"
import projects from "./projects/Projects.vue"

export default {
    name: "gloria-projects",
    components: {
        description,
        projects
    },
    data(){
        return {

        }
    }
}
</script>

<style>

</style>