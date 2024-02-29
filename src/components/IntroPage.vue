<template>
    <p>In the peaceful kingdom of Charlottesville, <br>
    King Alden and Queen Elara rule with wisdom and kindness. <br>
    The kingdom, known for its lush landscapes and prosperous people, enjoys an era of peace and prosperity.</p>
    <h1>HOWEVER</h1>
    <p>News arrives that the neighboring kingdom of Draegor, ruled by the ambitious King Varick, threatens war over a disputed territory rich in resources. <br> 
    The threat puts the realm in danger, causing unrest among the people of Aeloria.</p>
    <router-link to="/diplomacy" style="display: block; margin-bottom: 10px; text-decoration: none; color: #007BFF;">Choose Diplomacy</router-link>
    <router-link to="/war" style="display: block; text-decoration: none; color: #007BFF;">Choose War</router-link>
</template>

<script setup>

</script>

<style scoped>
.router-link-active, .router-link-exact-active, a:visited {
  color: #70c0e8; /* Set your desired color */
}
</style>