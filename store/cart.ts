import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { BaseRootStoreType } from '~/store/index'

const state = () => ({
  cart: [] as [],
})

type CartStoreType = ReturnType<typeof state>

const getters: GetterTree<BaseRootStoreType, CartStoreType> = {
  getCart: (state: any): boolean => state.cart,
}

const mutations: MutationTree<CartStoreType> = {
  setCart: (state: any, payload: any) => (state.cart = payload),
}

const actions: ActionTree<BaseRootStoreType, CartStoreType> = {
  async getCart({ commit }: any) {
    try {
      const { data } = await this.$axios.$get('/cart')
      commit('setCart', data)
    } catch (e: any) {
      console.log(e)
    }
  },
}

export { state, getters, mutations, actions, CartStoreType }
