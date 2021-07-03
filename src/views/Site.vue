<template>
    <div class="site">
        <toolbar/>
            <router-view/>
        <site-footer/>
    </div>
</template>

<script>
// import Site from "./views/Site.vue";
import Toolbar from "../components/Toolbar.vue";
import SiteFooter from "../components/SiteFooter.vue";

export default {
    name: 'Site',
    components: { Toolbar, SiteFooter },
    data(){
        return {

        }
    }
}
</script>
