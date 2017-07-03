<template>
  <div class="color-palette">
    <div class="box box-3" :class="colorClass + '-lighter'">Lighter</div>
    <div class="box box-2" :class="colorClass + '-light'">Light</div>
    <div class="box box-1" :class="colorClass">Normal</div>
    <div class="box box-4" :class="colorClass + '-dark'">Dark</div>
    <div class="box box-5" :class="colorClass + '-darker'">Darker</div>
  </div>
</template>

<script>
export default {
  props: [
    'color'
  ],
  computed: {
    colorClass() {
      return 'color-' + this.color
    }
  }
}
</script>

<style lang="stylus" scoped>
  .color-palette
    text-align center
    color white
    margin 0 auto
    border 1px solid

  .box
    display inline-block
    width 19%
    height 80px
    margin 0 0 10px
    border border-light
    border-radius border-radius

  .color-primary
    background-color color-primary
  .color-primary-light
    background-color color-primary-light
  .color-primary-lighter
    background-color color-primary-lighter
  .color-primary-dark
    background-color color-primary-dark
  .color-primary-darker
    background-color color-primary-darker

  .color-second
    background-color color-second
  .color-second-light
    background-color color-second-light
  .color-second-lighter
    background-color color-second-lighter
  .color-second-dark
    background-color color-second-dark
  .color-second-darker
    background-color color-second-darker

  .color-third
    background-color color-third
  .color-third-light
    background-color color-third-light
  .color-third-lighter
    background-color color-third-lighter
  .color-third-dark
    background-color color-third-dark
  .color-third-darker
    background-color color-third-darker
</style>
