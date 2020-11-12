<template>
<b-container fluid class="footer-section">
    <b-row>
        <b-col class="logo-col" xs="12" sm="6" md="3" lg="3">
            <img :src="logo" alt="myteam">
            <b-row class="links-row">
                <b-col class="link-col" xs="6" sm="6" md="6" lg="6">
                    <a class="links home"> Home</a>
                </b-col>
                <b-col class="link-col" xs="6" sm="6" md="6" lg="6">
                    <a class="links about"> About</a>
                </b-col>

            </b-row>
        </b-col>
        <b-col class="dir-col" xs="12" sm="6" md="3" lg="3">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
        </b-col>
        <b-col class="social-hidden-col" xs="12" sm="6" md="3" lg="3">

            <div class='hidden'> <i class='fab fa-facebook'></i>
                <i class='fab fa-pinterest'></i>
                <i class='fab fa-twitter'></i>
            </div>
        </b-col>
        <b-col class="social-col" xs="12" sm="6" md="3" lg="3">
            <b-row>
                <b-col class="social-row" xs="12" sm="6" md="12" lg="12">
                    <i class='fab fa-facebook'></i>
                    <i class='fab fa-pinterest'></i>
                    <i class='fab fa-twitter'></i>
                </b-col>
                <b-col class="copy" xs="12" sm="6" md="12" lg="12">
                    <p>Copyright 2020. All Rights Reserved</p>
                </b-col>

            </b-row>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            logo: require('@/assets/images/logo.svg')
        }
    }
}
</script>

<style scoped>

</style>
