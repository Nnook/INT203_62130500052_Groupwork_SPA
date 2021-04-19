<template>
<div class="bg-gray-800">
  <img class=" h-auto w-auto" alt="BG" src="./assets/bg.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <p class="bg-sea  text-fuchsia-600 text-xl">wow</p>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
