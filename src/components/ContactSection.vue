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

</style>
