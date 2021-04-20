<template>
<div class="w-screen h-screen bg-sherlock bg-gray-800" >
    <div class="w-full h-full">
      <div class="container">
        <img class="logo" src="./assets/sherlock.png" />
        <HelloWorld msg="Welcome to VueCLI project" />
      </div>
    </div>
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

