<template>
  <nav class="navbar">
    <div class="navbar-cont">
      <div class="navbar-logo">
        <img @click="goToHome()" :src="logo" alt="myteam" />
      </div>
      <div class="menu-icon">
        <button class="nav-btn" @click="handleClick()">
          <span key="bars" v-if="!click"> <i class="fas fa-bars"></i></span>
          <span key="cross" v-else><i class="fas fa-times"></i></span>
        </button>
      </div>
      <ul :class="click ? 'nav-menu active' : 'nav-menu'">
        <li class="nav-item">
          <router-link :active-link="active" class="nav-links" to="/home">
            <button class="nav-btn" @click="closeMobile()">Home</button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :active-link="active" class="nav-links" to="/about"
            ><button class="nav-btn" @click="closeMobile()">
              About
            </button></router-link
          >
        </li>
        <button class="transparent-btn" @click="closeMobile(), goToContact()">
          Contact Us
        </button>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      logo: require("@/assets/images/logo.svg"),
      click: false,
    };
  },
  methods: {
    closeMobile() {
      this.click = false;
    },
    handleClick() {
      this.click = !this.click;
    },
    goToHome() {
      this.$router.push("/home");
    },
    goToContact() {
      this.$router.push("/contact");
    },
  },
};
</script>

<style scoped>
.nav-btn {
  position: relative;
  top: -10px;
  width: 150px;
  border: none;
  background: transparent;
}
.navbar {
  background-color: #014d56;
  height: 90px;
  display: center;
  justify-content: start;
  align-items: center;
  font-size: 15px;
}

.navbar .navbar-cont {
  display: flex;
  justify-content: start;
  height: 90px;
  max-width: 1600px;
}

.navbar .navbar-cont .navbar-logo {
  text-align: start;
  margin-left: 30px;
  margin-top: 25px;
  cursor: pointer;
  align-items: center;
}

@media screen and (min-width: 756px) {
  .navbar .navbar-cont .navbar-logo {
    margin-left: 100px;
  }
}

.navbar .navbar-cont .navbar-logo img {
  align-self: start;
  height: 40px;
}

@media screen and (max-width: 756px) {
  .navbar .navbar-cont .navbar-logo {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(6%, 10%);
  }
}

.navbar .navbar-cont .menu-icon {
  display: none;
}

@media screen and (max-width: 756px) {
  .navbar .navbar-cont .menu-icon {
    display: block;
    position: absolute;
    top: 40px;
    right: 0px;
    font-size: 1.8rem;
    z-index: 2;
    cursor: pointer;
  }
}

.navbar .navbar-cont .fa-bars,
.navbar .navbar-cont .fa-times {
  color: white;
}

.navbar .nav-menu {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 35px;
  list-style: none;
  text-align: center;
  justify-content: start;
  margin-left: 50px;
  align-items: center !important;
  margin-top: 15px;
}

.navbar .nav-menu .nav-links .nav-btn {
  font-size: 16px !important;
  color: white;
  position: relative;
  top: 3px;
}
.navbar .navbar-cont .nav-menu .nav-links.router-link-active .nav-btn {
  color: #79c8c7 !important;
}
.navbar .nav-menu .nav-links .nav-btn:hover {
  color: #f67e7e;
}
@media screen and (max-width: 756px) {
  .navbar .nav-menu {
    display: flex;
    flex-direction: column;
    padding-top: 7%;
    width: 80%;
    height: 100%;
    position: absolute;
    left: 100%;
    opacity: 0;
    transition: all 0.5s ease;
  }

  .navbar .navbar-cont .nav-menu.active .nav-links.router-link-active .nav-btn {
    color: #79c8c7 !important;
  }

  .navbar .nav-menu.active {
    background-color: #014d56;
    left: 10%;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
    height: 1000px;
  }

  .navbar .nav-menu.active .nav-links .nav-btn {
    font-size: 22px !important;
    color: white;
  }

  .navbar .nav-menu.active .nav-links .nav-btn:hover {
    cursor: pointer;
    color: #79c8c7;
  }

  .navbar .nav-menu.active li:first-child {
    margin-top: 70px;
  }
}

.navbar .nav-menu .nav-links {
  text-decoration: none;
  display: flex;
  align-items: center !important;
  justify-content: center;
  color: white;
  font-family: "Livvic", sans-serif;
}

.navbar .nav-menu .nav-links:hover {
  transition: all 0.3s ease;
  color: #f67e7e;
}

.navbar .nav-menu .nav-links-mobile {
  display: none;
}

.navbar .nav-menu .nav-links .nav-item {
  text-decoration: none;
}

.navbar .nav-menu .nav-links .nav-item a {
  color: white;
}

.navbar .nav-menu .nav-links .nav-item:hover {
  cursor: pointer;
}

.navbar .nav-menu .transparent-btn {
  height: 40px;
  width: 150px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid white;
  background-color: transparent;
  color: white;
}

@media screen and (min-width: 756px) {
  .navbar .nav-menu .transparent-btn {
    position: absolute;
    right: 40px;
    top: 25px;
  }
}

.navbar .nav-menu .transparent-btn:hover {
  transition: all 0.2s ease-out;
  background-color: white;
  color: #014d56 !important;
}
</style>
