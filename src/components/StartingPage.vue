<template>
  <div class="container">
      <h1>Welcome to the Medieval Twine Story</h1>
      <img :src="castle" alt="This is a picture of a castle" class="small-image"/>
      <router-link to="/intro" class="n-button n-button--primary">Start</router-link>
      <p>Created by: Jaden Kim</p>
  </div>
</template>

<script setup>
import castle from '@/assets/Castle.png';
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .n-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  background-color: #63e2b7; /* Naive UI primary color */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none; /* Removes underline from links */
  transition: background-color 0.2s;
}

.n-button--primary:hover {
  background-color: #7fe7c4; /* Slightly lighter shade for hover effect */
}
  
  .small-image {
    width: 200px;
    height: auto;
    margin-bottom: 20px; /* Adds space below the image */
  }
</style>
