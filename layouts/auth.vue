<template>
  <v-app>
    <Header />
    <Nuxt />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AuthLayout extends Vue {}
</script>
