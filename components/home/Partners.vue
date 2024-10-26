<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class Partners extends Vue {
  get partnersImageSrc(): string {
    return '/homePage/partners/morgan.png'
  }
}
</script>

<template>
  <div>
    <v-container>
      <div class="block__title">Our Partners</div>
      <v-row class="partners">
        <v-col class="mr-14"
          ><v-img width="195px" :src="partnersImageSrc"></v-img
        ></v-col>
        <v-col class="mx-14"
          ><v-img
            width="155px"
            :src="require('@/assets/img/homePage/partners/oysho.png')"
          ></v-img
        ></v-col>
        <v-col class="mx-14"
          ><v-img width="192px" src="/homePage/partners/pull&bear.png"></v-img
        ></v-col>
        <v-col class="ml-14"
          ><v-img
            width="173px"
            :src="require('@/assets/img/homePage/partners/rosewood.png')"
          ></v-img
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.block__title {
  margin: 110px 0px 70px 0px;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 45px;
  line-height: 54px;
  color: #393d45;
  text-align: center;
}
.partners {
  margin-bottom: 110px;
}
</style>
