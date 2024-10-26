<template>
  <div>
    <div class="filter__title">Filter</div>
    <div class="categories">
      <div class="filter__item">Product Category</div>
      <div v-if="showLess" class="category__list">
        <v-checkbox
          v-for="category in categories.slice(0, 5)"
          :key="category.id"
          dense
          color="#211F1C"
        >
          <template #label
            ><span class="checkbox">{{ category.name }}</span></template
          >
        </v-checkbox>
        <v-btn elevation="0" class="text-capitalize" @click="showLess = false"
          >Show More <v-icon>mdi-chevron-down</v-icon></v-btn
        >
      </div>
      <div v-else class="category__list">
        <v-checkbox
          v-for="category in categories"
          :key="category.id"
          dense
          color="#211F1C"
        >
          <template #label
            ><span class="checkbox">{{ category.name }}</span></template
          >
        </v-checkbox>
        <v-btn elevation="0" class="text-capitalize" @click="showLess = true"
          >Show Less <v-icon>mdi-chevron-up</v-icon></v-btn
        >
      </div>
    </div>
    <div>
      <div class="mt-12 filter__item">Price range</div>
      <v-text-field
        class="price__field"
        hide-details
        single-line
        outlined
        dense
        hide-spin-buttons
        type="number"
        style="width: 43%"
      ></v-text-field>
      <v-text-field
        class="price__field float-right"
        hide-details
        single-line
        outlined
        dense
        hide-spin-buttons
        type="number"
        style="width: 43%"
      ></v-text-field>
    </div>
    <v-btn elevation="0" color="#211F1C" class="text-capitalize setPrice"
      >Set Price</v-btn
    >
    <v-btn
      elevation="0"
      color="white"
      class="text-capitalize setPrice clearFilter"
      >Clear Filter</v-btn
    >
  </div>
</template>

<script src="./index.ts"></script>

<style scoped lang="scss">
* {
  font-family: 'Libre Franklin';
}
.filter__title {
  font-weight: 500;
  font-size: 26px;
  line-height: 132%;
  letter-spacing: 0.015em;
  color: #000000;
  margin-bottom: 50px;
}
.filter__item {
  font-weight: bold;
  font-size: 16px;
  line-height: 132%;
  letter-spacing: 0.015em;
  color: #000000;
  margin-bottom: 20px;
}
.checkbox {
  font-size: 16px;
  line-height: 132%;
  letter-spacing: 0.015em;
  color: #616467;
}
.price__field {
  display: inline-block;
  border-radius: 10px;
}
.setPrice {
  font-size: 14px;
  line-height: 132%;
  letter-spacing: 0.015em;
  color: #ffffff;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 60px;
  border-radius: 10px;
}
.clearFilter {
  color: #000;
  border: 1px solid black !important;
}
</style>
