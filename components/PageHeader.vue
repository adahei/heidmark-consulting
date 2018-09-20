<template lang="html">
  <header class="page-header">
    <nuxt-link to="/" title="Till startsidan" aria-label="Till startsidan"><Logo size="sm"/></nuxt-link>
    <nav class="nav">
      <nuxt-link to="/">Hem</nuxt-link>
      <nuxt-link to="/cv">CV</nuxt-link>
      <nuxt-link to="/colophon">Colophon</nuxt-link>
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  data () {
    return {
      navOpen: false
    }
  },
  components: {
    Logo
  }
}
</script>
