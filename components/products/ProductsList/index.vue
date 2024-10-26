<template>
  <div>
    <v-text-field
      v-model="searchValue"
      label="Search products"
      prepend-inner-icon="mdi-magnify"
      filled
      rounded
      dense
    ></v-text-field>
    <div class="flex">
      <div class="searchResult">
        <span>Search result for </span>
        <span class="result">"{{ searchValue }}"</span>
      </div>
      <div class="sort">
        <span>Sort by</span>
        <v-select dense outlined class="select"></v-select>
      </div>
    </div>
    <div class="products__list">
      <div v-for="product in products" :key="product.id" class="product__item">
        <v-img
          class="product__img"
          :src="require('@/assets/img/homePage/mainProducts/product2.png')"
        ></v-img>
        <div class="products_buttons">
          <v-btn
            color="#211F1C"
            class="text-capitalize product__btn"
            nuxt
            :to="`/products/${product.id}`"
            >Detail
          </v-btn>
          <v-btn
            v-if="$auth.loggedIn"
            color="white"
            class="product__cart"
            @click="addToCart(product.id)"
            ><v-icon size="20">mdi-cart-outline</v-icon></v-btn
          >
        </div>
        <div class="flex mt-3">
          <div class="product__name">{{ product.name }}</div>
          <div class="product__name product__price">${{ product.price }}</div>
        </div>
      </div>
    </div>

    <Popup />
  </div>
</template>

<script src="./index.ts"></script>

<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sort {
  display: flex;
  justify-content: center;
  align-items: center;
  .select {
    margin-left: 15px;
    width: 100px;
    height: 40px;
  }
}
.products__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;

  .product__item {
    width: 203px;
    margin-bottom: 25px;
    position: relative;

    .product__img {
      width: 203px;
      height: 297px;
      border-radius: 10px;
    }
    .products_buttons {
      position: absolute;
      bottom: 42px;
      left: 0px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .product__btn {
        font-family: 'Josefin Sans';
        font-size: 13px;
        line-height: 13px;
        color: #ffffff;
        border-radius: 10px;
        width: 94px;
        height: 30px;
      }
      .product__cart {
        border-radius: 10px;
        height: 30px;
        width: 30px;
        margin-left: 10px;
      }
    }
    .product__name {
      font-family: 'Arial';
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
      color: #616467;
    }
  }
}
</style>
