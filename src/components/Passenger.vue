<template>
    <div class="passenger">
        <div class="title">Passenger {{index}}
            <span class="passenger-type" v-if="passenger.type !== 'adult'">({{passenger.type}})</span>
        </div>
        <div class="form-elements clearfix">
            <ibe-dropdown :items="titlesAdults" :value="passenger.tile" :label="'Title'" :placeholder="'Select title'" :min-width="'140px'" @valueChanged="passenger.title = $event"></ibe-dropdown>
            <ibe-input :name="'passenger-' + index + '-first-name'" v-model="passenger.firstName" :label="'First name'" :placeholder="'As given in passport/photo ID'" :validation="'required'"></ibe-input>
            <ibe-input :name="'passenger-' + index + '-last-name'" v-model="passenger.lastName" :label="'Last name'" :placeholder="'As given in passport/photo ID'" :validation="'required'"></ibe-input>
            <ibe-date-of-birth-selector :name="'passenger-' + index + '-dob'" v-model="passenger.dateOfBirth" :label="'Date of birth'" :validation="'required|date_format:{DDMMYYYY}'"></ibe-date-of-birth-selector>
        </div>
        {{passenger}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DateOfBirthSelector from '@/components/DateOfBirthSelector'

export default {
    props: {
        passenger: Object,
        index: Number
    },
    components: {
        'ibe-date-of-birth-selector': DateOfBirthSelector
    },
    computed: {
        ...mapGetters(
            'search',
            [
                'titlesAdults',
                'titlesChildren'
            ]
        )
    }
}
</script>

<style lang="scss" scoped>
.passenger {
    margin-bottom: 20px;
}

@include media(">=tablet") {
    .form-elements {
        .input,
        .dropdown,
        .date-of-birth {
            float: left;
        }
    }
}

.title {
    font-size: 22px;
    margin-bottom: 10px;
}
</style>
