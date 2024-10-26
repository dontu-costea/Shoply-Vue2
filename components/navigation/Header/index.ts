import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {
  mounted() {
    if (this.$auth.loggedIn) {
      this.$store.dispatch('cart/getCart')
    }
  }

  get cartAmount() {
    const cart = this.$store.getters['cart/getCart']
    console.log(cart)
    if (!cart?.length) {
      return '0'
    }
    return cart.length || '0'
  }

  async logout() {
    await this.$auth.logout()
    await this.$router.push('/')
  }
}
