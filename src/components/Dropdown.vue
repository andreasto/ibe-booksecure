<template>
  <div class="dropdown">
    <label for="input">{{labelText}}</label>
    <select @change="changeSelect">
      <option value="">{{noneSelectedText}}</option>
      <option v-for="(item, index) in items" :value="item[itemValue]" :selected="item[itemValue] === value">{{ item[itemText] }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: [
      'labelText',
      'noneSelectedText',
      'value',
      'items',
      'itemValue',
      'itemText'
    ],
    methods: {
      changeSelect (event) {
        this.$emit('selectChanged', event.target.value)
      }
    }
  }
</script>

<style scoped>
  .dropdown {
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, .2);
    position: relative;
    font-size: 16px;
    height: 50px;
  }
  
  label {
    position: absolute;
    top: 4px;
    left: 11px;
    text-transform: uppercase;
    font-size: .7em;
  }
  
  select {
    padding: 18px 10px 8px 7px;
    line-height: 1.8em;
    font-size: 1em;
    height: 100%;
    border: none;
  }
</style>