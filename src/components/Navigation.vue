<template>
    <div class="navigation">
        <button :class="{active: currentRoute === 'Home' || currentRoute === 'Search'}" @click="navigateTo('/')" :disabled="!canAccessSearch">
            <i>1</i>Search</button>
        <button :class="{active: currentRoute === 'Select'}" @click="navigateTo('/select')" :disabled="!canAccessSelect">
            <i>2</i>Select</button>
        <button :class="{active: currentRoute === 'Information'}" @click="navigateTo('/information')" :disabled="!canAccessInformation">
            <i>3</i>Information</button>
        <button :class="{active: currentRoute === 'Options'}" @click="navigateTo('/options')" :disabled="!canAccessOptions">
            <i>4</i>Options</button>
        <button :class="{active: currentRoute === 'Payment'}" @click="navigateTo('/payment')" :disabled="!canAccessPayment">
            <i>5</i>Payment</button>
        <button :class="{active: currentRoute === 'Receipt'}" @click="navigateTo('/receipt')" :disabled="!canAccessReceipt">
            <i>6</i>Receipt</button>
        <div class="error" v-show="showError">Can't navigate to this</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        currentRoute() {
            return this.$route.name
        },
        ...mapGetters(
            'navigation',
            [
                'showError',
                'canAccessSearch',
                'canAccessSelect',
                'canAccessInformation',
                'canAccessOptions',
                'canAccessPayment',
                'canAccessReceipt'
            ])
    },
    methods: {
        ...mapActions(
            'navigation',
            [
                'navigateTo'
            ]
        )
    }
}
</script>

<style lang="scss" scoped>
.navigation {
    text-align: center;
    position: relative;
    font-size: 1.2em;
}

button {
    background: white;
    text-align: center;
    border: none;
    margin: 0 4px;
    cursor: pointer;

    &[disabled] {
        cursor: default;
        opacity: .5;
    }

    &:focus {
        outline: none;
    }

    i {
        display: block;
        margin: 0 auto 5px;
        border: $border-light;
        box-shadow: $box-shadow-light;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        line-height: 40px;
    }
}

.active {
    font-weight: $font-weight-bold;

    i {
        background: $color-primary;
        color: white;
    }
}

.disabled {
    color: rgba(0, 0, 0, .2);
    cursor: default;
}

.error {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: red;
}
</style>
