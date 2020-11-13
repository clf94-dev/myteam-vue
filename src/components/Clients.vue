<template>
<b-container fluid class="clients-section">
    <h3>Some of our clients</h3>
    <b-row class="clients-row">
        <b-col class="logo" xs="12" sm="6" md="2" v-for="data of clients" v-bind:key="data.imgAlt">
            <img :src="data.src" :alt="data.imgAlt">
        </b-col>

    </b-row>

</b-container>
</template>

<script>
export default {
    name: 'Clients',
    data() {
        return {
            clients: [{
                    src: require('@/assets/images/logo-gadgets-now.png'),
                    imgAlt: "Gadgets Now"
                },
                {
                    src: require('@/assets/images/logo-jakarta-post.png'),
                    imgAlt: "Jakarta Post"
                },
                {
                    src: require('@/assets/images/logo-tech-radar.png'),
                    imgAlt: "Tech Radar"
                },
                {
                    src: require('@/assets/images/logo-the-guardian.png'),
                    imgAlt: "The Guardian"
                },
                {
                    src: require('@/assets/images/logo-the-verge.png'),
                    imgAlt: "The Verge"
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
