import axios from '~/plugins/axios'

export const state = () => ({
  data: {},
})

export const mutations = {
  setData(state, res) {
    state.data = res.data
  },
}

export const actions = {
  async fetchData({ commit }) {
    const res = await axios.get('/challenges')
    commit('setData', res)
  },
}
