<template>
  <div class="form-group dropdown">
    <label for="input">{{labelText}}</label>
    <select @change="changeSelect">
      <option value="">{{noneSelectedText}}</option>
      <option v-for="(item, index) in items" :value="item[itemValue]" :selected="item[itemValue] === value">{{ item[itemText] }}</option>
    </select>
    <i class="input-icon material-icons">keyboard_arrow_down</i>
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
  
  
</style>