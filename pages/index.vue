<template>
  <div class="m-5">
    <me-card />
    <h2 class="font-bold text-xl mb-8">
      Projects
    </h2>
    <ul>
      <project
        v-for="project in projects"
        :id="`card-${project.id}`"
        :key="project.id"
        :project="project"
        :id-of-selected-card="selectedCardId"
        @select-this-card="handleSelectedCard($event)"
      />
    </ul>
  </div>
</template>

<script>
import Project from '~/components/Project'
import MeCard from '~/components/MeCard'

export default {
  components: {
    Project,
    MeCard
  },
  data () {
    return {
      selectedCardId: null
    }
  },
  computed: {
    projects () {
      return this.$store.state.projects
    }
  },
  methods: {
    handleSelectedCard (id) {
      if (this.selectedCardId === id) {
        // close card on click if it's already opened
        this.selectedCardId = null
      } else {
        this.selectedCardId = id
      }
    }
  },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
