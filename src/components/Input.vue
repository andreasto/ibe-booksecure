<template>
    <div class="form-group input" :class="{'is-invalid': errors.has(name) }">
        <div class="click-area">
            <label class="floating-label" for="input">{{label}}
                <span class="required-asterisk" v-if="isRequired"></span>
            </label>
            <input type="text" :value="value" :placeholder="placeholder" :id="id" :name="name" v-validate="validation" @input="$emit('input', $event.target.value)">
            <span v-show="errors.has(name)" class="validation-message">{{ errors.first(name) }}</span>
        </div>
    </div>
</template>

<script>
import { randomString } from '@/services/helpers'

export default {
    inject: ['$validator'],
    props: {
        id: { type: String, default: randomString(6) },
        name: { type: String, default: randomString(6) },
        value: String,
        label: String,
        validation: String,
        placeholder: String
    },
    computed: {
        isRequired() {
            return this.validation.indexOf('required') > -1
        }
    }
}
</script>
