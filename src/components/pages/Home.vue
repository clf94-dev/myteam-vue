<template>
<div>
    <TopHome></TopHome>
    <FeaturesHome></FeaturesHome>
    <Opinions></Opinions>
    <Cta></Cta>
</div>
</template>

<script>
import TopHome from '../TopHome.vue'
import FeaturesHome from '../FeaturesHome.vue'
import Opinions from '../Opinions.vue'
import Cta from '../Cta.vue'
export default {
    name: 'Home',
    components: {
        TopHome,
        FeaturesHome,
        Opinions,
        Cta
    }
}
</script>

<style scoped>

</style>
