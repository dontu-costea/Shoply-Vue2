<script lang="ts">
export default {
  name: 'MainProducts',
}
</script>

<template>
  <div class="mainProducts">
    <v-container>
      <div class="block__title">Products</div>
      <v-row class="mb-5">
        <v-col>
          <div class="relative">
            <v-img
              class="products__image"
              :src="require('@/assets/img/homePage/mainProducts/product1.png')"
            ></v-img>
            <div class="products_buttons">
              <v-btn color="#393D45" class="product__btn">Detail</v-btn>
              <v-btn color="white" class="product__cart"
                ><v-icon>mdi-cart-outline</v-icon></v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col>
          <div class="relative">
            <v-img
              class="products__image"
              :src="require('@/assets/img/homePage/mainProducts/product2.png')"
            ></v-img>
            <div class="products_buttons">
              <v-btn color="#393D45" class="product__btn">Detail</v-btn>
              <v-btn color="white" class="product__cart"
                ><v-icon>mdi-cart-outline</v-icon></v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col>
          <div class="relative">
            <v-img
              class="products__image"
              :src="require('@/assets/img/homePage/mainProducts/product3.png')"
            ></v-img>
            <div class="products_buttons">
              <v-btn color="#393D45" class="product__btn">Detail</v-btn>
              <v-btn color="white" class="product__cart"
                ><v-icon>mdi-cart-outline</v-icon></v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col>
          <div class="relative">
            <v-img
              class="products__image"
              :src="require('@/assets/img/homePage/mainProducts/product4.png')"
            ></v-img>
            <div class="products_buttons">
              <v-btn color="#393D45" class="product__btn">Detail</v-btn>
              <v-btn color="white" class="product__cart"
                ><v-icon>mdi-cart-outline</v-icon></v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="relative">
            <v-img
              class="products__image"
              :src="require('@/assets/img/homePage/mainProducts/product5.png')"
            ></v-img>
            <div class="products_buttons">
              <v-btn color="#393D45" class="product__btn">Detail</v-btn>
              <v-btn color="white" class="product__cart"
                ><v-icon>mdi-cart-outline</v-icon></v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col>
          <div class="relative">
            <v-img
              class="products__image"
              :src="require('@/assets/img/homePage/mainProducts/product6.png')"
            ></v-img>
            <div class="products_buttons">
              <v-btn color="#393D45" class="product__btn">Detail</v-btn>
              <v-btn color="white" class="product__cart"
                ><v-icon>mdi-cart-outline</v-icon></v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col>
          <div class="relative">
            <v-img
              class="products__image"
              :src="require('@/assets/img/homePage/mainProducts/product7.png')"
            ></v-img>
            <div class="products_buttons">
              <v-btn color="#393D45" class="product__btn">Detail</v-btn>
              <v-btn color="white" class="product__cart"
                ><v-icon>mdi-cart-outline</v-icon></v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col>
          <div class="relative">
            <v-img
              class="products__image"
              :src="require('@/assets/img/homePage/mainProducts/product8.png')"
            ></v-img>
            <div class="products_buttons">
              <v-btn color="#393D45" class="product__btn">Detail</v-btn>
              <v-btn color="white" class="product__cart"
                ><v-icon>mdi-cart-outline</v-icon></v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
      <div class="button__block">
        <v-btn
          class="text-capitalize button"
          elevation="0"
          color="#393D45"
          height="54px"
          width="218px"
          @click="$router.push('/products')"
          >All products <v-icon class="ml-2">mdi-arrow-right</v-icon></v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.mainProducts {
  background: #f8f8f8;
  .relative {
    position: relative;
    transition: 0.3s all ease;
    .products_buttons {
      position: absolute;
      bottom: 20px;
      left: 0px;
      width: 269px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .product__btn {
        font-family: 'Josefin Sans';
        font-size: 14px;
        line-height: 14px;
        color: #ffffff;
        border-radius: 10px;
        width: 115px;
        margin-right: 7px;
      }
      .product__cart {
        border-radius: 10px;
        margin-left: 7px;
      }
    }
  }
  .relative:hover {
    transform: translateY(-10px);
  }
  .block__title {
    font-family: 'Lato';
    font-weight: 700;
    font-size: 45px;
    line-height: 132%;
    letter-spacing: 0.015em;
    color: #393d45;
    text-align: center;
    margin: 60px 0px 70px 0px;
  }
  .products__image {
    width: 269px;
    box-shadow: 2px 5px 10px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }
  .button__block {
    text-align: center;
    margin: 60px 0px;
    .button {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #ffffff;
      border-radius: 2px;
    }
  }
}
</style>
