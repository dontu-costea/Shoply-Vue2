<template>
  <div>
    <div v-if="cart.length">
      <v-row class="titles">
        <v-col> Product </v-col>
        <v-col class="text-right mx-5"> Price </v-col>
        <v-col class="ml-2">Quantity</v-col>
        <v-col class="text-right">Delete</v-col>
      </v-row>
      <v-row v-for="product in cart" :key="product.id" class="products__list">
        <v-col class="flex-center">
          <div>
            <v-img
              width="123px"
              height="123px"
              class="mr-4"
              :src="require('@/assets/img/cart-img.png')"
            ></v-img>
          </div>
          <div class="details">{{ product.product.name }}</div>
        </v-col>
        <v-col class="flex-center details text-right mx-6">
          <v-spacer></v-spacer>
          ${{ product.product.price }}</v-col
        >
        <v-col class="flex-center">
          <v-btn
            :disabled="product.quantity < 2"
            elevation="0"
            color="transparent"
            min-width="0"
            width="30px"
            class="details mr-2"
            @click="reduceQuantity(product.id)"
            >-</v-btn
          >
          <div class="details quantity">{{ product.quantity }}</div>
          <v-btn
            :disabled="product.quantity > 200"
            elevation="0"
            color="transparent"
            min-width="0"
            width="30px"
            class="details ml-2"
            @click="increaseQuantity(product.id)"
            >+</v-btn
          >
        </v-col>
        <v-col class="flex-center">
          <v-spacer></v-spacer>
          <v-btn
            elevation="0"
            color="transparent"
            class="delete__btn"
            min-width="0"
            width="40px"
            height="40px"
            @click="deleteProduct(product.id)"
          >
            <v-icon>mdi-delete-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <CartPrice :cart="cart" />
    </div>
    <div v-else class="no-products">Here are no products yet</div>
    <Popup />
  </div>
</template>

<script src="./index.ts"></script>

<style scoped lang="scss">
.titles {
  padding: 0px 78px;
  font-family: 'Lato';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 30px;
}
.products__list {
  background-color: #f8f8f8;
  padding: 0px 78px;
  margin-bottom: 29px;
  .details {
    font-family: 'Lato';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }
  .quantity {
    border: 1px solid black;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
  }
  .delete__btn {
    border-radius: 50%;
  }
}
.flex-center {
  display: flex;
  align-items: center;
}
.no-products {
  text-align: center;
  font-size: 20px;
  font-family: 'Loto';
}
</style>
