<template>
    <h1>Charlottesville begins fortifying its defenses, training soldiers, and gathering resources for a potential conflict.</h1>
    <n-button v-if="defense === false" strong secondary type="info" @click="prepareDefense">Prepare Defense</n-button>
    <n-button v-if="train === false" strong secondary type="info" @click="trainSoldiers">Train Soldiers</n-button>
    <n-button v-if="resources === false" strong secondary type="info" @click="gatherResources">Gather Resources</n-button>
    <router-link v-if="defense && train && resources" to="/endingWar">GO TO BATTLE</router-link>
</template>

<script setup>
import { ref } from 'vue';
const defense = ref(false);
const train = ref(false);
const resources = ref(false);

function prepareDefense() {
    defense.value = true;
}
function trainSoldiers() {
    train.value = true;
}
function gatherResources() {
    resources.value = true;
}
</script>

<style scoped>
.router-link-active, .router-link-exact-active, a:visited {
  color: #70c0e8; /* Set your desired color */
}
</style>