<template>
  <li
    aria-label="Project card"
    tabindex="0"
    :aria-expanded="cardIsOpened ? 'true' : 'false'"
    :class="
      `select-none rounded relative hover:z-20 focus:z-20 cursor-pointer transform transition-all relative duration-75 p-3 bg-white mb-5 pointer ${
        cardIsOpened
          ? 'shadow-2xl scale-105 z-10'
          : 'hover:shadow-2xl hover:scale-105 focus:shadow-2xl focus:scale-105'
      }`
    "
    @click="selectCard"
    @keyup.enter="selectCard"
  >
    <h3
      aria-label="Project name"
      :class="
        `text-md leading-6 font-bold ${project.location ? 'mb-1' : 'mb-4'}`
      "
    >
      {{ project.title }}
    </h3>
    <h4
      v-if="project.location"
      aria-label="Location where work was done"
      class="mb-4 text-sm"
    >
      {{ project.location }}
    </h4>
    <ul aria-label="Technologies used" class="flex mb-4">
      <li v-for="(icon, i) in project.stack" :key="i" class="mr-2">
        <img class="h-5" :src="`${icon}`" alt="">
      </li>
    </ul>
    <p v-if="!cardIsOpened" aria-label="Short description" class="project-body text-sm">
      {{ shortenedProjectBody }}
    </p>
    <div
      v-else
      aria-label="Project card inner content"
      class="project-body text-sm"
    >
      <div
        aria-label="Full description text block"
        class="mb-4"
        v-html="sanitizedProjectBody"
      />
      <a
        v-if="project.link"
        aria-label="Link to the project"
        target="_blank"
        rel="noreferrer"
        class="block text-gray-600 underline mb-4"
        :href="project.link"
      >{{ project.link }}</a>
      <img
        class="h-100"
        :src="`${project.img}`"
        :alt="`${project.title} fullpage screenshot`"
        srcset=""
      >
    </div>
    <button
      id="arrow-toggle"
      aria-label="Toggle the project card"
      :tabindex="cardIsOpened ? '0' : '-1'"
      :class="
        `transform transition-transform duration-75 mt-4 block w-5 mx-auto opacity-25 ${
          cardIsOpened ? 'rotate-180' : ''
        }`
      "
      @keyup.enter="selectCard"
    />
  </li>
</template>

<script>
// Markedown parser
import marked from 'marked'

// DOMSanitizer
import DOMPurify from 'dompurify'

export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default: null
    },
    idOfSelectedCard: {
      type: Number,
      default: null
    }
  },
  computed: {
    cardIsOpened () {
      return this.idOfSelectedCard === this.$vnode.key
    },
    sanitizedProjectBody () {
      return DOMPurify.sanitize(marked(this.project.body))
    },
    shortenedProjectBody () {
      return this.project.body.split('.').slice(0, 1).join('') + '.'
    }
  },
  watch: {},
  methods: {
    selectCard () {
      this.$emit('select-this-card', this.$vnode.key)
    },
    debounce (func, interval) {
      let onCooldown = false
      return function () {
        if (onCooldown) {
          return
        }
        func.apply(this, arguments)
        onCooldown = true
        setInterval(() => (onCooldown = false), interval)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#arrow-toggle {
  height: 20px;
  background-image: url('~assets/img/arrow.svg');
  background-size: cover;
}
</style>
