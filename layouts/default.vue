<template>
  <div class="font-body leading-5 p-2 mx-auto sm:w-128">
    <nuxt />
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Inter";
  src: url('~assets/fonts/Inter/Inter-Regular-slnt=0.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: "Inter";
  src: url('~assets/fonts/Inter/Inter-Medium-slnt=0.ttf') format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: "Inter";
  src: url('~assets/fonts/Inter/Inter-Bold-slnt=0.ttf') format('truetype');
  font-weight: 700;
}
</style>
