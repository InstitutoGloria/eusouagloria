<template>
    <div class="site">
        <site-toolbar/>
            <router-view/>
        <site-footer/>
    </div>
</template>

<script>
// import Site from "./views/Site.vue";
import SiteToolbar from "../components/SiteToolbar.vue";
import SiteFooter from "../components/SiteFooter.vue";

export default {
    name: 'Site',
    components: { SiteToolbar, SiteFooter },
    data(){
        return {

        }
    }
}
</script>
