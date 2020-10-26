export const state = () => ({
  miniVariant: false,
})

export const mutations = {
  toggle(state) {
    state.miniVariant = !state.miniVariant
  },
}

export const getters = {
  getMiniVariant(state) {
    return state.miniVariant
  },
}
