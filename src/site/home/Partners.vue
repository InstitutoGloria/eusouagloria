<template>
    <div class="partners">
        <div class="title">
            <span class="font-title">{{ $t('home_page.partners.title') }}</span>
        </div>
        <div class="images">
            <v-row align="center" justify="center">
                <v-col class="image" xl="1" lg="2" md="2" sm="2" cols="3" v-for="(img, idx) in images" :key="idx">
                    <span>
                        <v-img
                            :src="require(`@/assets/images/parceiros/${img.file}`)"
                            max="100"
                        />
                    </span>
                </v-col>
            </v-row>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            images: [
                { file: "qubo.svg" },
                { file: "cosmobots.png" },
                { file: "unb.svg" },
                { file: "embassy.png" },
                { file: "blockforce.svg" },
                { file: "ibm.png" },
                { file: "microsoft.png" },
                { file: "weamericas.jpg" },
                { file: "ink.png" },
                { file: "demarest.webp" },
                { file: "brasscom.png" },
                { file: "caravela.png" },
                { file: "handtalk.png" },
                { file: "ddd.png" },
                { file: "freefree.png" },
                { file: "AD&M.png" },
                { file: "seedin.png" },
            ]
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.title{

    padding-top: 3%;
    padding-bottom: 3%;
    text-align: center;
}

.font-title{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 44px;
    line-height: 36px;
    letter-spacing: 0.1px;
}

.images{
    padding-left: 6%;
    padding-right: 6%;
}

.image{
    vertical-align: middle;
    text-align: center;
    margin: 1em 0;
}

.partners{
    padding-top: 4%;
    padding-bottom: 4%;
}

</style>