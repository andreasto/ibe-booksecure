<template>
    <div class="form-group date-of-birth" :class="{'is-invalid': errors.has(name), 'required': required }">
        <div class="click-area">
            <label class="floating-label">{{label}}</label>
            <input type="hidden" :value="value" :name="name" v-validate.dateOfBirth="'date_of_birth'">
            <input type="tel" maxlength="4" class="year" v-model="year" :name="name + '-yyyy'" placeholder="YYYY" v-validate="'required|year'" :id="id + 'yyyy'" :class="{'is-invalid': errors.has(name + '-yyyy') }" @input="changeYear(); changeDateOfBirth()">
            <input type="tel" maxlength="2" class="month" v-model="month" :name="name + '-mm'" placeholder="MM" v-validate="'required|month'" :id="id + 'mm'" :class="{'is-invalid': errors.has(name + '-mm') }" @input="changeMonth(); changeDateOfBirth()">
            <input type="tel" maxlength="2" class="day" v-model="day" :name="name + '-dd'" placeholder="DD" v-validate="'required|day'" :id="id + 'dd'" :class="{'is-invalid': errors.has(name + '-dd') }" @input="changeDateOfBirth">
            <span v-show="errors.has(name)" class="validation-message">{{ errors.first(name) }}</span>
            <span v-show="errors.has(name + '-yyyy')" class="validation-message">{{ errors.first(name + '-yyyy') }}</span>
            <span v-show="errors.has(name + '-mm')" class="validation-message">{{ errors.first(name + '-mm') }}</span>
            <span v-show="errors.has(name + '-dd')" class="validation-message">{{ errors.first(name + '-dd') }}</span>
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
        required: Boolean
    },
    mounted() {
        this.year = this.value.substr(0, 4)
        this.month = this.value.substr(5, 2)
        this.day = this.value.substr(8, 2)
        this.dateOfBirth = `${this.year}-${this.month}-${this.day}`
    },
    data() {
        return {
            year: '',
            month: '',
            day: '',
            dateOfBirth: ''
        }
    },
    methods: {
        changeYear() {
            console.log('change year')
        },
        changeMonth() {
            console.log('change month')
        },
        changeDateOfBirth() {
            this.dateOfBirth = `${this.year}-${this.month}-${this.day}`
            this.$emit('input', this.dateOfBirth)
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

