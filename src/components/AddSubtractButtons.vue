<template>
    <div class="add-subtract-buttons">
        <button @click="subtractCallback">-</button>
        <span class="counter" v-if="counter">{{counter}}</span>
        <button @click="addCallback">+</button>
    </div>
</template>

<script>
export default {
    props: {
        addCallback: { type: Function, required: true },
        subtractCallback: { type: Function, required: true },
        counter: { default: false }
    }
}
</script>

<style lang="scss" scoped>
.counter {
    position: relative;
    top: 0;
    display: inline-block;
    font-size: 22px;
    margin: 0 4px 0 0;
    color: $color-primary;
    font-weight: $font-weight-bold;
}

button {
    $size: 38px;

    background: white;
    border: 1px solid $color-primary;
    border-radius: 50%;
    width: $size;
    height: $size;
    font-size: 26px;
    cursor: pointer;
}
</style>
