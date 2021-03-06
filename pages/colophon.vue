<template lang="html">
  <main class="page-content">
    <h1>Colophon</h1>
    <p>Här beskrivs detaljer rörande utvecklingen och produktionen av denna webbplats.</p>

    <h2>Rättigheter</h2>
    <p>Allt material på <nuxt-link to="/">heidmark.se</nuxt-link> och dess undersidor publiceras under <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" rel="noopener noreferrer">CC BY-NC-SA 3.0</a> om inget annat anges.</p>

    <h2>Typsnitt</h2>
    <p>Webbplatsen använder sig av 2 typsnitt:</p>
    <ul>
      <li><a href="https://fonts.google.com/specimen/Open+Sans" rel="noopener noreferrer">Open Sans</a> - För brödtext</li>
      <li><a href="https://fonts.google.com/specimen/Fjalla+One" rel="noopener noreferrer">Fjalla One</a> - För rubriker</li>
    </ul>
    <p>Samtliga typsnitt är internt hostade för att snabba upp nedladdningen samt för att undvika externa resurser.</p>

    <h2>Tillgänglighet &amp; optimering</h2>
    <p>Sidan är optimerad för skärmläsare enligt standard från <a href="https://www.w3.org/TR/using-aria/" rel="noopener noreferrer"><abbr title="Accessible Rich Internet Applications">ARIA</abbr></a>.</p>
    <p>Jag har optimerat laddtider med hjälp av cachning, minifiering och andra knep för att få sidan så snabb och komprimerad som möjligt.</p>
    <figure>
      <picture>
        <source media="(max-width: 299px)" srcset="@/assets/score_sm.png"/>
        <source media="(max-width: 300px)" srcset="@/assets/score_lg.png"/>
        <img src="@/assets/score_lg.png" title="Resultat från Google Lighthouse" alt="Resultat från Google Lighthouse"/>
      </picture>
      <figcaption>Resultat från <a href="https://developers.google.com/web/tools/lighthouse/">Google Lighthouse</a>.</figcaption>
    </figure>

    <h2>Ramverk &amp; tekniker</h2>
    <p>
      Sidan är skriven med hjälp av ramverket <a href="https://vuejs.org/" rel="noopener noreferrer">VueJS</a> och för rendera sidan från servern (<abbr title="Server side render">SSR</abbr>) används <a href="https://nuxtjs.org/" rel="noopener noreferrer">NUXT</a>.
      All <abbr title="Cascading Style Sheets">CSS</abbr> är kompilerad från <abbr title="Syntactically Awesome Style Sheets">SCSS</abbr> och är är <a href="http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fheidmark.se&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv" rel="noopener noreferrer">validerad och godkännd</a>.
    </p>
    <h3>Andra paket som används:</h3>
    <ul>
      <li><a href="https://momentjs.com/" rel="noopener noreferrer">momentjs</a> - För att hantera tid, datum osv.</li>
      <li><a href="https://matteogabriele.gitbooks.io/vue-analytics/content/" rel="noopener noreferrer">vue-analytics</a> - För implementation av Google Analytics.</li>
    </ul>
    <p>Webbplatsen ligger uppe som ett projekt i <a href="https://github.com/adahei/heidmark-consulting" rel="noopener noreferrer">GitHub</a>.</p>
  </main>
</template>

<script>
export default {
  transition: 'slide',
  name: 'colophon',
  head: {
    title: 'Colophon',
    titleTemplate: '%s | Heidmark Consulting - Webbutveckling, Frontend och UX',
    meta: [
      { name: 'description', content: 'Adam Heidmark är frilansande frontendutvecklare och UX-designer verksam i Stockholm med över 7 års erfarenhet.' },
      { property: 'og:title', content: 'Colophon | Heidmark Consulting - Webbutveckling, Frontend och UX' },
      { property: 'og:description', content: 'Adam Heidmark är frilansande frontendutvecklare och UX-designer verksam i Stockholm med över 7 års erfarenhet.' },
      { property: 'og:url', content: 'https://heidmark.se/colophon/' }
    ],
    link: [
      { rel: 'canonical', href: 'https://heidmark.se/colophon/' },
    ]
  }
}
</script>

<style lang="css">
</style>
