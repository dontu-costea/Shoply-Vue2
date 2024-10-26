<<<<<<< HEAD
<script>
export default {
  name: 'IndexPage',
}
// $env:NODE_OPTIONS = "--openssl-legacy-provider"
</script>

=======
>>>>>>> 6456d0248e3d4984fd5308c8e536d66a80224454
<template>
  <div>
    <MainBanner />
    <Partners />
    <MainProducts />
    <Benefits />
    <CustomersReview />
    <Popup />
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { LayoutTypes } from '~/ts/enum'

@Component({
  layout: LayoutTypes.Default,
})
export default class extends Vue {}
</script>
