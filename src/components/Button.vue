<template>
  <button type="button" @click="buttonClick">{{text}}</button>
</template>

<script>
  export default {
    props: [
      'text',
      'action'
    ],
    methods: {
      buttonClick (event) {
        this.action()
      }
    }
  }
</script>

<style scoped>
  button {
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, .2);
    position: relative;
    font-size: 16px;
    height: 50px;
    overflow: hidden;
    background: violet;
  }
</style>