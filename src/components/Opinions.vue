<template>
<b-container fluid class="opinions-section">
    <div class="title">

        <h2 data-aos='fade-right'>Delivering real results for top companies. Some of our
            <h2 data-aos='fade-right' class='color'>success stories.</h2>
        </h2>
    </div>
    <b-row class="opinions-row">
        <b-col class="opinion-col" xs="12" sm="12" md="4" lg="4" v-for="data of opinions" v-bind:key="data.name" data-aos='fade-up' :data-aos-delay="data.delay">
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
                    imgAlt: "Kady Baker",
                    delay: 200
                },
                {
                    name: "Aiysha Reese",
                    text: "We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!",
                    position: "Founder of Manage",
                    src: require('@/assets/images/avatar-aiysha.jpg'),
                    imgAlt: "Aiysha Reese",
                    delay: 400
                },
                {
                    name: "Arthur Clarke",
                    text: "Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.",
                    position: "Co-founder of MyPhysio",
                    src: require('@/assets/images/avatar-arthur.jpg'),
                    imgAlt: "Arthur Clarke",
                    delay: 600
                }
            ]
        }
    }
}
</script>

<style scoped>
.opinions-section {
    padding: 30% 7%;
}

@media screen and (min-width: 756px) {
    .opinions-section {
        padding: 10% 7%;
    }
}

.opinions-section .title {
    text-align: center;
}

@media screen and (min-width: 756px) {
    .opinions-section .title {
        text-align: center;
    }
}

.opinions-section .title h2 {
    font-size: 30px;
    font-family: "Livvic", sans-serif;
    font-weight: 400;
    color: white;
    margin-bottom: 10px;
}

@media screen and (min-width: 756px) {
    .opinions-section .title h2 {
        margin-bottom: 30px;
    }
}

.opinions-section .title h2.color {
    color: #79c8c7;
}

.opinions-section .opinions-row .opinion-col {

    text-align: center;
}

.opinions-section .opinions-row .opinion-col .quotes {
    position: relative;
    top: 40px;
    z-index: -1;
}

.opinions-section .opinions-row .opinion-col p {
    font-size: 18px;
    color: white;
    font-weight: 300;
    padding: 0 7% 20px;
}

.opinions-section .opinions-row .opinion-col p.position {
    margin-top: 10px;
    font-size: 15px;
}

.opinions-section .opinions-row .opinion-col h3 {
    font-size: 18px;
    color: #79c8c7;
    font-weight: 400;
}

.opinions-section .opinions-row .opinion-col .avatar {
    width: 80px;
    border: 2px solid white;
    border-radius: 50%;
    margin-bottom: 20px;
}
</style>
