<template>
  <main class="font-body leading-5 p-2 mx-auto sm:w-128">
    <nuxt />
  </main>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Inter";
  src: url('~assets/fonts/Inter/Inter-Regular-slnt=0.ttf') format('truetype');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url('~assets/fonts/Inter/Inter-Medium-slnt=0.ttf') format('truetype');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url('~assets/fonts/Inter/Inter-Bold-slnt=0.ttf') format('truetype');
  font-weight: 700;
  font-display: swap;
}

.project-body {
  ul {
    list-style: disc;
    list-style-type: disc;
    margin: 0 0 1rem 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
}
</style>
