<template>
    <div class="price-breakdown">
        <div class="total row">Total amount payable by passenger <div class="price">{{totalAmountText}}</div></div>
        <div class="row"><strong>Breakup of above amount:</strong></div>
        <div class="row">
            Base fare <div class="price"><strong>{{baseFare}}</strong> {{currency}}</div>
        </div>
        <div class="row"><strong>Taxes and Fees</strong></div>
        <div class="row" v-for="tax in taxes" :key="tax.Id">
            {{tax.Description}} <div class="price"><strong>{{tax.Price}}</strong> {{tax.Currency}}</div>
        </div>
        <div class="row" v-if="bookingFee">
            {{bookingFee.Description}} <div class="price"><strong>{{bookingFee.Price}}</strong> {{bookingFee.Currency}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        totalAmount: { type: String },
        baseFare: { type: String },
        taxes: { type: Array },
        bookingFee: { type: Object }
    },
    data() {
        return {
            currency: window.bookSecure.settings.currency
        }
    },
    computed: {
        totalAmountText() {
            return this.currency + this.totalAmount
        }
    }
}
</script>

<style lang="scss" scoped>
.price-breakdown {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -150px;
    margin-top: -20px;
    width: 300px;
    border: $border-light;
    text-align: left;
    font-size: .75em;
    z-index: $z-index-higher;
    background: $color-background;
    box-shadow: $box-shadow-light;
    font-weight: $font-weight-normal;
}
.total {
    background: $color-third;
    padding: 4px 10px;
    font-size: 1.1em;
    font-weight: $font-weight-bold;
}
.row {
    position: relative;
    padding-left: 4px;
    padding-right: 4px;
}
.price {
    display: block;
    float: right;
}
</style>
