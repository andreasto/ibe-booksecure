<template>
    <div class="form-group input" :class="classes">
        <div class="click-area">
            <i class="icon icon-left material-icons" v-show="iconLeft" v-html="iconLeft"></i>

            <label class="floating-label" for="input">{{label}}</label>
            <input :type="type" :value="value" :placeholder="placeholder" :id="id" :name="name" v-validate="validation" @input="$emit('input', $event.target.value)">
            <span v-show="errors.has(name)" class="validation-message">{{ errors.first(name) }}</span>
        </div>
    </div>
</template>

<script>
import { randomString } from '@/core/helpers'

export default {
    inject: ['$validator'],
    props: {
        id: { type: String, default: randomString(6) },
        name: { type: String, default: randomString(6) },
        value: String,
        label: String,
        validation: { type: String, default: '' },
        iconLeft: { type: String },
        placeholder: String,
        type: { type: String, default: 'text' }
    },
    computed: {
        classes () {
            return {
                'with-icon-left': this.iconLeft && this.iconLeft.length > 0,
                'is-invalid': this.errors.has(this.name),
                'required': this.isRequired
            }
        },
        isRequired() {
            return this.validation && this.validation.indexOf('required') > -1
        }
    }
}
</script>

<style lang="scss" scoped>
.form-group {
    &.with-icon-left {
        .click-area {
            padding-left: 0;
        }

        input {
            padding-left: $input-icon-padding;
        }
    }
}
</style>

