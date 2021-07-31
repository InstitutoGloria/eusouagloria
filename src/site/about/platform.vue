<template>
    <div id="platform">
        <v-row>
            <v-col xl="6" lg="6" md="6" sm="6" xs="12" id="first-col">
                <div class="main-text">
                    <span class="font-weight-thin"> {{ $t("about_page.golden_circle.title1") }} </span><br>
                    <span class="font-weight-bold"> {{ $t("about_page.golden_circle.title2") }} </span>
                </div>
                <div class="icon-retangle"/>
                <div class="topics">
                    <span class="item"> {{ $t("about_page.golden_circle.first") }} </span><br><br>
                    <span class="item"> {{ $t("about_page.golden_circle.second") }} </span><br><br>
                    <span class="item"> {{ $t("about_page.golden_circle.third") }} </span>
                </div>
            </v-col>
            <v-col xl="6" lg="6" md="6" sm="6" xs="12">
                <div class="img-container">
                    <img contain width="350" src="@/assets/images/circulo.png"/>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>
#platform{
    font-family: 'Poppins', sans-serif;
    margin-bottom: 50px;
    margin-top: 5%;
    margin-bottom: 5%;
}

#first-col{
    padding-left: 10%;
}

.img-container{
    text-align: center;
}


.main-text{
    font-size: 30px;
    text-align: left;
}

.icon-retangle{
    margin-top: 3%;
    margin-bottom: 5%;
    height: 3px;
    width: 30px;
    background-color: #853A94;
}


span span::before{
    content: "\A";
}

</style>