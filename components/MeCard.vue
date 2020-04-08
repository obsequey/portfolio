<template>
  <div class="col-span-4 grid grid-cols-4 gap-2">
    <div class="col-span-2 rounded overflow-hidden">
      <img src="~/assets/img/me.jpg" alt srcset>
    </div>
    <div class="col-span-2 flex flex-col justify-center align-middle">
      <div class="text-xl font-bold mb-1">
        Artyom Aristov
      </div>
      <div class="mb-2">
        Front-end developer
      </div>
      <ul class="flex">
        <li class="flex-1 mr-2">
          <a href="https://example.com" target="_blank">
            <img src="~/assets/img/twitter.svg" alt srcset>
          </a>
        </li>
        <li class="flex-1 mr-2">
          <a href="https://example.com" target="_blank">
            <img src="~/assets/img/github.svg" alt srcset>
          </a>
        </li>
        <li class="flex-1 mr-2">
          <a href="https://example.com" target="_blank">
            <img src="~/assets/img/facebook.svg" alt srcset>
          </a>
        </li>
        <li class="flex-1">
          <a href="https://example.com" target="_blank">
            <img src="~/assets/img/telegram.svg" alt srcset>
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
