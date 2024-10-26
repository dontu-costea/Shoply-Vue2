<script lang="ts">
export default {
  name: 'MainBanner',
}
</script>

<template>
  <div class="main__banner">
    <v-container>
      <v-row>
        <v-col class="text__block">
          <div class="block__title">Logitech G Pro X Superlight</div>
          <div class="subtitle my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nibh erat
          </div>
          <v-btn nuxt :to="`/products/7`" class="text-capitalize button"
            >Show Now</v-btn
          >
        </v-col>
        <v-col>
          <v-img
            :src="require('@/assets/img/homePage/mainBannerImg.png')"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.main__banner {
  background: linear-gradient(90deg, #fcf9f6 1.6%, #ffffff 100%);
  padding: 50px 0px 90px 0px;
  .text__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .block__title {
      font-family: 'Lato';
      font-weight: 700;
      font-size: 60px;
      line-height: 132%;
      letter-spacing: 0.015em;
      color: #393d45;
    }
    .subtitle {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 35px;
      letter-spacing: 0.015em;
      color: #616467;
    }
    .button {
      font-size: 20px;
      line-height: 132%;
      letter-spacing: 0.015em;
      background: #393d45;
      border-radius: 2px;
      color: #ffffff;
      width: 170px;
      height: 52px;
    }
  }
}
</style>
