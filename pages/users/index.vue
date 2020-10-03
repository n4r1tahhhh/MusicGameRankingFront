<template>
  <simpleCard title="All Users">
    <div v-for="user in $store.state.user.data" :key="user.Name">
      {{ user.Name }}
      {{ user.Email }}
    </div>
  </simpleCard>
</template>

<script>
import simpleCard from '~/components/simpleCard'

export default {
  components: { simpleCard },
  beforeCreate() {
    this.$store.dispatch('user/fetchData')
  },
}
</script>
