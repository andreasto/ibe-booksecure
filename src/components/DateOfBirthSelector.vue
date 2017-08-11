<template>
    <div class="form-group date-of-birth" :class="{'is-invalid': errors.has(name), 'required': required }">
        <div class="click-area">
            <label class="floating-label">{{label}}</label>
            <input type="hidden" :value="value" :name="name" v-validate.dateOfBirth="'date_of_birth'">

            <select :name="name + '-dd'" v-model="day" class="day" @change="changeDateOfBirth" v-validate="'required'" :class="{'is-invalid': errors.has(name + '-dd'), 'has-value': day.length > 0 }">
                <option value="" disabled hidden>DD</option>
                <option v-for="d in days" :value="d">{{ d }}</option>
            </select>
            <select :name="name + '-mm'" v-model="month" class="month" @change="changeDateOfBirth" v-validate="'required'" :class="{'is-invalid': errors.has(name + '-mm'), 'has-value': month.length > 0 }">
                <option value="" disabled hidden>MM</option>
                <option v-for="m in months" :value="m">{{ m }}</option>
            </select>
            <select :name="name + '-yyyy'" v-model="year" class="year" @change="changeDateOfBirth" v-validate="'required'" :class="{'is-invalid': errors.has(name + '-yyyy'), 'has-value': year.length > 0 }">
                <option value="" disabled hidden>YYYY</option>
                <option v-for="y in years" :value="y">{{ y }}</option>
            </select>

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
        for (let y = 1900; y <= new Date().getFullYear(); y++) {
            this.years.push(y)
        }
        for (let m = 1; m <= 12; m++) {
            this.months.push(m < 10 ? '0' + m : m)
        }
        for (let d = 1; d <= 31; d++) {
            this.days.push(d < 10 ? '0' + d : d)
        }

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
            dateOfBirth: '',
            years: [],
            months: [],
            days: []
        }
    },
    methods: {
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

select {
    position: relative;
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
}

.month {
    border-left: $border-light;
    border-right: $border-light;
}

.year {
    border-radius: 0 4px 4px 0;
}

.day {
    border-radius: 4px 0 0 4px;
}

@include media(">=tablet") {
    .month,
    .day {
        width: 65px;
    }
    .year {
        width: 80px;
    }
}
</style>

