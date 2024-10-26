import { Component, Vue } from 'nuxt-property-decorator'
import * as _ from 'lodash'

@Component
export default class CartProducts extends Vue {
  get cart() {
    return this.$store.getters['cart/getCart']
  }

  increaseQuantity = _.debounce(async (id: number) => {
    try {
      await this.$axios.post(`/cart/${id}/increase-quantity`)
      await this.$store.dispatch('cart/getCart')
    } catch (e: any) {
      console.log(e)
    }
  }, 200)

  reduceQuantity = _.debounce(async (id: number) => {
    try {
      await this.$axios.post(`/cart/${id}/reduce-quantity`)
      await this.$store.dispatch('cart/getCart')
    } catch (e: any) {
      console.log(e)
    }
  }, 200)

  deleteProduct = _.debounce(async (id: number) => {
    try {
      await this.$axios.delete(`/cart/${id}`)
      await this.$store.dispatch('cart/getCart')
      await this.$store.dispatch('popup/showPopup', {
        message: 'Product was deleted',
        color: 'error',
        right: true,
      })
    } catch (e: any) {
      console.log(e)
    }
  }, 200)
}
