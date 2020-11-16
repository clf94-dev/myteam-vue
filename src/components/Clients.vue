<template>
<b-container fluid class="clients-section">
    <h3 data-aos='fade-right' data-aos-delay='200'>Some of our clients</h3>
    <b-row class="clients-row">
        <b-col class="logo" xs="12" sm="6" md="2" v-for="data of clients" v-bind:key="data.imgAlt">
            <img :src="data.src" :alt="data.imgAlt" data-aos='fade-left' :data-aos-delay="data.delay">
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
                    imgAlt: "Gadgets Now",
                    delay: 300
                },
                {
                    src: require('@/assets/images/logo-jakarta-post.png'),
                    imgAlt: "Jakarta Post",
                    delay: 500
                },
                {
                    src: require('@/assets/images/logo-tech-radar.png'),
                    imgAlt: "Tech Radar",
                    delay: 700
                },
                {
                    src: require('@/assets/images/logo-the-guardian.png'),
                    imgAlt: "The Guardian",
                    delay: 900
                },
                {
                    src: require('@/assets/images/logo-the-verge.png'),
                    imgAlt: "The Verge",
                    delay: 1100
                }
            ]
        }
    }
}
</script>

<style scoped>
.clients-section {
    padding: 10% 7%;
    text-align: center;
    background-color: #012d32;
}

@media screen and (min-width: 755px) {
    .clients-section {
        padding: 5% 7%;
    }
}

.clients-section h3 {
    font-size: 30px;
    font-family: "Livvic", sans-serif;
    font-weight: 400;
    color: white;
    margin-bottom: 20px;
}

.clients-section .clients-row {
    align-items: center;
}

@media screen and (min-width: 700px) {

    .clients-section .clients-row {
        padding-left: 5%;
    }
}

@media screen and (min-width: 1080px) {

    .clients-section .clients-row {
        padding-left: 200px;
    }
}

.clients-section .clients-row .logo {
    width: 100%;
    padding: 5% 2%;
}

@media screen and (min-width: 800px) {
    .clients-section .clients-row .logo {
        width: 16% !important;
    }
}

@media screen and (min-width: 480px) and (max-width: 800px) {
    .clients-section .clients-row .logo {
        width: 50%;
    }
}

@media screen and (min-width: 755px) {
    .clients-section .clients-row .logo {
        padding: 3% 2%;
    }
}

.clients-section .clients-row .logo img {
    width: 100%;
}

.clients-section .clients-row .logo img:hover {
    cursor: pointer;
    transition: all 0.3s ease;
    transform: scale(1.1);
}
</style>
