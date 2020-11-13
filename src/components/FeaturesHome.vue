<template>
<b-container fluid class="features-section">
    <b-row>
        <b-col class="title-col" xs="12" sm="6" md="6" lg="6">
            <hr />
            <h2>Build & manage distributed teams like no one else.</h2>
        </b-col>
        <b-col class="feat-col" xs="12" sm="6" md="6" lg="6">
            <b-row v-for="data of featuresHome" v-bind:key="data.title">
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

</style>
