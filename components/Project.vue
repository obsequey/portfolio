<template>
  <div class="project-card">
    <h2 class="project-card__title">
      {{ project.title }}
    </h2>
    <p class="project-card__description" v-html="project.description" />
    <div class="project-card__image-container" />
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="sass" scoped></style>
