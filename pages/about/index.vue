<template>
  <v-container>
    <PagesBar :active-page="'About'" />
    <v-row class="about">
      <v-col>
        <v-img :src="require('@/assets/img/about-img.jpg')" width="94%"></v-img>
      </v-col>
      <v-col>
        <div class="about__tile">Our team</div>
        <div class="about__line"></div>
        <div class="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
          ornare nisl, a ornare ipsum. Vivamus venenatis sodales sapien, ut
          condimentum ante ultricies et. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nunc cursus
          pellentesque arcu sit amet placerat. Cras ut erat aliquet, suscipit
          tellus vitae, tempus magna.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { LayoutTypes } from '~/ts/enum'

@Component({ layout: LayoutTypes.Default })
export default class About extends Vue {}
</script>

<style scoped lang="scss">
.about {
  margin-bottom: 150px;
  margin-top: 50px;
  .about__tile {
    font-family: 'Lato';
    text-transform: uppercase;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #616467;
  }
  .about__line {
    width: 101.58px;
    height: 0px;
    border: 1px solid #616467;
    margin: 12px 0px 100px 0px;
  }
  .about__text {
    font-size: 24px;
    line-height: 40px;
    text-align: justify;
    color: #616467;
  }
}
</style>
