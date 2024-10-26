<template>
  <v-app-bar fixed app elevation="3" height="90" color="#F8F8F8">
    <v-container class="header">
      <NuxtLink to="/" class="logo"><span>Shoply.</span></NuxtLink>
      <div class="menu">
        <NuxtLink to="/" exact-active-class="active" class="menu__item"
          >Home</NuxtLink
        >
        <span>/</span>
        <NuxtLink to="/products" active-class="active" class="menu__item"
          >Products</NuxtLink
        >
        <span>/</span>
        <NuxtLink to="/about" active-class="active" class="menu__item"
          >About</NuxtLink
        >
      </div>
      <div class="cart_menu">
        <div v-if="$auth.loggedIn">
          <NuxtLink to="/cart" class="link mr-5">
            <v-badge
              color="#FF6565"
              overlap
              :content="cartAmount"
              bordered
              offset-x="8"
            >
              <v-icon size="27">mdi-cart-outline</v-icon>
            </v-badge>
          </NuxtLink>
          <span>
            {{ `${$auth.user?.firstName} ${$auth.user?.lastName}` }}
          </span>
          <v-btn
            elevation="0"
            class="text-capitalize logout__btn"
            color="#746F6C"
            width="85"
            height="32"
            tile
            @click="logout"
            >Logout</v-btn
          >
        </div>

        <div v-else>
          <NuxtLink to="/login" class="link"
            ><v-btn
              tile
              color="#211F1C"
              class="text-capitalize login__btn"
              width="88"
              height="33"
              >Login</v-btn
            ></NuxtLink
          >
          <NuxtLink to="/register" class="link"
            ><v-btn
              tile
              color="#746F6C"
              class="text-capitalize login__btn ml-1"
              width="88"
              height="33"
              >Register</v-btn
            ></NuxtLink
          >
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script src="./index.ts" lang="ts" />

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  .logo {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #393d45;
    text-decoration: none;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    &__item {
      font-size: 16px;
      line-height: 19px;
      color: #5e5e5e;
      text-decoration: none;
      transition: 0.3s all ease;
    }
    &__item:hover {
      color: #000;
    }
  }
  .cart_menu {
    display: flex;
    align-items: center;
    font-family: Regular;
    font-weight: bold;
    .login__btn {
      font-size: 16px;
      color: white;
      border-radius: 2px;
    }
    .link {
      text-decoration: none;
    }
    .logout__btn {
      font-size: 16px;
      color: white;
      margin-left: 3px;
      border-radius: 2px;
    }
  }
}
.active {
  font-weight: 700;
  border-bottom: 1px solid #393d45;
  transition: 0.3s all ease;
}
</style>
