<template>
<nav class='navbar'>
    <div class="navbar-cont">
        <div class='navbar-logo'>
            <img :src="logo" alt="myteam" />
        </div>
        <div class="menu-icon">
            <i class='fas fa-bars'></i>
        </div>
        <ul class='nav-menu'>
            <li class="nav-item">
                <router-link class="nav-links" to='/home'> Home</router-link>

            </li>
            <li class="nav-item">
                <router-link class="nav-links" to='/about'> About</router-link>
            </li>
            <button class='transparent-btn'> Contact Us</button>
        </ul>

    </div>
</nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            logo: require('@/assets/images/logo.svg')
        }
    }
}
</script>

<style scoped>

</style>
