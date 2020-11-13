<template>
<div>
    <div :class="card1Classes">
        <img class='avatar' :src="src" :alt="ImgAlt" />

        <p class='name'>{{name}}
        </p>

        <p class='position'>{{position}}
        </p>
    </div>
    <div :class="card2Classes">
        <p class='name'>{{name}}
        </p>
        <p class='description'>{{description}}</p>
        <div class="social-row" fxLayout='row wrap'>
            <i class='fab fa-2x fa-twitter'></i>
            <i class='fab fa-2x fa-linkedin'></i>
        </div>

    </div>
    <button @click="changeState()" :class="classes">
        <img :src="imgSrc" :alt="imgAlt">

    </button>
</div>
</template>

<script>
export default {
    name: 'MeetCard',
    props: [
        'name', 'position', 'description', 'imgalt', 'src'
    ],
    data() {
        return {
            Plus: require('@/assets/images/icon-cross.svg'),
            Cross: require('@/assets/images/icon-close.svg'),
            click: false,
            imgSrc: this.Plus,
            imgAlt: "More",
            classes: "btn coral",
            card1Classes: "info-card1 show",
            card2Classes: "info-card2  hide",
        }
    },
    methods: {
        changeState() {
            this.click = !this.click;
            if (!this.click) {
                this.imgSrc = this.Plus;
                this.imgAlt = "More";
                this.classes = "btn coral";
                this.card1Classes = "show";
                this.card2Classes = "hide";
            } else {
                this.imgSrc = this.Cross;
                this.imgAlt = "Close";
                this.classes = " btn light-blue";
                this.card1Classes = "hide";
                this.card2Classes = "show";
            }
        }
    }
}
</script>

<style scoped>

</style>
