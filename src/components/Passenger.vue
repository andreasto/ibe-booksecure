<template>
    <div class="passenger">
        <div class="title">
            Passenger {{index}}
            <span class="passenger-type" v-if="passenger.type !== 'adult'">({{passenger.type}})</span>
        </div>
        <div class="passenger-info" v-if="passenger.type === 'infant' && infantInformation">{{infantInformation}}</div>
        <div class="form-elements clearfix">
            <ibe-dropdown v-model="passenger.title" :name="'passenger-' + index + '-title'" :items="passenger.type === 'adult' ? titlesAdults : titlesChildren" :validation="'required'" :label="'Title'" :placeholder="'Select title'" :min-width="'150px'"></ibe-dropdown>
            <ibe-input v-model="passenger.firstName" :name="'passenger-' + index + '-first-name'" :label="'First name'" :placeholder="'As given in passport/photo ID'" :validation="'required'"></ibe-input>
            <ibe-input v-model="passenger.lastName" :name="'passenger-' + index + '-last-name'" :label="'Last name'" :placeholder="'As given in passport/photo ID'" :validation="'required'"></ibe-input>
            <ibe-date-of-birth-selector v-model="passenger.dateOfBirth" :name="'passenger-' + index + '-dob'" :label="'Date of birth'" :required="true"></ibe-date-of-birth-selector>
        </div>
        <div class="contact-information" v-if="(index === 1 && enableContactInfoPrimaryPassenger) || enableContactInfoAllPassengers">
            <ibe-contact-information :contact-info="passenger.contactInformation"></ibe-contact-information>
        </div>
        <!-- {{passenger}} -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DateOfBirthSelector from '@/components/DateOfBirthSelector'
import ContactInformation from '@/components/ContactInformation'

export default {
    props: {
        passenger: { type: Object, required: true },
        index: Number
    },
    components: {
        'ibe-date-of-birth-selector': DateOfBirthSelector,
        'ibe-contact-information': ContactInformation
    },
    data() {
        return {
            infantInformation: window.bookSecure.texts.infantInformation,
            enableContactInfoPrimaryPassenger: window.bookSecure.settings.enableContactInfoPrimaryPassenger,
            enableContactInfoAllPassengers: window.bookSecure.settings.enableContactInfoAllPassengers
        }
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
    margin-bottom: 25px;
    border: $border-light;
    padding: 0 10px;
    background: white;
}

.passenger-info {
    margin-bottom: 10px;
    font-style: italic;
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
    background: $color-third;
    padding: 10px;
    margin: 0 -10px 15px;
}
</style>
