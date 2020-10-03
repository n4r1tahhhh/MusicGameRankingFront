<template>
  <simpleCard title="All Submits">
    <div v-for="s in $store.state.submission.data" :key="s.score">
      {{ s.score }}
    </div>
  </simpleCard>
</template>

<script>
import simpleCard from '~/components/simpleCard'

export default {
  components: { simpleCard },
  beforeCreate() {
    this.$store.dispatch('submission/fetchData')
  },
}
</script>
