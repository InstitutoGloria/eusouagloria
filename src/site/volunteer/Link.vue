<template>
    <div class="link">
       <div class="title">
           <span class="">
                {{ $t(`volunteer_page.link.title`) }}
            </span>
        </div>
        <div class="main_description">
            {{ $t(`volunteer_page.link.description`) }}
        </div>
       </div>
</template>

<style scoped>
.link{
    margin-bottom: 10%;
    text-align: center;
}
.title {
    font-family: 'Poppins';
    text-align: center;
    font-weight: 600;
    font-size: 24pt;
    padding-top: 3%;
    color: #000000da;
}

.main_description {
    margin-right: 15%;
    margin-left: 15%;
    font-family: 'Montserrat';
    color: #737373;
    size: 18pt;
}
</style>