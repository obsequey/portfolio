<template>
  <li :class="`select-none rounded relative cursor-pointer transform transition-all relative duration-75 p-4 mb-5 pointer ${cardIsOpened ? 'shadow-2xl scale-105' : 'hover:shadow-2xl hover:scale-105'}`" @click.self="selectCard">
    <h3 class="text-md leading-6 font-bold mb-4" @click="selectCard">
      {{ project.title }}
    </h3>
    <!-- TODO: add sorting by techs later -->
    <ul class="inline-flex mb-4">
      <li v-for="(icon, i) in project.stack" :key="i" class="mr-2">
        <img class="h-5" :src="`${icon}`" alt="">
      </li>
    </ul>
    <div v-if="!cardIsOpened" @click="selectCard">
      {{ project.description }}
    </div>
    <div v-else>
      <div class="mb-4" @click="selectCard">
        {{ project.body }}
      </div>
      <a target="_blank" class="text-gray-600 underline inline-block mb-4" :href="project.link">{{ project.link }}</a>
      <img class="h-100" :src="`${project.img}`" alt="" srcset="" @click="selectCard">
    </div>
    <button :class="`transform transition-transform duration-75 mt-4 block w-5 mx-auto opacity-25 ${cardIsOpened ? 'rotate-180' : ''}`" @click="selectCard">
      <img src="~/assets/img/arrow.svg" alt="" srcset="">
    </button>
  </li>
</template>

<script>
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
    }
  },
  watch: {
  },
  methods: {
    selectCard () {
      this.$emit('select-this-card', this.$vnode.key)
    },
    debounce (func, interval) {
      let onCooldown = false
      return function () {
        if (onCooldown) { return }
        func.apply(this, arguments)
        onCooldown = true
        setInterval(() => (onCooldown = false), interval)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
