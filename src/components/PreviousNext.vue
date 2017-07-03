<template>
    <div class="previous-next">
        <button class="button" @click="previousAction">Previous</button>
        <button class="button" @click="nextAction">Next</button>
    </div>
</template>

<script>
import router from '@/router'

export default {
    props: {
        previousAction: { type: Function, default: () => router.go(-1) },
        nextAction: { type: Function, required: true }
    }
}
</script>

<style lang="scss" scoped>
.previous-next {
    display: flex;
    justify-content: space-between;
}
</style>
