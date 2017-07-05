<template>
    <div class="viewport-size">
        {{viewport}} ({{viewportSize}}px)
    </div>
</template>

<script>
export default {
    mounted() {
        window.onresize = (event) => {
            this.viewport = this.getViewportSize()
        }
    },
    data() {
        return {
            viewport: this.getViewportSize(),
            viewportSize: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        }
    },
    methods: {
        getViewportSize() {
            this.viewportSize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

            if (this.viewportSize <= 320) {
                return '<mobile'
            } else if (this.viewportSize >= 320 && this.viewportSize < 768) {
                return '>=mobile'
            } else if (this.viewportSize >= 768 && this.viewportSize < 1024) {
                return '>=tablet'
            } else if (this.viewportSize >= 1024) {
                return '>=desktop'
            } else {
                return 'unknown viewport'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.viewport-size {
    position: fixed;
    right: 0;
    top: 0;
    padding: 10px;
    border: $border-light;
}
</style>
