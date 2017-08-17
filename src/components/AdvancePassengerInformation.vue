<template>
    <div class="advance-passenger-information">
        <label class="label-checkbox">
            <input type="checkbox" v-model="showPassport" :id="idPrefix + '-show-passport-number'" :name="idPrefix + '-show-passport-number'"> I would like to complete Advance passenger information
        </label>

        <div class="form-elements clearfix" v-if="showPassport">
            <h3>Travel document</h3>
            <ibe-input v-model="passenger.passportNumber" :id="idPrefix + '-passport'" :name="idPrefix + '-passport'" :label="'Passport number'" :placeholder="'Enter passport number'" :validation="'required'"></ibe-input>
            <label class="label-confirm" :class="{'is-invalid': errors.has(idPrefix + '-passport-confirmed')}">
                <input type="checkbox" v-model="passportConfirmed" :id="idPrefix + '-passport-confirmed'" :name="idPrefix + '-passport-confirmed'" v-validate.passportConfirmed="'required'"> I confirm that the document information that I have provided is correct
                <div v-show="errors.has(idPrefix + '-passport-confirmed')" class="validation-message">{{ errors.first(idPrefix + '-passport-confirmed') }}</div>
            </label>

        </div>
    </div>
</template>

<script>
import { countries } from '@/core/countries'
export default {
    inject: ['$validator'],
    props: {
        passenger: { type: Object, required: true },
        index: { type: Number, required: true }
    },
    data() {
        return {
            countries,
            idPrefix: 'passenger-' + this.index,
            showPassport: this.passportNumber && this.passportNumber.length > 0,
            passportConfirmed: undefined
        }
    }
}
</script>

<style lang="scss" scoped>
@include media(">=tablet") {
    .form-elements {
        .input,
        .dropdown {
            float: left;
        }
    }
}

.label-checkbox,
.label-confirm {
    display: block;
    float: none;
    clear: both;
    margin-bottom: 15px;
}

.label-confirm {
    &.is-invalid input {
        outline: 1px solid $color-error;
    }
}

h3 {
    margin: 5px 0 10px 5px;
}
</style>
