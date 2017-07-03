<template>
    <div class="flight" @click="selectFlight(flight)" :class="classes">
        Flight data:
        <br> {{flight}}
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        flight: Object
    },
    data() {
        return {
            classes: {
                selected: this.flight.selected
            },
            selectedFlight: null
        }
    },
    methods: {
        ...mapActions(
            'cart',
            [
                'selectFlight'
            ])
    }
}
</script>

<style lang="scss" scoped>
.flight {
    border: 1px solid;
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    font-size: 22px;
    text-align: center;
    cursor: pointer;
}

.selected {
    background: color-primary;
}
</style>
