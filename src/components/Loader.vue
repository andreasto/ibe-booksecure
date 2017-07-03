<template>
    <div class="loader">
        <img src="./../assets/loader-icon.svg" alt="Loading..." class="loader-icon">
        <h4>{{text}}</h4>
    </div>
</template>

<script>
export default {
    props: [
        'text'
    ]
}
</script>

<style lang="scss" scoped>
.loader {
    text-align: center;
}

.loader-icon {
    display: inline-block;
}

h4 {
    display: block;
}
</style>
