<template lang="html">
  <main>
    <div class="welcome">
      <h1>Frilansande Frontend &amp; UX&#8209;designer <small>i Stockholm</small></h1>
    </div>
    <section class="page-content">
      <h2>Hej!</h2>
      <p>Jag heter Adam Heidmark och är frilansande frontendutvecklare och UX-designer verksam i Stockholm. Jag har arbetat med webbutveckling sedan 2010 och har varit verksam i en rad olika branscher. Allt från små startups till större internationella företag.</p>
      <p>I mitt arbete lägger jag stor fokus på att följa best practice och använda de standarder som finns. Men jag är även alltid på jakt efter att förbättra och förfina mina kunskaper inom såväl kod som design.</p>
      <p>Mer om mig och vad jag tidigare gjort hittar du i <nuxt-link to="/cv">mitt CV</nuxt-link>.</p>

      <h2>Fina ord</h2>
      <blockquote>
        "[...] Vi är väldigt glada över att ha fått förmånen med att arbeta med Adam, vilken förutom hans yrkeskunskaper är en exemplarisk teammedlem som fungerar mycket väl socialt och i grupp. [...]"
        <footer>Johnne Adermark, <br/>Konsultchef B3 Innovation</footer>
      </blockquote>
      <blockquote>
        "[...] Adam utförde uppdraget på bästa tänkbara sätt, han är kompetent och påläst, ställer relevanta frågor, är ordningsam och tar stort ansvar för sin egen leverans. Kort sagt så är vi oerhört nöjda med den insats som Adam gjorde, den kunde inte ha gjorts bättre! [...]"
        <footer>Martin Wallenius, <br/>Projektledare Sveaskog</footer>
      </blockquote>
    </section>
  </main>
</template>

<script>
export default {
  transition: 'slide',
  name: 'start',
  head: {
    title: 'Adam Heidmark',
    titleTemplate: '%s | Heidmark Consulting - Webbutveckling, Frontend och UX',
    meta: [
      { name: 'description', content: 'Adam Heidmark är frilansande frontendutvecklare och UX-designer verksam i Stockholm med över 7 års erfarenhet.' },
      { property: 'og:title', content: 'Heidmark Consulting - Webbutveckling, Frontend och UX' },
      { property: 'og:description', content: 'Adam Heidmark är frilansande frontendutvecklare och UX-designer verksam i Stockholm med över 7 års erfarenhet.' },
      { property: 'og:url', content: 'https://heidmark.se/' }
    ],
    link: [
      { rel: 'canonical', href: 'https://heidmark.se/' },
    ]
  }
}
</script>
