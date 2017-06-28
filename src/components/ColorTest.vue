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

:root {
  /* Typography */
  --h1: 2rem;
  --h2: 1.5rem;
  --h3: 1.25rem;
  --h4: 1rem;
  --h5: 0.875rem;
  --h6: 0.75rem;

  /* Colors */
  --color-red: red;
  --color-primary: #3F3075;
  --color-primary-light: color(var(--color-primary) lightness(30%));
  --color-primary-lighter: color(var(--color-primary) lightness(10%));
  --color-primary-dark: color(var(--color-primary) shade(10%));
  --color-primary-darker: color(var(--color-primary) lightness(30%));

  --color-secondary: #872D62;
  --color-secondary-light: color(var(--color-secondary) lightness(30%));
  --color-secondary-lighter: color(var(--color-secondary) lightness(10%));
  --color-secondary-dark: color(var(--color-secondary) shade(10%));
  --color-secondary-darker: color(var(--color-secondary) lightness(30%));
}

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