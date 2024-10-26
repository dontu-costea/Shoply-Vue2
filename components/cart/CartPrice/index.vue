<<<<<<< HEAD:components/cart/CartPrice.vue
<script lang="ts">
export default {
  name: 'CartPrice',

  props: {
    cart: Array,
  },

  computed: {
    calculateSum() {
      let sum = 0
      this.cart?.forEach(function (item: any) {
        sum += Number(item.product.price) * Number(item.quantity)
      })
      return sum
    },
  },
}
</script>

=======
>>>>>>> 6456d0248e3d4984fd5308c8e536d66a80224454:components/cart/CartPrice/index.vue
<template>
  <div class="cart-price">
    <div class="price__block">
      <v-row class="subtotal" no-gutters>
        <v-col>Subtotal</v-col>
        <v-col class="text-center">:</v-col>
        <v-col class="text-right">${{ calculateSum }}</v-col>
      </v-row>
      <v-row class="shipping">
        <v-col>Shipping Fee</v-col>
        <v-col class="text-center">:</v-col>
        <v-col class="text-right">$5</v-col>
      </v-row>
      <v-row class="total">
        <v-col>Total Order</v-col>
        <v-col class="text-center">:</v-col>
        <v-col class="text-right">${{ calculateSum + 5 }}</v-col>
      </v-row>
    </div>
    <div>
      <v-btn elevation="0" class="button text-capitalize mr-5">Close</v-btn>
      <v-btn
        elevation="0"
        class="button text-capitalize white--text"
        color="#393D45"
        >Check Out</v-btn
      >
    </div>
  </div>
</template>

<script src="./index.ts"></script>

<style scoped lang="scss">
.cart-price {
  margin: 75px 0px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  color: black;
  font-family: 'Arial';
  .price__block {
    background: #f8f8f8;
    padding: 50px;
    width: 550px;
    .subtotal {
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
    }
    .shipping {
      font-size: 16px;
      line-height: 21px;
    }
    .total {
      font-weight: 700;
      font-size: 22px;
      line-height: 29px;
    }
  }
  .button {
    background-color: white;
    border: 1px solid #616467;
    font-family: 'Lato';
    font-size: 20px;
    line-height: 24px;
    color: #616467;
    border-radius: 2px;
    margin-top: 70px;
  }
}
</style>
