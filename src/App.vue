<template>
<div class="w-screen h-screen bg-gray-800" >
    <div class="w-full h-full">
      <div class="container">
        <img class="logo" src="./assets/sherlock.png" />
        <HelloWorld msg="Sherlock Holmes Bookcase" />
        <bookcase text="testing"/>
      </div>
    </div>
  </div>
</template>

<script>
import Bookcase from './components/Bookcase.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Bookcase
  }
}
</script>

