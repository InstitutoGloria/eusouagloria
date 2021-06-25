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
                    <v-col cols="4" v-for="i in 3" :key="i">
                        <v-hover v-slot="{ hover }">
                            <v-card :elevation="hover ? 6 : 2" height="300" class="grey lighten-2">

                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<style scoped>
.ebook{
    padding-top: 2%;
    padding-bottom: 2%;
    text-align: center;
    background-color: #FFFAC9;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 30px;
}
</style>