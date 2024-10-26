<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { LayoutTypes } from '~/ts/enum'

@Component({ layout: LayoutTypes.Default, middleware: ['cart'] })
export default class Cart extends Vue {}
</script>

<template>
  <v-container>
    <PagesBar :active-page="'My Cart'" />
    <CartProducts />
  </v-container>
</template>
