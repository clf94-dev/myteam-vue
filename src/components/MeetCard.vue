<template>
  <div>
    <div :class="card1Classes">
      <img class="avatar" :src="info.src" :alt="info.imgAlt" />

      <p class="name">{{ info.name }}</p>

      <p class="position">{{ info.position }}</p>
    </div>
    <div :class="card2Classes">
      <p class="name">{{ info.name }}</p>
      <p class="description">{{ info.description }}</p>
      <div class="social-row" fxLayout="row wrap">
        <i class="fab fa-2x fa-twitter icon"></i>
        <i class="fab fa-2x fa-linkedin icon"></i>
      </div>
    </div>
    <button @click="changeState()" :class="classes">
      <img :src="imgSrc" :alt="imgAlt" />
    </button>
  </div>
</template>

<script>
export default {
  name: "MeetCard",
  props: ["info"],
  data() {
    return {
      Plus: require("@/assets/images/icon-cross.svg"),
      Cross: require("@/assets/images/icon-close.svg"),
      click: false,
      imgSrc: this.Plus,
      imgAlt: "More",
      classes: "btn coral",
      card1Classes: "info-card1 show",
      card2Classes: "info-card2  hide",
    };
  },
  methods: {
    changeState() {
      this.click = !this.click;
      if (!this.click) {
        this.imgSrc = this.Plus;
        this.imgAlt = "More";
        this.classes = "btn coral";
        this.card1Classes = " info-card1 show";
        this.card2Classes = "info-card2 hide";
      } else {
        this.imgSrc = this.Cross;
        this.imgAlt = "Close";
        this.classes = " btn light-blue";
        this.card1Classes = "info-card1 hide";
        this.card2Classes = "info-card2 show";
      }
    },
  },
};
</script>

<style scoped>
.card-col .info-card1 {
  padding-top: 25px;
  margin: 0 auto;
  width: 400px;
  height: 250px;
  background-color: #012d32;
}

.card-col .info-card1.show {
  transition: all 0.3s ease;
  display: block;
}

.card-col .info-card1.hide {
  transition: all 0.3s ease;
  display: none;
}

.card-col .info-card1 img {
  width: 100px;
  border: 2px solid white;
  border-radius: 50%;
  margin-bottom: 20px;
}

.card-col .info-card1 .name {
  font-size: 18px;
  font-family: "Livvic", sans-serif;
  color: #79c8c7;
  margin-bottom: 5px;
}

.card-col .info-card1 .position {
  font-size: 15px;
  font-family: "Livvic", sans-serif;
  color: white;
}

.card-col .info-card2 {
  margin: 0 auto;
  padding-top: 25px;
  width: 400px;
  height: 250px;
  background-color: #012d32;
}

@media screen and (max-width: 756px) {
  .card-col .info-card1 {
    width: 300px;
  }
  .card-col .info-card2 {
    width: 300px;
  }
}

.card-col .info-card2.show {
  transition: all 0.3s ease;
  display: block;
}

.card-col .info-card2.hide {
  transition: all 0.3s ease;
  display: none !important;
}

.card-col .info-card2 .name {
  font-size: 18px;
  font-family: "Livvic", sans-serif;
  color: #79c8c7;
  margin-bottom: 5px;
}

.card-col .info-card2 .description {
  padding: 5% 10%;
  font-size: 15px;
  font-family: "Livvic", sans-serif;
  color: white;
}

.card-col .info-card2 .social-row {
  margin-top: 15px;
  justify-content: center;
}

.card-col .info-card2 .social-row .icon {
  color: white;
  margin-right: 10px;
  margin-left: 10px;
}

.card-col .info-card2 .social-row .icon:hover {
  cursor: pointer;
  transition: all 0.3s ease;
  color: #f67e7e !important;
}

.card-col button {
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 50%;
  position: relative;
  top: -25px;
}

.card-col button.coral {
  background-color: #f67e7e;
}

.card-col button.light-blue {
  background-color: #79c8c7;
}

.card-col button:hover {
  cursor: pointer;
}
</style>
