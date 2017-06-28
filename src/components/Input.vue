<template>
  <div class="input">
    <label for="input">Label text</label>
    <input type="text" :value="value" @input="changeMessage">
  </div>
</template>

<script>
  export default {
    props: [
      'value'
    ],
    data () {
      return {
      }
    },
    methods: {
      changeMessage (event) {
        this.$emit('messageChanged', event.target.value)
      }
    }
  }
</script>

<style scoped>
  .input {
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, .2);
    position: relative;
    font-size: 16px;
  }
  
  label {
    position: absolute;
    top: 4px;
    left: 11px;
    text-transform: uppercase;
    font-size: .7em;
  }
  
  input {
    padding: 18px 10px 8px;
    line-height: 1.8em;
    font-size: 1em;
    height: 100%;
  }
</style>