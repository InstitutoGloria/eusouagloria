<template>
    <div class="footer">
        <v-divider/>
        <v-row class="content">
            <v-col class="pl-2 pr-2 pt-7" cols=4>
                <div class="d-flex flex-column justify-space-between align-center">
                    <v-img width=130px contain src="../assets/images/home/gloria.png"></v-img>
                </div>
            </v-col>
            <v-col cols=4>
                <v-icon class="pl-2 pr-2 pt-6">mdi-twitter</v-icon>
                <v-icon class="pl-2 pr-2 pt-6">mdi-facebook</v-icon>
                <v-icon class="pl-2 pr-2 pt-6">mdi-instagram</v-icon>
            </v-col>
            <v-col cols=4>
                <div class="text-caption pt-7 copyright">Copyright {{ new Date().getFullYear() }}</div>
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