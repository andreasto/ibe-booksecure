<template>
    <div class="loader-fullscreen">
        <div class="loader-inner">
            <img src="./../assets/loader-icon.svg" alt="Loading..." class="loader-icon">
            <h3>{{text}}</h3>
            <div class="loader-description" v-show="description">{{description}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'text',
        'description'
    ]
}
</script>

<style lang="scss" scoped>
.loader-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: $z-index-highest;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.8);
}

.loader-inner {
    width: 300px;
    height: 300px;
    padding: 50px 30px;
    background: white;
    text-align: center;
    border-radius: 50%;
    box-shadow: $box-shadow;
}

.loader-icon {
    display: inline-block;
}

h4 {
    display: block;
}
</style>
