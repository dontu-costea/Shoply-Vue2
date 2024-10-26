<template>
  <v-container>
    <PagesBar :page="'Products'" :active-page="product.name" />
    <v-row>
      <v-col>
        <v-img
          width="540px"
          height="660px"
          :src="require('@/assets/img/product.png')"
        ></v-img>
      </v-col>
      <v-col class="details">
        <div class="name">{{ product.name }}</div>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nibh erat
        </div>
        <div class="category">
          {{ category.name }}
        </div>
        <div class="stock">Stock: 75</div>
        <div class="price">Price:</div>
        <div class="amount">${{ product.price }}</div>
        <div class="addToCart">
          <div class="amountOfProducts">
            <v-btn
              elevation="0"
              :disabled="amount < 2"
              min-width="0"
              class="amount__item mr-4"
              @click="amount -= 1"
              >-</v-btn
            >
            <div class="flex-center amount__item">{{ amount }}</div>
            <v-btn
              elevation="0"
              :disabled="amount > 200"
              min-width="0"
              class="amount__item ml-4"
              @click="amount += 1"
              >+</v-btn
            >
          </div>
          <v-btn
            elevation="0"
            color="#211F1C"
            class="add text-capitalize"
            @click="addToCart()"
            >Add to cart</v-btn
          >
        </div>
        <v-row>
          <v-col v-for="n in 4" :key="`${4 - n}`"
            ><v-img
              class="photo"
              width="85px"
              :src="require('@/assets/img/product.png')"
            ></v-img
          ></v-col>
        </v-row>
      </v-col>
    </v-row>

    <Popup />
  </v-container>
</template>

<script src="./index.ts"></script>

<style scoped lang="scss">
.details {
  margin-bottom: 120px;
  .name {
    font-family: Arial;
    font-weight: bold;
    font-size: 40px;
    line-height: 47px;
    color: #616467;
    margin: 35px 0px;
  }
  .description {
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 0.015em;
    color: #9a9292;
    margin-bottom: 8px;
  }
  .category {
    font-size: 18px;
    line-height: 132%;
    font-weight: bold;
    letter-spacing: 0.015em;
    color: #082032;
    margin-bottom: 42px;
  }
  .stock {
    font-size: 20px;
    line-height: 132%;
    letter-spacing: 0.015em;
    color: #616467;
    margin-bottom: 37px;
  }
  .price {
    font-size: 20px;
    line-height: 132%;
    letter-spacing: 0.015em;
    color: #616467;
    margin-bottom: 10px;
  }
  .amount {
    font-family: Arial;
    font-weight: 500;
    font-size: 20px;
    line-height: 132%;
    letter-spacing: 0.015em;
    color: #434343;
    margin-bottom: 34px;
  }
  .addToCart {
    display: flex;
    align-items: center;
    margin-bottom: 63px;
    .amountOfProducts {
      display: flex;
      align-items: center;
      .amount__item {
        width: 46px;
        height: 46px;
        background: #f5f7fb;
        font-size: 20px;
        line-height: 23px;
        color: #616467;
      }
    }
    .add {
      font-size: 15px;
      line-height: 18px;
      font-family: Arial;
      color: #ffffff;
      margin-left: 36px;
      height: 46px;
    }
  }
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
