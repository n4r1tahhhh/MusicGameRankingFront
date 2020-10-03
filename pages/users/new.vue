<template>
  <inputForm title="Sign up" @submit="submit" @clear="clear">
    <form>
      <v-text-field v-model="name" label="User ID"></v-text-field>
      <v-text-field v-model="email" label="E-mail"></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        label="Password"
      ></v-text-field>
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
      email: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      // set params
      const params = new URLSearchParams()
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('password', this.password)
      // post and redirect
      const res = await axios.post('/users', params)
      if (res.status === created) {
        this.clear()
        this.$router.push('/users')
      }
    },
    clear() {
      this.name = ''
      this.email = ''
      this.password = ''
    },
  },
}
</script>
