<template>
    <div class="search-type-switch">
        <label class="radio-button">
            <input v-model="searchTypeData" type="radio" name="searchType" :value="'single'"> Oneway/Roundtrip
        </label>
        <label class="radio-button">
            <input v-model="searchTypeData" type="radio" name="searchType" :value="'multiCity'"> Multicity
        </label>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(
            'search',
            [
                'searchType'
            ]
        )
    },
    methods: {
        ...mapMutations(
            'search',
            [
                'addFlightLeg',
                'changeSearchType',
                'removeMultiCity'
            ]
        )
    },
    data() {
        return {
            searchTypeData: this.$store.state.search.searchType
        }
    },
    watch: {
        searchTypeData(val, oldVal) {
            if (val === 'single') {
                this.removeMultiCity()
            } else {
                this.addFlightLeg()
            }
            this.changeSearchType(val)
        }
    }
}
</script>

<style lang="scss" scoped>
.search-type-switch {
    margin: 0 5px 20px;
    text-align: center;

    @include media(">tablet") {
        text-align: left;
    }
}
</style>
