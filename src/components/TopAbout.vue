<template>
<b-container fluid class="topAbout-section">
    <b-row>
        <b-col class="title-col" xs="12" sm="12" md="6" lg="6" data-aos='fade-right'>
            <h2>About</h2>
        </b-col>
        <b-col class="text-col" xs="12" sm="12" md="6" lg="6" data-aos='fade-left' data-aos-delay='300'>
            <hr />
            <p>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring
                those teams to you.</p>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'TopAbout'
}
</script>

<style scoped>
.topAbout-section {
    padding: 5% 7%;
}

@media screen and (max-width: 756px) {
    .topAbout-section .title-col {
        text-align: start;
    }
}

.topAbout-section .title-col h2 {
    font-size: 64px;
    font-weight: 400;
    color: white;
}

@media screen and (max-width: 756px) {
    .topAbout-section .text-col {
        text-align: start;
    }
}

.topAbout-section .text-col hr {
    width: 30px;
    height: 5px;
    margin-left: 0;
    background-color: #f67e7e;
    color: #f67e7e;
    margin-bottom: 5%;
}

@media screen and (max-width: 1080px) {
    .topAbout-section .text-col hr {
        margin-top: 2%;
        margin-bottom: 9%;
    }
}

.topAbout-section .text-col p {
    font-size: 18px;
    color: white;
    padding-right: 11%;
}
</style>
