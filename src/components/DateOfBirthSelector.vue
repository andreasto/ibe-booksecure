<template>
    <div class="form-group date-of-birth" :class="{'is-invalid': errors.has(name) }">
        <div class="click-area">
            <label class="floating-label">
                {{label}} {{value}}
                <span class="required-asterisk" v-if="isRequired"></span>
            </label>
            <input type="hidden" :name="name" v-validate:dateOfBirth="'required|min:8'" :value="value">
            <input type="tel" maxlength="4" class="year" :value="year" placeholder="YYYY" :id="id + 'yyyy'" @input="changeYear">
            <input type="tel" maxlength="2" class="month" :value="month" placeholder="MM" :id="id + 'mm'" @input="changeMonth">
            <input type="tel" maxlength="2" class="day" :value="day" placeholder="DD" :id="id + 'dd'" @input="changeDay">
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
        validation: String
    },
    mounted() {
        this.year = this.value.substr(0, 4)
        this.month = this.value.substr(4, 2)
        this.day = this.value.substr(6, 2)
    },
    data() {
        return {
            year: '',
            month: '',
            day: ''
        }
    },
    computed: {
        isRequired() {
            return this.validation.indexOf('required') > -1
        },
        dateOfBirth() {
            return this.year + this.month + this.day
        }
    },
    methods: {
        changeYear(event) {
            this.year = event.target.value
            let dob = this.year + this.month + this.day
            this.$emit('input', dob)
        },
        changeMonth(event) {
            this.month = event.target.value
            let dob = this.year + this.month + this.day
            this.$emit('input', dob)
        },
        changeDay(event) {
            this.day = event.target.value
            let dob = this.year + this.month + this.day
            this.$emit('input', dob)
        }
    }
}
</script>

<style lang="scss" scoped>
.click-area {
    padding: 0;
}

input {
    padding: 15px 0 0 0;
    border-radius: 0;
}

label {
    background: white;
}

.year,
.month,
.day {
    float: left;
    display: block;
    min-width: 40px;
    width: 33.33%;
    text-align: center;
    border-left: $border-light;
}
.year {
    border-radius: 4px 0 0 4px;
}
.day {
    border-radius: 0 4px 4px 0;
}
@include media(">=tablet") {
    .month,
    .day {
        width: 50px;
    }
    .year {
        width: 80px;
    }
}
</style>

