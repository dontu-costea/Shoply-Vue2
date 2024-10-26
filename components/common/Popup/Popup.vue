<script src="./index.ts"></script>

<template>
  <v-snackbar
    :value="$store.getters['modules/popup/getShowPopup']"
    :right="$store.getters['modules/popup/getRight']"
    :top="$store.getters['modules/popup/getTop']"
    :color="$store.getters['modules/popup/getColor']"
    timeout="1800"
    @input="$store.dispatch('modules/popup/hidePopup')"
  >
    <div :style="{ display: 'flex', justifyContent: 'space-between' }">
      <div :style="{ alignSelf: 'center' }">
        {{ $store.getters['modules/popup/getMessage'] }}
      </div>
      <div>
        <v-btn
          color="white"
          text
          :style="{ fontFamily: 'Arial' }"
          @click="$store.dispatch('modules/popup/hidePopup')"
        >
          Close
        </v-btn>
      </div>
    </div>
  </v-snackbar>
</template>

<style scoped lang="scss"></style>
