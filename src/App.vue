<template>
<div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
    name: 'App',
    components: {
        Navbar,
        Footer
    }
}
</script>

<style>
body {
    overflow-x: hidden;
    background-color: hsl(186, 98%, 17%);
    border: none !important;
    margin: 0px !important;
    padding: 0 !important;
    font-family: 'Livvic', sans-serif;
}
</style>
