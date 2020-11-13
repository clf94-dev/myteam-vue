<template>
<b-container fluid class="features-section">
    <b-row>
        <b-col class="title-col" xs="12" sm="6" md="6" lg="6">
            <hr />
            <h2>Build & manage distributed teams like no one else.</h2>
        </b-col>
        <b-col class="feat-col" xs="12" sm="6" md="6" lg="6">
            <b-row class="feat-elem" v-for="data of featuresHome" v-bind:key="data.title">
                <b-col class="img-col" xs="2" sm="2" md="2" lg="2">
                    <img :src="data.src" :alt="data.imgAlt">
                </b-col>
                <b-col class="text-col" xs="10" sm="10" md="10" lg="10">
                    <h3>{{data.title}}</h3>
                    <p>{{data.text}}</p>
                </b-col>
            </b-row>
        </b-col>
    </b-row>

</b-container>
</template>

<script>
export default {
    name: 'FeaturesHome',
    data() {
        return {
            featuresHome: [

                {
                    title: "Experienced Individuals",
                    text: "Our network is made up of highly experienced professionals who are passionate about what they do.",
                    src: require('@/assets/images/icon-person.svg'),
                    imgAlt: "Experienced Individuals"
                },
                {
                    title: "Easy to Implement",
                    text: "Our processes have been refined over years of implementation meaning our teams always deliver.",
                    src: require('@/assets/images/icon-cog.svg'),
                    imgAlt: " Easy to Implement"
                },
                {
                    title: "Enhanced Productivity",
                    text: "Our customized platform with in-built analytics helps you manage your distributed teams.",
                    src: require('@/assets/images/icon-chart.svg'),
                    imgAlt: "Enhanced Productivity"
                }
            ]
        }
    }
}
</script>

<style scoped>
.features-section {
    padding: 5% 7%;
    background-color: #012d32;
}

.features-section .title-col {

    margin-bottom: 50px;
}

.features-section .title-col hr {
    width: 30px;
    height: 5px;
    margin-left: 0;
    background-color: #f67e7e;
    color: #f67e7e;
    margin-bottom: 5%;
}

@media screen and (max-width: 1080px) {
    .features-section .title-col hr {
        margin-top: 2%;
        margin-bottom: 9%;
    }
}

.features-section .title-col h2 {
    font-size: 30px;
    font-family: "Livvic", sans-serif;
    color: white;
    font-weight: 300;
    padding-right: 35%;
}

@media screen and (max-width: 755px) {
    .features-section .title-col h2 {
        padding-right: 40% !important;
    }
}

@media screen and (max-width: 1080px) {
    .features-section .title-col h2 {
        padding-right: 18%;
    }
}

.features-section .feat-col .feat-elem {
    padding: 1% 3%;
}

@media screen and (max-width: 755px) {
    .features-section .feat-col .feat-elem {
        text-align: center;
        padding-bottom: 30px;
    }
}

.features-section .feat-col .feat-elem .img-col {
    align-self: center !important;
}

.features-section .feat-col .feat-elem .img-col img {
    width: 60px !important;
}

@media screen and (max-width: 755px) {
    .features-section .feat-col .feat-elem .img-col {
        margin-bottom: 20px;
    }
}

.features-section .feat-col .feat-elem .text-col {
    padding-left: 25px;
}

.features-section .feat-col .feat-elem .text-col h3 {
    font-size: 18px;
    font-family: "Livvic", sans-serif;
    color: #f67e7e;
    font-weight: 400;
    margin-bottom: 7px;
}

.features-section .feat-col .feat-elem .text-col p {
    font-size: 15px;
    font-family: "Livvic", sans-serif;
    color: white;
    font-weight: 300;
    line-height: 1.5rem;
}

@media screen and (max-width: 755px) {
    .features-section .feat-col .feat-elem .text-col p {
        padding: 0 5%;
    }
}
</style>
