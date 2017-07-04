<template>
    <div class="passenger">
        <div class="title">Passenger {{index}}</div>
        <div class="form-elements clearfix">
            <ibe-dropdown :items="titlesAdults" :value="passenger.tile" :label="'Title'" :placeholder="'Select title'" :min-width="'140px'"></ibe-dropdown>
            <ibe-input :id="'some-id'" :name="'firstName'" :value="passenger.firstName" :label="'First name'" :validation="'required'" @valueChanged="passenger.firstName = $event"></ibe-input>
            <ibe-input :id="'some-id'" :name="'lastName'" :value="passenger.lastName" :label="'Last name'" :validation="'required'" @valueChanged="passenger.lastName = $event"></ibe-input>
            <ibe-input :id="'some-id'" :name="'email'" :value="passenger.email" :label="'E-mail'" :validation="'required|email'" @valueChanged="passenger.email = $event"></ibe-input>
            <ibe-input :id="'some-id'" :name="'phone'" :value="passenger.phone" :label="'Phone'" :validation="'required'" @valueChanged="passenger.phone = $event"></ibe-input>
        </div>
        {{passenger}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        passenger: Object,
        index: Number
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

.form-elements {
    @include media(">tablet") {
        display: flex;
    }
}

.title {
    font-size: 22px;
    margin-bottom: 10px;
}
</style>
