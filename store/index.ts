import type { GetterTree, ActionTree, MutationTree } from 'vuex'

import { CartStoreType } from './cart'
import { PopupStateType } from './popup'

type BaseRootStoreType = {
  auth: CartStoreType
  popUp: PopupStateType
}

const state = () => ({} as BaseRootStoreType)

const getters: GetterTree<BaseRootStoreType, BaseRootStoreType> = {}

const mutations: MutationTree<BaseRootStoreType> = {}

const actions: ActionTree<BaseRootStoreType, BaseRootStoreType> = {}

export { state, getters, mutations, actions, BaseRootStoreType }
