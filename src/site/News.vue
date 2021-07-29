<template>
    <div class="News">
        <First/>
        <Presentation/>
        <news-list/>
    </div>
</template>

<script>
import First from "./projects/Top.vue";
import Presentation from "./news/Presentation.vue"
import NewsList from "./news/NewsList.vue"

export default {
    name: "News",
    components: {
        First,
        Presentation,
        NewsList
    }, 
    data(){
        return {

        }
    }
}
</script>