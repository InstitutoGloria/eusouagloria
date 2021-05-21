<template>
    <div id="about">
        <platform/>
        <manifest/>
        <goals/>
    </div>
</template>

<script>
import platform from "./about/platform.vue"
import manifest from "./about/manifest.vue"
import goals from "./about/goals.vue"

export default {
    components: {
        platform,
        manifest,
        goals
    }
}
</script>

<style scoped>

</style>