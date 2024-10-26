import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class PagesBar extends Vue {
  @Prop({ type: String })
  activePage: any

  @Prop({ type: String })
  page: any
}
