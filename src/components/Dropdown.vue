<template>
    <div class="form-group dropdown" :class="classes" :style="{minWidth: minWidth}">
        <div class="click-area">
            <i class="icon icon-left material-icons" v-show="iconLeft" v-html="iconLeft"></i>
            <i class="icon icon-right material-icons" v-show="iconRight" v-html="iconRight"></i>

            <label class="floating-label">{{label}}</label>

            <select :value="value" :id="id" :name="name" v-validate="validation" @change="$emit('input', $event.target.value)" :class="{ 'has-value': value && value.length > 0 }">
                <option value="" selected disabled v-if="showPlaceholder">{{placeholder}}</option>
                <option v-for="item in items" :value="itemValue ? item[itemValue] : item">{{ itemText ? item[itemText] : item }}</option>
            </select>
            <span v-show="errors.has(name)" class="validation-message">{{ errors.first(name) }}</span>
        </div>
    </div>
</template>

<script>
import { randomString } from '@/core/helpers'

export default {
    inject: ['$validator'],
    props: {
        label: { type: String },
        id: { type: String, default: randomString(6) },
        name: { type: String, default: randomString(6) },
        placeholder: { type: String },
        value: { type: String },
        items: { type: Array },
        itemValue: { type: String },
        itemText: { type: String },
        iconLeft: { type: String },
        iconRight: { type: String, default: '&#xE313;' },
        tabindex: { type: Number, default: -1 },
        validation: { type: String },
        minWidth: { type: String, default: '100px' }
    },
    data() {
        return {
            hidePlaceholder: false
        }
    },
    computed: {
        classes() {
            return {
                'with-icon-left': this.iconLeft && this.iconLeft.length > 0,
                'with-icon-right': this.iconRight && this.iconRight.length > 0,
                'is-invalid': this.errors.has(this.name),
                'required': this.isRequired
            }
        },
        isRequired() {
            return this.validation && this.validation.indexOf('required') > -1
        },
        showPlaceholder() {
            return this.placeholder && this.placeholder.length > 0 && (!this.value || this.value === '')
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.click-area {
    padding: 0;
}
</style>

