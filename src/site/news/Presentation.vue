<template>
    <div id="presentation">
        <div class="main_title">
            <span class="">
                {{ $t(`news_page.title`) }}
            </span>
        </div>
        <div class="main_description">
            {{ $t(`news_page.description`) }}
        </div>
        <div class="divider">
            <v-divider/>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#presentation{
    text-align: center;
}

.main_title{
    font-family: 'Poppins';
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    padding-top: 3%;
    color: #000000da;
}

.main_description {
    margin-right: 15%;
    margin-left: 15%;
    font-family: 'Montserrat';
    color: #737373;
    size: 24px;
}

.divider{
    padding: 5%;
}
</style>