<template>
<b-container fluid class="contact-section">
    <b-row>
        <b-col class="askabout-col" xs="12" sm="6" md="6" lg="6">
            <h2>Contact</h2>
            <h3>Ask us about</h3>
            <b-row class="feat-elem" v-for="data of features" v-bind:key="data.text">
                <b-col class="img-col" xs="2" sm="2" md="2" lg="2">
                    <img :src="data.src" :alt="data.imgAlt">
                </b-col>
                <b-col class="text-col" xs="10" sm="10" md="10" lg="10">

                    <p>{{data.text}}</p>
                </b-col>
            </b-row>

        </b-col>
        <b-col class="form-col" xs="12" sm="6" md="6" lg="6">
            <Form></Form>
        </b-col>

    </b-row>
</b-container>
</template>

<script>
import Form from './Form.vue'
export default {
    name: 'ContactSection',
    components: {
        Form
    },
    data() {
        return {
            features: [{
                    src: require('@/assets/images/icon-person.svg'),
                    imgAlt: 'Experienced Individuals',
                    text: 'The quality of our talent network'
                },
                {
                    src: require('@/assets/images/icon-cog.svg'),
                    imgAlt: 'Easy to Implement',
                    text: 'Usage & implementation of our software'
                }, {
                    src: require('@/assets/images/icon-chart.svg'),
                    imgAlt: 'Enhanced Productivity',
                    text: 'How we help drive innovation'
                }

            ]
        }
    }
}
</script>

<style scoped>
.contact-section {
    padding: 5% 9%;
}

.contact-section .askabout-col h2 {
    font-size: 64px;
    font-family: "Livvic", sans-serif;
    font-weight: 400;
    color: white;
}

@media screen and (max-width: 1080px) {
    .contact-section .askabout-col h2 {
        text-align: center;
    }
}

.contact-section .askabout-col h3 {
    font-size: 30px;
    font-family: "Livvic", sans-serif;
    font-weight: 400;
    color: #f67e7e;
    margin-bottom: 20px;
}

@media screen and (max-width: 1080px) {
    .contact-section .askabout-col h3 {
        text-align: center;
    }
}

.contact-section .askabout-col .feat-elem {
    padding: 1%;
}

@media screen and (max-width: 755px) {
    .contact-section .askabout-col .feat-elem {
        text-align: center;
        padding-bottom: 30px;
    }
}

.contact-section .askabout-col .feat-elem .img-col {
    text-align: center;
}

.contact-section .askabout-col .feat-elem .img-col img {
    width: 60px !important;
    margin-right: 20px;
}

@media screen and (max-width: 755px) {
    .contact-section .askabout-col .feat-elem .img-col {
        margin-bottom: 20px;
    }
}

.contact-section .askabout-col .feat-elem .text-col p {
    font-size: 15px;
    font-family: "Livvic", sans-serif;
    color: white;
    font-weight: 300;
    line-height: 1.5rem;
}

@media screen and (max-width: 755px) {
    .contact-section .askabout-col .feat-elem .text-col p {
        padding: 0 5%;
    }
}

.contact-section .form-col {

    padding-top: 3%;
}

@media screen and (min-width: 1081px) {
    .contact-section .form-col {
        padding: 2% 5%;
    }
}
</style>
