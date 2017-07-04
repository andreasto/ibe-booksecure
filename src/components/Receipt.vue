<template>
    <div>
        <h1>Receipt</h1>

        <h3>Thanks for your order!</h3>
        Your order details here
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('navigation/resetAccess')
        this.$store.commit('cart/clearSelectedItems')
    }
}
</script>

