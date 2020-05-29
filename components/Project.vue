<template>
  <li
    aria-label="Project card"
    :class="
      `select-none rounded relative cursor-pointer transform transition-all relative duration-75 p-3 bg-white mb-5 pointer ${
        cardIsOpened
          ? 'shadow-2xl scale-105'
          : 'hover:shadow-2xl hover:scale-105'
      }`
    "
    @click="selectCard"
  >
    <h3
      :class="
        `text-md leading-6 font-bold ${project.location ? 'mb-1' : 'mb-4'}`
      "
    >
      {{ project.title }}
    </h3>
    <h4 v-if="project.location" class="mb-4 text-sm">
      {{ project.location }}
    </h4>
    <ul class="flex mb-4">
      <li v-for="(icon, i) in project.stack" :key="i" class="mr-2">
        <img class="h-5" :src="`${icon}`" alt="">
      </li>
    </ul>
    <div v-if="!cardIsOpened" class="text-sm">
      {{ project.description }}
    </div>
    <div v-else class="wl-project-body text-sm">
      <div class="mb-4 list-disc" v-html="sanitizedProjectBody" />
      <div class="mb-4">
        <a
          target="_blank"
          rel="noreferrer"
          class="text-gray-600 underline"
          :href="project.link"
        >{{ project.link }}</a>
      </div>
      <img class="h-100" :src="`${project.img}`" alt="" srcset="">
    </div>
    <button
      aria-label="Expand project card"
      :class="
        `transform transition-transform duration-75 mt-4 block w-5 mx-auto opacity-25 ${
          cardIsOpened ? 'rotate-180' : ''
        }`
      "
    >
      <img src="~/assets/img/arrow.svg" alt="" srcset="">
    </button>
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
.wl-project-body {
  ul {
    li {
      list-style-type: disc;
    }
  }
}
</style>
