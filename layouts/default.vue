<template>
  <div class="font-sans p-2">
    <nav-menu />
    <nuxt />
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'

export default {
  components: {
    NavMenu
  }
}
</script>

<style lang="scss" scoped></style>
