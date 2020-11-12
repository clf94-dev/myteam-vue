<template>
<div>
    <TopAbout></TopAbout>
    <Meet></Meet>
    <Clients></Clients>
    <Cta></Cta>
</div>
</template>

<script>
import TopAbout from '../TopAbout.vue'
import Meet from '../Meet.vue'
import Clients from '../Clients.vue'
import Cta from '../Cta.vue'
export default {
    name: 'About',
    components: {
        TopAbout,
        Meet,
        Clients,
        Cta
    }
}
</script>

<style scoped>

</style>
