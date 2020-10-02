import axios from '~/plugins/axios'

export const state = () => ({
  data: {},
})

export const actions = {
  async fetchData() {
    const res = await axios.get('/users')
    state.data = res.data
  },
}
