<template>
    <div id="HomePageData">
        <div>
            <v-row align="center" class="h_grid" v-for="(item,index) in content" :key="index">
                <v-col align="right" xl="4" md="4" sm="12">
                    <v-img style="width:50%" class="image" :src="require(`@/assets/${item.img}`)"> </v-img>
                </v-col>
                <v-col xl="3" md="3" sm="12">
                    <span class="middle-text">
                        {{$t(item.text)}} <br>
                    </span>
                    <v-btn outlined rounded class="button">{{item.button}}</v-btn>
                </v-col>
                <v-col align="center" xl="1" md="1" sm="12">
                    <!-- <show-at breakpoint = "mediumAndAbove"> -->
                        <v-img v-if="!is_mobile" class="arrow" style="width:50%" :src="require(`@/assets/${item.arrow}`)"></v-img>
                    <!-- </show-at> -->
                    <!-- <hide-at breakpoint = "medium"> -->
                        <v-img v-if="is_mobile" class="arrow_small" style="width:10%" :src="require(`@/assets/${item.arrow}`)"></v-img>
                    <!-- </hide-at> -->
                </v-col>
                <v-col xl="4" md="4" sm="12">
                    <span class="counter">
                        {{counter}}
                        {{item.number}} <br>
                    </span>
                    <span class="right-text">
                        {{item.second_text}}
                    </span>
                </v-col>
            </v-row>
        </div>
    </div>    
</template>

<script>
import{showAt, hideAt} from 'vue-breakpoints';
export default {
    data(){
        return{
            counter: 5,
            is_mobile: false,
            content:[
                {
                    img: "data-1.png",
                    text: "home_page.data.first_card.info",
                    button: "VEJA MAIS",
                    arrow: "arrow-right-purple.svg",
                    number: 9736,
                    second_text: "MULHERES JÁ FORAM VÍTIMAS DE VIOLÊNCIA FÍSICA HOJE.",
                },
                {
                    img: "data-2.png",
                    text: "TEXT",
                    button: "BOTÃO",
                    arrow: "arrow-right-purple.svg",
                    number: 0,
                    second_text: "SEGUNDO TEXTO",
                },
                {
                    img: "data-3.png",
                    text: "TEXT",
                    button: "BOTÃO",
                    arrow: "arrow-right-purple.svg",
                    number: 0,
                    second_text: "SEGUNDO TEXTO",
                },
            ],
        }
    },
    components:{
        showAt,
        hideAt,
    },
    mounted(){
        this.onResize;
        this.startInterval();
        window.addEventListener("resize", this.onResize, {passive: true});
        
    },
    methods:{
        onResize(){
            this.is_mobile = window.innerWidth < 960;
        },
        /* todo: function(){           
        this.counter = setInterval(function(){
            this.counter++;
        }.bind(this), 3000); */

        startInterval: function () {
            const self = this
            setInterval(function() {
                self.counter = self.counter + 1;
                console.log(self.counter);
            }, 7200);
        },

        /* IstartInterval: function () {
			setInterval(function() {
			this.myText = this.myText + 1
            console.log(this.myText)
            }, 1000);
        } */

    }
}

</script>

<style scoped>
/* # paara id . para class */

.arrow_small{
    transform: rotate(90deg) scale(0.8);
}
#HomePageData{
    padding-left: 15%;
    padding-right: 15%;
    padding: 3%;
}
.h_grid{
    text-align: center;
}
.button{
    color: #853A94;
    background-color: white;
    margin-top: 5%;
}
.button:hover{
    color: white;
    background-color: #853A94;
    margin-top: 5%;
    transition: all .2s ease-in-out;
}
.image{
    margin-left: 30%;
}
.middle-text{
    font-family: 'Montserrat',sans-serif;
}
.right-text{
    color: #853A94;
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: bold;
}
.counter{
    font-style: normal;
    font-weight: 900;
    font-size: 62px;
    line-height: 74px;
    letter-spacing: .1em;
    text-shadow: -2px -2px 0 #7c1791, 2px -2px 0 #7c1791, -2px 2px 0 #7c1791, 2px 2px 0 #7c1791;
    color: #fff;
    font-size: 48px;
    text-align: center;
}
</style>