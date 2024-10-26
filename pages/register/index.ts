import { Component, Vue } from 'nuxt-property-decorator'
import * as _ from 'lodash'
import { ApiRoutes, LayoutTypes } from '~/ts/enum'

@Component({ layout: LayoutTypes.Auth, middleware: ['loggedIn'] })
export default class Register extends Vue {
  model = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roles: ['user'],
  }

  showPassword = false
  nameRules = [(v: string) => !!v || 'This field is required']
  emailRules = [
    (v: string) => !!v || 'Email is required',
    (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
  ]

  passwordRules = [
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length >= 8) || 'Password must have 8+ characters',
  ]

  showPopup = false

  register = _.debounce(async function () {
    try {
      await this.$axios.post(ApiRoutes.Register, this.model)
      await this.$auth.loginWith('local', {
        data: this.model,
      })
      this.$store.dispatch('popup/keepPopup', true)
      this.$store.dispatch('popup/showPopup', {
        message: `Welcome ${this.$auth.user?.firstName} ${this.$auth.user?.lastName}`,
        color: 'primary',
        top: true,
      })
    } catch (e: any) {
      this.$store.dispatch('popup/showPopup', {
        message: 'Validation failed',
        color: 'error',
        right: true,
      })
    }
  }, 200)
}
