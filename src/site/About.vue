<template>
    <div id="about">
        <projects/>
        <v-divider class="divider"/>
        <platform/>
        <manifest/>
        <goals/>
    </div>
</template>

<script>
import projects from "./about/projects.vue"
import platform from "./about/platform.vue"
import manifest from "./about/manifest.vue"
import goals from "./about/goals.vue"

export default {
    components: {
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