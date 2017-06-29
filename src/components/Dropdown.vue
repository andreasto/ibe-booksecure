<template>
  <div class="form-group dropdown" :class="classes">
    <label class="floating-label" for="input">{{label}}</label>
    <select @change="changeSelect">
      <option value="">{{noneSelectedText}}</option>
      <option v-for="(item, index) in items" :value="(itemValue ? item[itemValue] : item)" :selected="(itemValue ? item[itemValue] : item) === value">
        {{ itemText ? item[itemText] : item }}
      </option>
    </select>
    <i class="icon icon-left material-icons" v-show="iconLeft">{{iconLeft}}</i>
    <i class="icon icon-right material-icons" v-show="iconRight">{{iconRight}}</i>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String },
    noneSelectedText: { type: String },
    value: { type: String },
    items: { type: Array },
    itemValue: { type: String },
    itemText: { type: String },
    iconLeft: { type: String },
    iconRight: { type: String, default: 'keyboard_arrow_down' }
  },
  data() {
    return {
      classes: {
        'with-icon-left': this.iconLeft && this.iconLeft.length > 0,
        'with-icon-right': this.iconRight && this.iconRight.length > 0
      }
    }
  },
  methods: {
    changeSelect(event) {
      this.$emit('selectChanged', event.target.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .with-icon-left
    select
      text-indent 38px

    .floating-label
      left 50px

  .with-icon-right
    select
      padding-right 40px
</style>
