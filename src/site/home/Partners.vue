<template>
    <div class="partners">
        <div class="title text-center">
            <span class="font-title">{{ $t('home_page.partners.title') }}</span>
        </div>
        <div id="scroll">
            <div class="Wrapper text-center">
                <div>
                    <div>
                        <img
                            v-for="img in images" :key="img.file" 
                            :src="require(`@/assets/images/parceiros/${img.file}`)"
                            contain
                            height="90"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            images: [
                { file: "qubo.svg" },
                // { file: "cosmobots.png" },
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
                // { file: "freefree.png" },
                { file: "AD&M.png" },
                // { file: "seedin.png" },
            ]
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.partners{
    padding-left: 4%;
    padding-right: 4%;
}

.title{
    padding-top: 3%;
    padding-bottom: 4%;
}

img{
    padding: 8px 8px 8px 8px
}

.img{
    float: left;
    widows: 33.33%;
    padding: 5px;
}

.image{
    vertical-align: middle;
    text-align: center;
    margin: 1em 0;
}

.partners{
    padding-top: 2%;
    padding-bottom: 3%;
}

</style>