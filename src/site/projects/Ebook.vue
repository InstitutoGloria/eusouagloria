<template>
    <div class="ebook">
        <div class="main-title">
            <div class="icon">
                <v-icon size="40">
                    mdi-download
                </v-icon>
            </div>
            <div class="main-title-text">
                <span>
                    DOWNLOADS
                </span>
            </div>
        </div>
        <div class="contents">
            <v-container>
                <v-row>
                    <v-col cols="6" v-for="i in $t('projects_page.downloads')" :key="i.img">
                        <v-hover v-slot="{ hover }">
                            <v-card :elevation="hover ? 6 : 2" height="200" class="grey lighten-2">
                                <v-img
                                    height="200"
                                    :src="require(`@/assets/ebooks/${i.img}`)"
                                >

                                </v-img>
                                <v-expand-transition>
                                    <div
                                        v-if="hover"
                                        class="d-flex grey darken-2 v-card--reveal"
                                        style="height: 100%;"
                                    >
                                        <a text class="text-h4 white--text" :href="i.link" target="_blank">
                                            Download
                                        </a>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-hover>
                        <div class="text-caption pt-2">
                            {{ i.title }}
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }, 
    methods: {
    }
}
</script>

<style scoped>
.ebook{
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 5%;
    padding-right: 5%;
    text-align: center;
    background-color: #FFFAC9;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 30px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

</style>