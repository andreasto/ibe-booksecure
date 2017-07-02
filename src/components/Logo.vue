<template>
  <div class="logo" :title="title"></div>
</template>

<script>
  export default {
    props: {
      title: { type: String }
    }
  }
</script>

<style lang="stylus" scoped>
.logo
  width logo-width
  height logo-height
  background: url(logo-url) no-repeat
  background-size 100%
</style>
