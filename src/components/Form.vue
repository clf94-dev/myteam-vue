<template>
<form class="form-col">
    <input type="text" placeholder="Name">
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Company">
    <input type="text" placeholder="Title">
    <textarea placeholder="Your message..." name="message" id="" cols="30" rows="10"></textarea>

    <button type="submit" class="submit-btn"> Submit </button>
</form>
</template>

<script>
export default {
    name: 'Form'
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
