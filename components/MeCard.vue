<template>
  <div class="flex mb-16">
    <div class="rounded flex-shrink-0 overflow-hidden h-24 w-24 mr-5 shadow-2xl">
      <img class="h-100" src="/me.webp" alt="My photo" srcset>
    </div>
    <div class="flex flex-col justify-center align-middle">
      <h1 class="text-xl font-bold mb-1">
        Artyom Aristov
      </h1>
      <p class="mb-2 text-sm">
        Front-end developer
      </p>
      <ul aria-label="Social links" class="flex w-32">
        <li v-for="(socialButton, i) in $store.state.socials" :key="i" class="flex-1 mr-2">
          <a :href="socialButton.link" rel="noreferrer" target="_blank">
            <img :src="`/${socialButton.icon}`" :alt="socialButton.name" srcset>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.me {
  &__pic-container {
  }
  &__links {
    li {
    }
    a {
    }
  }
}
</style>
