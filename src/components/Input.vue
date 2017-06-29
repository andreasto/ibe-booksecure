<template>
  <div class="form-group input">
    <label class="floating-label" for="input">{{label}}</label>
    <input type="text" :value="value" @input="changeValue">
  </div>
</template>

<script>
  export default {
    props: [
      'value',
      'label'
    ],
    data () {
      return {
      }
    },
    methods: {
      changeValue (event) {
        this.$emit('valueChanged', event.target.value)
      }
    }
  }
</script>

<style lang="stylus" scoped>


</style>
