<template>
  <b-container fluid class="footer-section">
    <b-row>
      <b-col class="logo-col" xs="12" sm="6" md="3" lg="3">
        <img :src="logo" alt="myteam" />
        <b-row class="links-row">
          <b-col class="link-col" xs="6" sm="6" md="6" lg="6">
            <router-link class="links home" to="/home"> Home</router-link>
          </b-col>
          <b-col class="link-col" xs="6" sm="6" md="6" lg="6">
            <router-link class="links about" to="/about"> About</router-link>
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
        <div class="hidden">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </b-col>
      <b-col class="social-col" xs="12" sm="6" md="3" lg="3">
        <b-row>
          <b-col class="social-row" xs="12" sm="6" md="12" lg="12">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-pinterest"></i>
            <i class="fab fa-twitter"></i>
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
  name: "Footer",
  data() {
    return {
      logo: require("@/assets/images/logo.svg"),
    };
  },
};
</script>

<style scoped>
.footer-section {
  background-color: #012d32;
  padding: 5% 7%;
}

@media screen and (max-width: 756px) {
  .footer-section {
    text-align: center;
  }
}

.footer-section .logo-col img {
  height: 30px;
  margin-bottom: 15px;
}

.footer-section .logo-col .links-row .link-col {
  margin-bottom: 20px;
  width: 50%;
}

.footer-section .logo-col .links-row .link-col .links {
  text-align: center;

  cursor: pointer !important;
  text-decoration: none !important;
  color: white !important;
}

.footer-section .logo-col .links-row .link-col .links:hover {
  transition: all 0.3s ease;
  color: #f67e7e !important;
}

@media screen and (max-width: 756px) {
  .footer-section .logo-col .links-row .link-col .links.home {
    position: relative;
    left: 45px;
  }
}

@media screen and (max-width: 756px) {
  .footer-section .logo-col .links-row .link-col .links.about {
    position: relative;
    left: -45px;
  }
}

.footer-section .dir-col {
  width: 100%;
  color: white;
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 25px;
}

@media screen and (max-width: 1080px) {
  .footer-section .dir-col {
    text-align: end;
  }
}

@media screen and (max-width: 756px) {
  .footer-section .dir-col {
    text-align: center;
  }
}

.footer-section .social-hidden-col .hidden {
  display: none;
}

@media screen and (min-width: 756px) and (max-width: 1080px) {
  .footer-section .social-hidden-col .hidden {
    display: block;
    color: white;
  }

  .footer-section .social-hidden-col .hidden i {
    cursor: pointer;
    margin-right: 10px;
  }

  .footer-section .social-hidden-col .hidden i:hover {
    transition: all 0.3s ease;
    color: #f67e7e;
  }
}

@media screen and (min-width: 756px) and (max-width: 1080px) {
  .footer-section .social-col .copy {
    text-align: end;
    margin-left: 50%;
  }
}

.footer-section .social-col .copy p {
  font-size: 12px;
  color: white;
  font-family: "Livvic", sans-serif;
  font-weight: 300;
}

.footer-section .social-col .social-row {
  width: 100%;
  margin-bottom: 10px;
  display: block;
  color: white;
  margin-top: 10px;
}

@media screen and (min-width: 800px) {
  .footer-section .social-col .social-row {
    width: 100%;
  }
}

@media screen and (min-width: 1080px) {
  .footer-section .social-col .social-row {
    margin-bottom: 40px;
  }
}

@media screen and (min-width: 756px) and (max-width: 1080px) {
  .footer-section .social-col .social-row {
    display: none !important;
  }
}

.footer-section .social-col .social-row i {
  cursor: pointer;
  margin-right: 10px;
}

.footer-section .social-col .social-row i:hover {
  transition: all 0.3s ease;
  color: #f67e7e;
}
</style>
