<template>
    <div class="News">
        <Presentation/>
        <news-list/>
    </div>
</template>

<script>
import Presentation from "./news/Presentation.vue"
import NewsList from "./news/NewsList.vue"

export default {
    name: "News",
    components: {
        Presentation,
        NewsList
    }, 
    data(){
        return {

        }
    }
}
</script>