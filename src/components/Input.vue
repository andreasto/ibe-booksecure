<template>
    <div class="form-group input" :class="{'is-invalid': errors.has(name) }">
        <div class="click-area">
            <label class="floating-label" for="input">{{label}}</label>
            <input type="text" :value="value" :id="id" :name="name" v-validate="validation" @input="changeValue">
            <span v-show="errors.has(name)" class="validation-message">{{ errors.all() }}</span>
        </div>
    </div>
</template>

<script>
import {randomString} from '@/services/helpers'

export default {
    props: {
        id: { type: String, default: randomString(6) },
        name: { type: String, default: randomString(6) },
        value: String,
        label: String,
        validation: String
    },
    data() {
        return {
        }
    },
    methods: {
        changeValue(event) {
            this.$emit('valueChanged', event.target.value)
        }
    }
}
</script>
