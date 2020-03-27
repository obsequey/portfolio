<template>
  <nav class="h-10 col-span-4 row-span-1 mb-2">
    <ul class="h-full grid grid-cols-2 gap-2">
      <li class="col-span-1 hover:bg-gray-300 rounded">
        <nuxt-link
          class="w-full h-full flex justify-center items-center"
          to="/"
        >
          Home
        </nuxt-link>
      </li>
      <li class="col-span-1 hover:bg-gray-300 rounded">
        <nuxt-link
          class="w-full h-full flex justify-center items-center"
          to="/docs"
        >
          Documents
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
nav {
  ul {
    li {
    }
  }
}
</style>
