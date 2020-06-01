<template>
  <div class="m-5">
    <me-card />
    <article class="mb-16">
      <h2 class="font-bold text-xl mb-8">
        About me
      </h2>
      <p class="text-sm">
        I am a passionate web developer, who is ready to pick up challenging work to improve my skills. I prefer working with web frameworks (specifically Vue & Nuxt) and headless CMS (Strapi or headless WordPress), but I also welcome projects, which require some  Docker experience, Linux server skills, or basic website typesetting. I am always looking forward to work on accessibility improving tasks. Currently working with NGOs 💜 locally in Saint Petersburg, Russia.
      </p>
    </article>
    <section>
      <h2 class="font-bold text-xl mb-8">
        Projects
      </h2>
      <ul>
        <project
          v-for="(project, i) in projects"
          :id="`card-${i}`"
          :key="i"
          :project="project"
          :id-of-selected-card="selectedCardId"
          @select-this-card="handleSelectedCard($event)"
        />
      </ul>
    </section>
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
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: true }]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
