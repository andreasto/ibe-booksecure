<template>
  <div class="color-boxes">
    <div class="box box-1"></div>
    <div class="box box-2"></div>
    <div class="box box-3"></div>
    <div class="box box-4"></div>
    <div class="box box-5"></div>
  </div>
</template>

<script>
</script>

<style lang="stylus" scoped>
  .color-boxes {
    text-align: center;
    padding: 20px;
    display: flex;
  }

  .box {
    width: 80px;
    height: 80px;
    margin: 10px;
  }

  .box-1 {
    background-color: color-primary;
  }
  .box-2 {
    background-color: color-primary-light;
  }
  .box-3 {
    background-color: color-primary-lighter;
  }
  .box-4 {
    background-color: color-primary-dark;
  }
  .box-5 {
    background-color: color-primary-darker;
  }
</style>