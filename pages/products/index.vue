<template>
  <v-container>
    <PagesBar :active-page="'Products'" />
    <v-row>
      <v-col cols="3"><FilterProducts /></v-col>
      <v-col cols="9"
        ><ProductsList :products="products" />
        <v-pagination
          v-model="params.page"
          circle
          color="#211F1C"
          class="mt-6 mb-10"
          :length="totalPages"
          @input="changePage"
        ></v-pagination
      ></v-col>
    </v-row>
  </v-container>
</template>

<script src="./index.ts"></script>

<style scoped lang="scss"></style>
