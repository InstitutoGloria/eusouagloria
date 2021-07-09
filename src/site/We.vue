<template>
    <div class="We">
        <First/>
        <Organogram/>
        <v-divider/>
        <Highlights/>
        <v-divider/>
    </div>
</template>

<script>
import First from "./projects/Top.vue";
import Organogram from "./we/Organogram.vue";
import Highlights from "./we/Highlights.vue";

export default {
    name: "We",
    components: {
        First,
        Organogram,
        Highlights,
    }, 
    data(){
        return {

        }
    }
}
</script>