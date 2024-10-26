import { Component, Vue } from 'nuxt-property-decorator'
import * as _ from 'lodash'
import { LayoutTypes } from '~/ts/enum'

@Component({ layout: LayoutTypes.Auth, middleware: ['loggedIn'] })
export default class Login extends Vue {
  model = {
    email: '' as String,
    password: '' as String,
  }

  showPassword = false as Boolean
  emailRules = [
    (v: any) => !!v || 'Email is required',
    (v: any) => /.+@.+/.test(v) || 'E-mail must be valid',
  ]

  passwordRules = [
    (v: any) => !!v || 'Password is required',
    (v: any) => (v && v.length >= 8) || 'Password must have 8+ characters',
  ]

  // eslint-disable-next-line import/namespace
  login = _.debounce(async () => {
    try {
      await this.$auth.loginWith('local', {
        data: this.model,
      })
      await this.$store.dispatch('popup/keepPopup', true)
      await this.$store.dispatch('popup/showPopup', {
        message: `Welcome ${this.$auth.user?.firstName} ${this.$auth.user?.lastName}`,
        color: 'primary',
        top: true,
      })
    } catch (e: any) {
      await this.$store.dispatch('popup/showPopup', {
        message: e.response.data.message,
        color: 'error',
        right: true,
      })
    }
  }, 200)
}
