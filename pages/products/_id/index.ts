import { Component, Vue } from 'nuxt-property-decorator'
import _ from 'lodash'
import { ApiRoutes } from '~/ts/enum'

@Component
export default class ProductView extends Vue {
  product = {} as any
  category = '' as any
  amount = 1 as number

  mounted() {
    this.loadData()
  }

  async loadData() {
    try {
      this.product = await this.$axios.$get(
        `/products/${this.$route.params.id}`
      )
      this.category = await this.$axios.$get(
        `${ApiRoutes.Categories}/${this.product.categoryId}`
      )
    } catch (e: any) {
      console.log(e)
    }
  }

  addToCart = _.debounce(async () => {
    try {
      await this.$axios.post(ApiRoutes.Cart, {
        productId: this.product.id,
        quantity: this.amount,
      })
      await this.$store.dispatch('cart/getCart')
      await this.$store.dispatch('popup/showPopup', {
        message: 'Product was added to cart',
        color: 'success',
        right: true,
      })
    } catch (e: any) {
      console.log(e)
      await this.$store.dispatch('popup/showPopup', {
        message: 'You need to log in to add to cart',
        color: 'error',
        right: true,
      })
    }
  }, 500)
}
