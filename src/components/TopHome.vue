<template>
<b-container fluid class="topHome-section">
    <b-row>
        <b-col class="title-col" xs="12" sm="12" md="6" lg="6">
            <h1 data-aos='fade-right'>Find the best </h1>
            <h1 data-aos='fade-right' class='color'>talent</h1>

        </b-col>
        <b-col data-aos='fade-left' data-aos-delay='300' class="text-col" xs="12" sm="12" md="6" lg="6">
            <hr />
            <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'TopHome'
}
</script>

<style scoped>
.topHome-section {
    padding: 5% 7%;
}

@media screen and (max-width: 756px) {
    .topHome-section .title-col {
        text-align: center;
        margin-bottom: 30px;
    }
}

.topHome-section .title-col h1 {
    font-size: 64px;
    font-weight: 300;
    color: white;
    line-height: 1.5rem;
    margin-top: 45px;

}

.topHome-section .title-col h1.color {
    color: #f67e7e;
}

@media screen and (max-width: 756px) {
    .topHome-section .text-col {
        text-align: center;
    }
}

.topHome-section .text-col hr {
    margin-left: 0;
    width: 30px;
    height: 5px;
    background-color: #79c8c7;
    color: #79c8c7;
    margin-bottom: 5%;
}

@media screen and (max-width: 756px) {
    .topHome-section .text-col hr {
        display: none;
    }
}

@media screen and (max-width: 1080px) {
    .topHome-section .text-col hr {
        margin-top: 5%;
        margin-bottom: 15%;
    }

}

.topHome-section .text-col p {
    font-size: 18px;
    font-family: "Livvic", sans-serif;
    color: white;
    padding-right: 11%;
}

@media screen and (max-width: 756px) {
    .topHome-section .text-col p {
        padding-right: 6% !important;
    }
}
</style>
