<template>
    <div class="footer">
        <v-divider/>
        <v-row class="content">
            <v-col cols=4>
                <div class="pl-16 pb-5 pt-6">
                    <v-img width=130px contain src="../assets/images/home/gloria.png"></v-img>
                </div>
            </v-col>
            <v-col cols=4>
                <v-icon class="pl-2 pr-2 pt-7">mdi-twitter</v-icon>
                <v-icon class="pl-2 pr-2 pt-7">mdi-facebook</v-icon>
                <v-icon class="pl-2 pr-2 pt-7">mdi-instagram</v-icon>
            </v-col>
            <v-col cols=4>
                <div class="text-caption pt-8 copyright">Copyright {{ new Date().getFullYear() }}</div>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.footer{
    text-align: center;
    vertical-align: 100px;
    height: 70px;
}
.content{
    text-align: center;
    bottom: 0%;
}
</style>