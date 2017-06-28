<template>
  <footer>
    <h2>Footer</h2>
    <img src="./../assets/radixx-powered.png" alt="Powered by Radixx">
    <ibe-color-test></ibe-color-test>
  </footer>
</template>

<script>
  import ColorTest from './ColorTest'

  export default {
    components: {
      'ibe-color-test': ColorTest
    }
  }

</script>

<style scoped>
  footer {
    text-align: center;
    padding: 20px;
  }
</style>