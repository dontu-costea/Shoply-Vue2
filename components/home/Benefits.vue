<script lang="ts">
export default {
  name: 'Benefits',
}
</script>

<template>
  <div>
    <v-container>
      <div class="block__title">Benefits Using Our Service</div>
      <v-row class="benefits__block">
        <v-col class="benefits">
          <v-img
            width="60px"
            :src="require('@/assets/img/homePage/benefits/benefits1.png')"
          ></v-img>
          <div class="benefits__title">Best Quality</div>
          <div class="benefits__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consectetur, purus id
          </div>
        </v-col>
        <v-col class="benefits">
          <v-img
            width="60px"
            :src="require('@/assets/img/homePage/benefits/benefits2.png')"
          ></v-img>
          <div class="benefits__title">Free Shipping</div>
          <div class="benefits__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consectetur, purus id
          </div>
        </v-col>
        <v-col class="benefits">
          <v-img
            width="60px"
            :src="require('@/assets/img/homePage/benefits/benefits3.png')"
          ></v-img>
          <div class="benefits__title">Warranty</div>
          <div class="benefits__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consectetur, purus id
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.block__title {
  font-family: 'Lato';
  font-weight: 700;
  font-size: 45px;
  line-height: 54px;
  color: #393d45;
  text-align: center;
  margin: 75px 0px 95px 0px;
}
.benefits__block {
  margin-bottom: 135px;
  .benefits {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .benefits__title {
      font-size: 32px;
      line-height: 38px;
      color: #393d45;
      font-weight: bold;
      margin: 28px 0px 14px 0px;
    }
    .benefits__text {
      font-size: 22px;
      line-height: 35px;
      color: #616467;
      text-align: center;
    }
  }
}
</style>
