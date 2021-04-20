<template>
  <div class="container">
    <base-card>
      <div class="container">
        <h1 class="topic">{{ msg }}</h1>
        <p class="text-sea">Arthur Ignatius Conan Doyle</p>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

