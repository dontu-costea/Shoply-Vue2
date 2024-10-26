import { Component, Vue, Prop } from 'nuxt-property-decorator'
import * as _ from 'lodash'
import { ApiRoutes } from '~/ts/enum'

@Component
export default class ProductsList extends Vue {
  searchValue = '' as String

  @Prop({ type: Array })
  products: any

  // eslint-disable-next-line import/namespace
  addToCart = _.debounce(async function (id: number) {
    try {
      await this.$axios.post(ApiRoutes.Cart, {
        productId: id,
        quantity: 1,
      })
      this.$store.dispatch('cart/getCart')
      this.$store.dispatch('popup/showPopup', {
        message: 'Product was added to cart',
        color: 'success',
        right: true,
      })
    } catch (e: any) {
      console.log(e)
    }
  }, 200)
}
