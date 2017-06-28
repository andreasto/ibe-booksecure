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

<style scoped>
  @import './../styles/shared.css';
  
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
    background-color: var(--color-primary);
  }
  .box-2 {
    background-color: var(--color-primary-light);
  }
  .box-3 {
    background-color: var(--color-primary-lighter);
  }
  .box-4 {
    background-color: var(--color-primary-dark);
  }
  .box-5 {
    background-color: var(--color-primary-darker);
  }
</style>