import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class CartPrice extends Vue {
  @Prop({ type: Array })
  cart: any

  get calculateSum() {
    let sum = 0
    this.cart?.forEach(function (item: any) {
      sum += Number(item.product.price) * Number(item.quantity)
    })
    return sum
  }
}
