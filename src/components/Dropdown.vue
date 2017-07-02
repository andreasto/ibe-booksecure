<template>
  <div class="form-group dropdown" :class="classes" v-click-outside="closeDropDown">
    <div class="click-area" @click="toggleDropDown" :tabindex="tabindex">
      <i class="icon icon-left material-icons" v-show="iconLeft">{{iconLeft}}</i>
      <i class="icon icon-right material-icons" v-show="iconRight">{{iconRight}}</i>
      <div class="floating-label">{{label}}</div>
      <div class="selected-text">{{selectedText}}</div>

      <ul class="dropdown-list" v-show="showDropDown">
        <li v-for="(item, index) in items" @click="selectItem(item, index)" :class="{ selected: (itemValue ? item[itemValue] : item) === value}">
          {{ itemText ? item[itemText] : item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String },
    placeholder: { type: String },
    value: { type: String },
    items: { type: Array },
    itemValue: { type: String },
    itemText: { type: String },
    iconLeft: { type: String },
    iconRight: { type: String, default: 'keyboard_arrow_down' },
    tabindex: { type: Number, default: -1 }
  },
  data() {
    return {
      showDropDown: false,
      selectedText: this.placeholder,
      selectedIndex: 0
    }
  },
  computed: {
    classes: function () {
      return {
        'dropdown-open': this.showDropDown,
        'with-icon-left': this.iconLeft && this.iconLeft.length > 0,
        'with-icon-right': this.iconRight && this.iconRight.length > 0
      }
    }
  },
  methods: {
    closeDropDown() {
      this.showDropDown = false
    },
    toggleDropDown() {
      this.showDropDown = !this.showDropDown
    },
    selectItem(item, index) {
      console.log('item', item)
      console.log('index', index)

      this.selectedValue = this.itemValue ? item[this.itemValue] : item
      this.selectedText = this.itemText ? item[this.itemText] : item
      this.selectedIndex = index

      this.$emit('selectChanged', this.selectedValue)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
