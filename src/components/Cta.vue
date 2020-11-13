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

</style>
