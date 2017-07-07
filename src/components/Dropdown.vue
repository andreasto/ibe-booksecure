<template>
    <div class="form-group dropdown" :class="classes" v-click-outside="closeDropDown" :style="{minWidth: minWidth}">
        <div class="click-area" @click="toggleDropDown" :tabindex="tabindex">
            <i class="icon icon-left material-icons" v-show="iconLeft" v-html="iconLeft"></i>
            <i class="icon icon-right material-icons" v-show="iconRight" v-html="iconRight"></i>
            <i class="icon icon-close material-icons" v-show="showDropDown">&#xE5CD;</i>

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
import _ from 'lodash'

export default {
    mounted() {
        this.selectedText = _.find(this.items, (item, index) => {
            let currentValue = this.selectedValue ? item[this.selectedValue] : item
            return currentValue === this.value
        })
        this.selectedIndex = _.findIndex(this.items, (item, index) => {
            let currentValue = this.selectedValue ? item[this.selectedValue] : item
            return currentValue === this.value
        })
    },
    props: {
        label: { type: String },
        placeholder: { type: String },
        value: { type: String },
        items: { type: Array },
        itemValue: { type: String },
        itemText: { type: String },
        iconLeft: { type: String },
        iconRight: { type: String, default: '&#xE313;' },
        tabindex: { type: Number, default: -1 },
        minWidth: { type: String, default: '100px' }
    },
    data() {
        return {
            showDropDown: false,
            selectedText: '',
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
            this.selectedValue = this.itemValue ? item[this.itemValue] : item
            this.selectedText = this.itemText ? item[this.itemText] : item
            this.selectedIndex = index

            this.$emit('valueChanged', this.selectedValue)
        }
    }
}
</script>
