<template>
<div class="form" @submit.prevent="showData()">
    <form class="form-col">
        <input data-aos='fade-left' data-aos-delay='300' :style="[submitted && (!$v.user.name.required || !$v.user.name.alpha || !$v.user.name.minLength ) ? {color: '#f67e7e', borderBottomColor: '#f67e7e'} : {color: 'white', borderBottomColor: '#2c6168'} ]" type="text" name='name' placeholder="Name" v-model="user.name">
        <div :style="{color: ' #f67e7e'}" v-if="submitted && !$v.user.name.required">
            The name is required</div>
        <div :style="{color: ' #f67e7e'}" v-if="submitted && !$v.user.name.alpha">
            The name must contain alphabetic characters</div>
        <div :style="{color: ' #f67e7e'}" v-if="submitted && !$v.user.name.minLength">
            The name must contain at least 2 characters</div>
        <input data-aos='fade-left' data-aos-delay='500' :style="[submitted && (!$v.user.email.required || !$v.user.email.email ) ? {color: '#f67e7e', borderBottomColor: '#f67e7e'} : {color: 'white', borderBottomColor: '#2c6168'} ]" type="text" name='email' placeholder="Email" v-model="user.email">
        <div :style="{color: ' #f67e7e'}" v-if="submitted && !$v.user.email.required">
            An Email Address is required</div>
        <div :style="{color: ' #f67e7e'}" v-if="submitted && !$v.user.email.email">
            Invalid Email Address </div>
        <input data-aos='fade-left' data-aos-delay='700' type="text" name='company' placeholder="Company" v-model="user.company">
        <input data-aos='fade-left' data-aos-delay='900' type="text" name='title' placeholder="Title" v-model="user.title">
        <textarea data-aos='fade-left' data-aos-delay='1100' placeholder="Your message..." :style="[submitted && (!$v.user.message.required || !$v.user.message.minLength ) ? {color: '#f67e7e', borderBottomColor: '#f67e7e'} : {color: 'white', borderBottomColor: '#2c6168'} ]" v-model="user.message" name="message" id="" cols="30" rows="10"></textarea>
        <div :style="{color: ' #f67e7e'}" v-if="submitted && !$v.user.message.required">
            A Message is required</div>
        <div :style="{color: ' #f67e7e'}" v-if="submitted && !$v.user.message.minLength">
            The message must contain at least 5 characters</div>
        <button data-aos='fade-left' data-aos-delay='1300' type="submit" class="submit-btn"> Submit </button>
    </form>
</div>
</template>

<script>
import {
    required,
    email,
    alpha,
    minLength
} from 'vuelidate/lib/validators'
export default {
    name: 'Form',

    validations: {
        user: {
            name: {
                required,
                minLength: minLength(2),
                alpha
            },

            email: {
                required,
                email
            },
            message: {
                required,
                minLength: minLength(5)
            }
        }
    },
    methods: {
        showData() {
            console.log(this.user),
                this.submitted = true;

            this.$v.$touch();
            if (this.$v.$invalid) {
                return false;
            }
        }
    },
    data() {
        return {
            submitted: false,
            user: {
                name: "",
                email: "",
                company: "",
                title: "",
                message: ""
            }
        }
    }
}
</script>

<style scoped>
.form-col {

    padding-top: 3%;
}

@media screen and (min-width: 1081px) {
    .form-col {
        padding: 2% 5%;
    }
}

input {
    width: 100%;
    outline: none;
    border: none;
    font-family: "Livvic", sans-serif;
    color: white;
    border-bottom: 1px solid #2c6168;
    background-color: transparent;
    height: 50px;
    margin-bottom: 15px;
}

input.error::placeholder {
    color: #f67e7e;
}

textarea {
    width: 100%;
    height: 150px;
    outline: none;
    border: none;
    font-family: "Livvic", sans-serif;
    color: white;
    border-bottom: 1px solid #2c6168;
    background-color: transparent;
    margin-bottom: 35px;
}

textarea.error::placeholder {
    color: #f67e7e;
}

.submit-btn {
    margin-top: 3%;
    margin-bottom: 10%;
    color: white;
    border: 1px solid #012d32;
    background-color: #012d32;
    border-radius: 25px;
    height: 50px;
    width: 200px;
    font-family: "Livvic", sans-serif;
}

.submit-btn:hover {
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: white;
    color: #014d56;
    border: 1px solid white;
}
</style>
