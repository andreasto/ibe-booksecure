<template>
    <div class="form-group input">
        <div class="click-area">
            <label class="floating-label" for="input">{{label}}</label>
            <input type="text" :value="value" :id="id" :name="name" v-validate="validation" :class="{'invalid': errors.has(name) }" @input="changeValue">
            <span v-show="errors.has(name)" class="validation-message">{{ errors.first(name) }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {type: String, default: 'djfs'},
        name: {type: String, default: 'djfs'},
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
