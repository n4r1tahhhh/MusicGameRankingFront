<template>
  <inputForm title="Add Challenge" @submit="submit" @clear="clear">
    <form>
      <v-text-field v-model="name" label="challenge"></v-text-field>
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
      name: '',
    }
  },
  methods: {
    async submit() {
      // set params
      const params = new URLSearchParams()
      params.append('name', this.name)
      // post and redirect
      const res = await axios.post('/challenges', params)
      if (res.status === created) {
        this.clear()
        this.$router.push('/challenges')
      }
    },
    clear() {
      this.name = ''
    },
  },
}
</script>
