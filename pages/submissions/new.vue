<template>
  <inputForm title="Submit score" @submit="submit" @clear="clear">
    <form>
      <v-text-field v-model="score" label="score" type="number"></v-text-field>
    </form>
  </inputForm>
</template>

<script>
import axios from '~/plugins/axios'
import inputForm from '~/components/inputForm'

const created = 201

export default {
  components: { inputForm },
  data() {
    return {
      score: null,
    }
  },
  methods: {
    async submit() {
      // set params
      const params = new URLSearchParams()
      params.append('score', this.score)
      // post and redirect
      const res = await axios.post('/submissions', params)
      if (res.status === created) {
        this.clear()
        this.$router.push('/submissions')
      }
    },
    clear() {
      this.score = null
    },
  },
}
</script>
