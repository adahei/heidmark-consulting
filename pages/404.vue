<template lang="html">
  <div class="page_404">
    <h1 class="header">404</h1>
    <p>Sidan du letar efter verkar inte finnas.</p>
    <nuxt-link to="/">Tillbaka till start</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'error',
  transition: 'slide',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  metaInfo: {
    title: '404',
    titleTemplate: '%s | Heidmark Consulting',
    meta: [
      {name: 'description', content: 'Sidan du letar efter verkar inte finnas'},
      {name: 'robots', content: 'noindex,follow'},
      {property: 'og:locale', content: 'sv_SE'},
      {property: 'og:title', content: 404},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://heidmark.se'},
      {property: 'og:description', content: 'Sidan du letar efter verkar inte finnas'}
    ]
  }
}
</script>

<style lang="scss" scoped>
.page_404 {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  .header {
    animation: flip 5s ease-in-out infinite;
  }
}
@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
