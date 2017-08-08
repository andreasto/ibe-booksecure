<template>
    <div class="notification-box" :class="type">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        type: { type: String, default: 'info' }
    }
}
</script>

<style lang="scss" scoped>
.notification-box {
    padding: 15px;
    margin-bottom: 15px;

    &.error {
        background: $color-error;
    }
    &.warning {
        background: $color-warning;
    }
    &.info {
        background: $color-info;
    }
}
</style>
