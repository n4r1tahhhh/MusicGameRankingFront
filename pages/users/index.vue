<template>
  <sampleCard title="All Users">
    <div v-for="user in $store.state.user.data" :key="user.name">
      {{ user.name }}
      {{ user.email }}
    </div>
  </sampleCard>
</template>

<script>
import simpleCard from '~/components/simpleCard'

export default {
  components: [simpleCard],
  beforeCreate() {
    this.$store.dispatch('user/fetchData')
  },
}
</script>
