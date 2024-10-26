import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class FilterProducts extends Vue {
  categories = [] as any
  showLess = true as Boolean

  mounted() {
    this.getCategories()
  }

  async getCategories() {
    try {
      this.categories = await this.$axios.$get('/categories')
    } catch (e: any) {
      console.log(e)
    }
  }
}
