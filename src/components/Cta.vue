<template>
<b-container fluid class="cta-section">
    <b-row>
        <b-col class="title-col" xs="12" sm="12" md="6" lg="6">
            <h2>Ready to get started?</h2>
        </b-col>
        <b-col class="btn-col" xs="12" sm="12" md="6" lg="6">
            <button class='transparent-btn' @click='goToContact()'>Contact Us</button>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'Cta',
    methods: {
        goToContact() {
            this.$router.push('/contact');
        }
    }
}
</script>

<style scoped>
.cta-section {
    background-color: #f67e7e;
    padding: 5% 7%;
}

@media screen and (max-width: 756px) {
    .cta-section {
        justify-content: center !important;
    }
}

.cta-section .title-col {
    color: #014d56;
    padding-top: 15px;
}

@media screen and (min-width: 756px) {
    .cta-section .title-col {
        padding-left: 5%;

    }
}

@media screen and (max-width: 756px) {
    .cta-section .title-col {
        text-align: center;

        padding-top: 10%;
        margin-bottom: 7%;
    }
}

@media screen and (max-width: 756px) {
    .cta-section .btn-col {
        margin-bottom: 50px;
    }
}

.cta-section .btn-col .transparent-btn {
    height: 50px;
    width: 100%;
    margin: 15px 0;
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid #014d56;
    background-color: transparent;
    color: #014d56;
}

@media screen and (min-width: 756px) {
    .cta-section .btn-col .transparent-btn {
        margin: 15px 40%;
        width: 250px;
        height: 40px;
        border-radius: 20px;
    }
}

.cta-section .btn-col .transparent-btn:hover {
    transition: all 0.2s ease-out;
    background-color: #014d56;
    border-color: #014d56;
    color: white;
}
</style>
