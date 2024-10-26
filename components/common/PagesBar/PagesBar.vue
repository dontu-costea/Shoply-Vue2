<script src="./index.ts"></script>

<template>
  <div>
    <div class="bar">
      <span class="page">Home</span>
      <v-icon size="28" class="mx-4">mdi-chevron-right</v-icon>
      <span v-if="page" class="page">{{ page }}</span>
      <v-icon v-if="page" size="28" class="mx-4">mdi-chevron-right</v-icon>
      <span class="page active">{{ activePage }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bar {
  height: 74px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 40px 0px 50px 0px;
  padding-left: 24px;
  .page {
    font-family: 'Roboto';
    font-size: 32px;
    line-height: 38px;
    color: #616467;
  }
  .active {
    font-weight: bold;
  }
}
</style>
