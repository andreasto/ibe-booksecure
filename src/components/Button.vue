<template>
  <button type="button" @click="buttonClick" :class="cssClass">{{text}}</button>
</template>

<script>
  export default {
    props: {
      text: { type: String, required: true },
      action: { type: Function, required: true },
      cssClass: { type: String, default: 'button' }
    },
    methods: {
      buttonClick (event) {
        this.action()
      }
    }
  }
</script>

<style scoped>
</style>
