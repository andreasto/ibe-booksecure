<template>
    <div>
        <h1>Payment</h1>

        <div class="payment-options">
            List of payment options
        </div>

        <ibe-button :text="'Complete order'" :action="completeOrder"></ibe-button>
        <ibe-loader-fullscreen :text="'Completing order'" :description="'Please do not refresh the page or close the browser'" v-show="showLoader"></ibe-loader-fullscreen>
    </div>
</template>

<script>
import LoaderFullscreen from '@/components/LoaderFullscreen'

export default {
    data: () => ({
        showLoader: false
    }),
    methods: {
        completeOrder() {
            this.showLoader = true

            setTimeout(() => {
                this.$store.commit('navigation/unlock', 'receipt')
                this.$store.dispatch('navigation/navigateTo', 'receipt')
            }, 4000)
        }
    },
    components: {
        'ibe-loader-fullscreen': LoaderFullscreen
    }
}
</script>
