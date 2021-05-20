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
                            :height='img.height'
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
                //main ones height 120 (we and bf are too small 150)
                { file: "ibm.png",height:"120" },
                { file: "microsoft.png",height:"120" },
                { file: "weamericas.jpg",height:"150" },
                { file: "embassy.png",height:"120" },
                { file: "blockforce.svg",height:"150" },
                
                //second tier 100
                { file: "qubo.svg" ,height:"100"},
                { file: "ambev_voa.png",height:"100" },
                // { file: "cosmobots.png" },
                { file: "unb.svg",height:"100" },
                { file: "mlabs.png",height:"100" },

                //third tier height 75(demarest too big 50)
                { file: "ink.png",height:"75" },
                { file: "demarest.webp",height:"50" },
                { file: "brasscom.png",height:"75" },
                { file: "caravela.png",height:"75" },
                { file: "handtalk.png",height:"75" },
                { file: "AD&M.png",height:"75" },
                { file: "cnpq.jpg",height:"75" },
                { file: "logo_genesys.png",height:"75" },
                { file: "ddd.png" ,height:"75"},                
                { file: "TechSoup.jpg",height:"75" },

                { file: "pactoglobal.jpg" ,height:"75"},

                // { file: "freefree.png" },
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