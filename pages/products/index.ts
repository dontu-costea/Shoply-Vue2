import { Component, Vue } from 'nuxt-property-decorator'
import { LayoutTypes } from '~/ts/enum'

@Component({
  layout: LayoutTypes.Default,
})
export default class Products extends Vue {
  totalPages = 0 as number
  params = {
    page: 1,
    pageSize: 8,
  }

  products = [] as any

  mounted() {
    this.loadData()
  }

  async loadData() {
    try {
      const { data, meta } = await this.$axios.$get('/products', {
        params: this.params,
      })
      this.products = data
      this.totalPages = meta.total
    } catch (e: any) {
      console.log(e)
    }
  }

  changePage() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    this.loadData()
  }
}
