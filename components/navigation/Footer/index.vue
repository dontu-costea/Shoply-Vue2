<template>
  <v-footer color="#484543">
    <v-container class="footer">
      <div class="footer__text">
        <div class="footer__title">Shoply.</div>
        <div>© Copyright 2021. Created by OurTeam</div>
      </div>
      <div class="footer__socials">
        <a href="https://www.facebook.com/" target="_blank" class="link"
          ><v-icon color="#1777F2" size="30">mdi-facebook</v-icon></a
        >

        <a href="https://www.instagram.com/" target="_blank" class="link"
          ><v-icon color="red" size="30">mdi-instagram</v-icon></a
        >
        <a href="https://twitter.com/" target="_blank" class="link"
          ><v-icon color="#1CA0F2" size="30">mdi-twitter</v-icon></a
        >
        <a href="https://www.youtube.com/" target="_blank" class="link"
          ><v-icon color="#FE0000" size="30">mdi-youtube</v-icon></a
        >
      </div>
    </v-container>
  </v-footer>
</template>

<script src="./index.ts" />

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footer__text {
    font-family: 'Roboto';
    color: white;
    font-size: 18px;
    line-height: 21px;
    .footer__title {
      font-weight: 700;
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 8px;
    }
  }
  .link {
    text-decoration: none;
    background-color: white;
    border-radius: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
}
</style>
