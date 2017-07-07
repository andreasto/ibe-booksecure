<template>
    <div class="form-group button-container">
        <button type="button" @click="buttonClick" :class="[cssClass, classes]">
            <i class="button-icon button-icon-left material-icons" v-show="iconLeft" v-html="iconLeft"></i>
            <i class="button-icon button-icon-right material-icons" v-show="iconRight" v-html="iconRight"></i>
            {{text}}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        text: { type: String, required: true },
        action: { type: Function, required: true },
        cssClass: { type: String, default: 'button' },
        iconLeft: { type: String },
        iconRight: { type: String }
    },
    computed: {
        classes() {
            return {
                'with-icon-left': this.iconLeft && this.iconLeft.length > 0,
                'with-icon-right': this.iconRight && this.iconRight.length > 0
            }
        }
    },
    methods: {
        buttonClick(event) {
            this.action()
        }
    }
}
</script>
