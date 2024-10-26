<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="mt-4">
          <v-col class="form__block">
            <form class="form" @submit.prevent="register()">
              <span class="form__title">Register Now</span>
              <v-text-field
                v-model="model.firstName"
                :rules="nameRules"
                label="First name"
                filled
                rounded
                dense
                background-color="#F3F6FF"
                prepend-inner-icon="mdi-account-outline"
                class="form__input"
              ></v-text-field>
              <v-text-field
                v-model="model.lastName"
                :rules="nameRules"
                label="Last name"
                filled
                rounded
                dense
                background-color="#F3F6FF"
                prepend-inner-icon="mdi-account-outline"
                class="form__input"
              ></v-text-field>
              <v-text-field
                v-model="model.email"
                :rules="emailRules"
                label="Email"
                filled
                rounded
                dense
                background-color="#F3F6FF"
                prepend-inner-icon="mdi-at"
                class="form__input"
              ></v-text-field>
              <v-text-field
                v-model="model.password"
                :rules="passwordRules"
                label="Password"
                filled
                rounded
                dense
                background-color="#F3F6FF"
                prepend-inner-icon="mdi-lock-outline"
                class="form__input"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <v-btn
                rounded
                elevation="0"
                class="form__button text-capitalize"
                type="submit"
                >Register</v-btn
              >
              <span class="login"
                >Do you have already an account?
                <NuxtLink to="/login" class="login__link"
                  >Login!</NuxtLink
                ></span
              >
            </form>
          </v-col>
          <v-col
            ><v-img :src="require('@/assets/img/login-img.png')"></v-img
          ></v-col>
        </v-row>
      </v-container>
    </v-main>
    <Popup />
  </v-app>
</template>

<script src="./index.ts"></script>

<style scoped lang="scss">
.form__block {
  font-family: 'Lato';
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 132%;
      letter-spacing: 0.015em;
      color: #334756;
      margin-bottom: 35px;
    }
    &__input {
      width: 337px;
    }
    .forgot__password {
      align-self: flex-end;
      font-size: 16px;
      line-height: 19px;
      color: #334756;
    }
    &__button {
      width: 337px;
      margin-top: 40px;
      margin-bottom: 25px;
      background-color: #211f1c;
      color: #fbfbfb;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
    }
    .login {
      font-size: 16px;
      line-height: 19px;
      color: #334756;
      &__link {
        color: #616467;
      }
    }
  }
}
</style>
