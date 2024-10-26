<script lang="ts">
export default {
  name: 'CustomersReview',
}
</script>

<template>
  <div class="customersReview">
    <v-container class="px-16">
      <div class="block__title">What Our Costumers Are Saying</div>
      <div class="review__block">
        <v-img
          :src="
            require('@/assets/img/homePage/customersReview/customersReview.png')
          "
          width="323px"
          height="440px"
          class="mr-8"
        ></v-img>
        <div class="ml-8 review__text">
          <div class="review__title">Help us Improve our productivity</div>
          <div class="text">
            <v-icon size="22" class="quote_open">mdi-format-quote-open</v-icon>
            <span
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              consectetur, purus id tincidunt feugiat, metus orci sagittis elit,
              quis tempor orci elit id arcu. Proin egestas bibendum
              efficitur.</span
            >
            <v-icon size="22" class="quote_close"
              >mdi-format-quote-close</v-icon
            >
          </div>
          <div class="name">Adriana Lopez</div>
          <div class="role">Client</div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.customersReview {
  background-color: #f8f8f8;
  padding: 100px 0px 140px 0px;
  .block__title {
    font-family: 'Lato';
    font-weight: 700;
    font-size: 45px;
    line-height: 54px;
    color: #393d45;
    text-align: center;
    margin-bottom: 100px;
  }
  .review__block {
    display: flex;
    align-items: center;
    justify-content: center;
    .review__title {
      font-family: 'Lato';
      font-weight: 500;
      font-size: 40px;
      line-height: 48px;
      color: #393d45;
    }
    .text {
      font-size: 22px;
      line-height: 40px;
      color: #616467;
      margin: 50px 0px;
      position: relative;
      padding: 0px 21px;
      .quote_open {
        position: absolute;
        left: 0;
        top: 0;
      }
      .quote_close {
        transform: translate(-6px, -6px);
      }
    }
    .name {
      font-weight: 700;
      font-size: 25px;
      line-height: 29px;
      color: #616467;
      margin-bottom: 6px;
    }
    .role {
      font-size: 22px;
      line-height: 26px;
      color: #616467;
    }
  }
}
</style>
