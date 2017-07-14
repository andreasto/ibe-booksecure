<template>
    <div class="mycomponent">
        <span class="hello">{{ message }}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: 'hello!'
        }
    },
    created() {
        this.message = 'bye!'
    }
}
</script>
