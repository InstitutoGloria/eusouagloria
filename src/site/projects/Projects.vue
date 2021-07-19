<template>
    <div class="projects">
        <v-expansion-panels flat>
            <v-expansion-panel v-for="(item,i) in $t('projects_page.projects')" :key="i">
                <v-expansion-panel-header>
                    <span class="list-title">
                        {{ item.title }}
                    </span>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                        <div class="box-images">
                            <div v-for="img in item.images" :key="img" class="image">
                                <v-img max-width="500" src="https://picsum.photos/id/11/500/300"/>
                            </div>
                        </div>
                    <span class="list-description font-weight-light" v-html="item.description"/>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    name: "projects",
    data(){
        return {
            
        }
    }
}
</script>

<style>
.projects{
    margin-top: 4%;
    margin-right: 10%;
    margin-left: 10%;
}
.list-title{
    color: #843A93;
}
.list-description{
    color: #737373;
    padding-top: 3%;
    padding-left: 2%;
    padding-right: 6%;
    font-size: 14px;
    padding-bottom: 20px;
}
.box-images::after{
    content: "";
    clear: both;
    display: table;
}
.image{
    float: left;
    width: 25.00%;
    padding: 5px;
}

</style>