<template>
  <simpleCard title="All Challenges">
    <div v-for="c in $store.state.challenge.data" :key="c.name">
      {{ c.name }}
    </div>
  </simpleCard>
</template>

<script>
import simpleCard from '~/components/simpleCard'

export default {
  components: { simpleCard },
  beforeCreate() {
    this.$store.dispatch('challenge/fetchData')
  },
}
</script>
