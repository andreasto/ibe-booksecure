<template>
    <div class="previous-next">
        <button class="button" :disabled="previousDisabled" @click="previousAction">Previous</button>
        <button class="button" :disabled="nextDisabled" @click="nextAction">Next</button>
    </div>
</template>

<script>
import router from '@/router'

export default {
    props: {
        previousAction: { type: Function, default: () => router.go(-1) },
        nextAction: { type: Function, required: true },
        previousDisabled: { type: Boolean, default: false },
        nextDisabled: { type: Boolean, default: false }
    }
}
</script>

<style lang="scss" scoped>
.previous-next {
    display: flex;
    justify-content: space-between;
}
</style>
