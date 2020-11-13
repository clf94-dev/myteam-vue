<template>
<b-container fluid class="opinions-section">
    <div class="title">

        <h2>Delivering real results for top companies. Some of our
            <h2 class='color'>success stories.</h2>
        </h2>
    </div>
    <b-row class="opinions-row">
        <b-col class="opinions-col" xs="12" sm="12" md="4" lg="4" v-for="data of opinions" v-bind:key="data.name">
            <img class='quotes' :src="quotes" alt="quotes" />
            <p>
                {{data.text}}
            </p>
            <h3>{{data.name}}
            </h3>
            <p class='position'>{{data.position}}
            </p>
            <img class='avatar' :src="data.src" :alt="data.imgAlt" />

        </b-col>
    </b-row>

</b-container>
</template>

<script>
export default {
    name: 'Opinions',
    data() {
        return {
            quotes: require('@/assets/images/icon-quotes.svg'),
            opinions: [{
                    name: "Kady Baker",
                    text: "The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.",
                    position: "Product Manager at Bookmark",
                    src: require('@/assets/images/avatar-kady.jpg'),
                    imgAlt: "Kady Baker"
                },
                {
                    name: "Aiysha Reese",
                    text: "We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!",
                    position: "Founder of Manage",
                    src: require('@/assets/images/avatar-aiysha.jpg'),
                    imgAlt: "Aiysha Reese"
                },
                {
                    name: "Arthur Clarke",
                    text: "Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.",
                    position: "Co-founder of MyPhysio",
                    src: require('@/assets/images/avatar-arthur.jpg'),
                    imgAlt: "Arthur Clarke"
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
