<template>
    <div id="about">
        <first/>
        <projects/>
        <v-divider class="divider"/>
        <platform/>
        <manifest/>
        <goals/>
    </div>
</template>

<script>
import first from "./home/Home.vue";
import projects from "./home/Projects.vue"
import platform from "./about/platform.vue"
import manifest from "./about/manifest.vue"
import goals from "./about/goals.vue"


export default {
    components: {
        first,
        projects,
        platform,
        manifest,
        goals
    }
}
</script>

<style scoped>
.divider{
    margin-left: 15%;
    margin-right: 15%;
}
</style>