import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Popup extends Vue {
  get keepPopup(): boolean {
    return this.$store.getters['popup/getKeepPopup']
  }

  beforeDestroy() {
    if (!this.keepPopup) {
      this.$store.dispatch('popup/hidePopup')
    } else {
      this.$store.dispatch('popup/keepPopup', false)
    }
  }
}
