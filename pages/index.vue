<template>
  <div class="grid grid-cols-4 gap-2">
    <me-card />
    <project
      v-for="project in $store.state.projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
import Project from '~/components/Project'
import MeCard from '~/components/MeCard'

export default {
  components: {
    Project,
    MeCard
  }
}
</script>

<style lang="scss" scoped>
.container {
}
</style>
