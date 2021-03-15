<template>
    <div class="footer">
        <v-divider/>
        <v-row>
            <v-col cols=4>
                <v-img class="pt-5" width=130px contain src="../assets/images/home/gloria.png"></v-img>
            </v-col>
            <v-col cols=4>
                <v-icon class="pl-2 pr-2 pt-5">mdi-twitter</v-icon>
                <v-icon class="pl-2 pr-2 pt-5">mdi-facebook</v-icon>
                <v-icon class="pl-2 pr-2 pt-5">mdi-instagram</v-icon>
            </v-col>
            <v-col cols=4>
                <div class="text-caption pt-6 copyright">Copyright {{ new Date().getFullYear() }}</div>
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
</style>