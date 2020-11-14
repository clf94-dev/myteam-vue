<template>
<b-container fluid class="meet-section">
    <h3>Meet the directors</h3>
    <b-row class="meet-row">
        <b-col class="card-col" xs="12" sm="6" md="4" lg="4" v-for="data of meet" v-bind:key="data.name">
            <MeetCard :info="data"></MeetCard>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import MeetCard from './MeetCard.vue'
export default {
    name: 'Meet',
    components: {
        MeetCard
    },
    data() {
        return {
            meet: [{
                    name: "Nikita Marks",
                    position: "Founder & CEO",
                    description: "“It always amazes me how much talent there is in every corner of the globe.” ",
                    src: require('@/assets/images/avatar-nikita.jpg'),
                    imgAlt: "Nikita Marks"
                },
                {
                    name: "Cristian Duncan",
                    position: "Co-founder & COO",
                    description: "“Distributed teams required unique processes. You need to approach work in a new way.”   ",
                    src: require('@/assets/images/avatar-christian.jpg'),
                    imgAlt: "Cristian Duncan"
                },
                {
                    name: "Cruz Hamer",
                    position: "Co-founder & CTO",
                    description: "“Technology is at the forefront of enabling distributed teams.That is where we come in.” ",
                    src: require('@/assets/images/avatar-cruz.jpg'),
                    imgAlt: "Cruz Hamer"
                }, {
                    name: "Drake Heaton",
                    position: "Business Development Lead",
                    description: "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.” ",
                    src: require('@/assets/images/avatar-drake.jpg'),
                    imgAlt: "Drake Heaton"
                },
                {
                    name: "Griffin Wise",
                    position: "Lead Marketing",
                    description: "“Unique perspectives shape unique products, which is what you need to survive these days.” ",
                    src: require('@/assets/images/avatar-griffin.jpg'),
                    imgAlt: "Griffin Wise"
                },
                {
                    name: "Aden Allan",
                    position: "Head of Talent",
                    description: "“Empowered teams create truly amazing products. Set the north star and let them follow it.” ",
                    src: require('@/assets/images/avatar-aden.jpg'),
                    imgAlt: "Aden Allan"
                }
            ]
        }
    }
}
</script>

<style scoped>
.meet-section {
    padding: 5% 7%;
}

.meet-section h3 {
    text-align: center;
    font-size: 30px;
    font-family: "Livvic", sans-serif;
    font-weight: 400;
    color: white;
    margin-bottom: 50px;
}

@media screen and (min-width: 480px) {
    .meet-section .meet-row {
        padding-left: 2%;
    }
}

.card-col {

    text-align: center;
}
</style>
