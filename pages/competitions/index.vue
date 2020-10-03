<template>
  <simpleCard title="All Competitions">
    <div v-for="c in $store.state.competition.data" :key="c.name">
      {{ c.name }}
    </div>
  </simpleCard>
</template>

<script>
import simpleCard from '~/components/simpleCard'

export default {
  components: { simpleCard },
  beforeCreate() {
    this.$store.dispatch('competition/fetchData')
  },
}
</script>
