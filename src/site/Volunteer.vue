<template>
    <div class="gloria-volunteer">
        <First/>
        <Link/>
        
    </div>
</template>

<script>
import Link from "./volunteer/Link.vue";
import First from "./volunteer/Top.vue";

export default {
    name: "gloria-volunteer",
    components: {
        Link,
        First
    },
    data(){
        return {

        }
    }
}
</script>

<style>

</style>