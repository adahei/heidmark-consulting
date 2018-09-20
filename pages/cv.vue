<template lang="html">
  <main class="page-content">
      <h1>CV</h1>
      <div class="cv-contact">
        <ul class="cv-contact__details">
          <li><b class="label">Namn:</b> <span class="value">Adam Heidmark</span></li>
          <li><b class="label">Född:</b> <span class="value">1984</span></li>
          <li><b class="label">Nationalitet:</b> <span class="value">Svensk</span></li>
          <li><b class="label">Telefon:</b> <a href="tel:0739096695" class="value">0739 096 695</a></li>
          <li><b class="label">E&#8209;post:</b> <a href="mailto:adam@heidmark.se" class="value">adam@heidmark.se</a></li>
        </ul>
        <div class="cv-contact__img">
          <img class="cv-contact__img__image" src="@/assets/adam_heidmark.jpeg" alt="Adam Heidmark">
        </div>
      </div>
      <section>
        <h2>Sammanfattning</h2>
        <p>Jag ser mig själv som en senior frontend-utvecklare med goda kunskaper i UX och UI. Genomgående i min karriär har jag lagt stor fokus på att optimera mitt arbete till att vara skalbart, läsbart, enkelt men ändå optimerat för sitt syfte.</p>
        <p>I mitt arbete lägger jag stor fokus på att följa best practice och använda de standarder som finns. Men jag är även alltid på jakt efter att förbättra och förfina mina kunskaper inom såväl kod som design.</p>
        <p>En roll som jag ofta blivit tilldelad eller automatiskt hamnat i är att vara bollplank mellan beställare, designers och även programmerare. Detta är en roll jag trivs i och ser att kommunikation är grundläggande för att ett projekt ska lyckas.</p>
      </section>
      <section>
        <h2>Arbetslivserfarenhet</h2>
        <div class="search" role="search">
          <label for="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" version="1">
              <path fill="#333" d="M9 15C12 15 15 12 15 9 15 6 12 3 9 3 6 3 3 6 3 9 3 12 6 15 9 15ZM9 18C4 18 0 14 0 9 0 4 4 0 9 0 14 0 18 4 18 9 18 14 14 18 9 18Z"/>
              <rect fill="#333" transform="rotate(-45)" x="-1" y="19" width="3" height="12"/>
            </svg>
            Sök nyckelord
          </label>
          <input type="search" id="search" v-model="search">
        </div>
        <transition-group name="list-complete" tag="article">
          <article v-for="(item, i) in filtered" class="work-item" :key="`work-${i}`">
            <header class="work-item__header">
              <h1 class="title">{{item.company}} - {{item.role}}</h1>
              <div class="date">
                <span class="time">
                  <time class="from" :datetime="date(item.from)">{{date(item.from)}}</time> -
                  <time class="to" :datetime="date(item.to)">{{date(item.to)}}</time>
                </span>
                <span class="duration">{{duration(item.from, item.to)}}</span>
              </div>
            </header>
            <ul class="tags">
              <li class="tag" v-for="tag in item.env">{{tag}}</li>
            </ul>
            <div v-html="item.description"></div>
          </article>
        </transition-group>
        <aside v-if="filtered.length === 0" class="alert alert--warning">
          Kunde inte hitta något baserat på nyckelordet du angav.
        </aside>
      </section>
      <section>
        <h2>Utbildning</h2>
        <article class="work-item">
          <header class="work-item__header">
            <h1 class="title">Kandidatprogram, IT- &amp; Kommunikationsvetenskap, Stockholms Universitet</h1>
            <div class="date">
              <span class="time">
                <time class="from" :datetime="date([2007,7,1])">{{date([2007,7,1])}}</time> -
                <time class="to" :datetime="date([2010,5,1])">{{date([2010,5,1])}}</time>
              </span>
              <span class="duration">{{duration([2007,7,1], [2010,5,1])}}</span>
            </div>
          </header>
          <p>Studerade utveckling och design av IT-produkter och gränssnitt med användaren och användningen i fokus.</p>
          <b>Axplock av kurser (år 1 &amp; 3):</b>
          <ul>
            <li>Interaktionsdesign av interaktiva system (Prototyping)</li>
            <li>Datasäkerhet</li>
            <li>Multimodala system</li>
            <li>Objektorienterad programmering (JAVA)</li>
            <li>Databasmetodik</li>
          </ul>
          <p>Under <b>år 2</b> inriktade jag mig på kommunikationsdesign.</p>
          <ul>
            <li>Presentationsteknik</li>
            <li>Retorik</li>
            <li>Kommunikationsdesign</li>
            <li>Visuell &amp; språklig kommunikation</li>
          </ul>
        </article>
      </section>
      <section>
        <h2>Språk</h2>
        <ul>
          <li>Svenska - Modersmål</li>
          <li>Engelska - Flytande</li>
          <li>Tyska - Nybörjare</li>
        </ul>
      </section>
    </main>
</template>

<script>
import moment from 'moment'
export default {
  transition: 'slide',
  name: 'cv',
  head: {
    title: 'CV för Adam Heidmark',
    titleTemplate: '%s | Heidmark Consulting - Webbutveckling, Frontend och UX',
    meta: [
      { name: 'description', content: 'Adam Heidmark är frilansande frontendutvecklare och UX-designer verksam i Stockholm med över 7 års erfarenhet.' },
      { property: 'og:title', content: 'CV för Adam Heidmark | Heidmark Consulting - Webbutveckling, Frontend och UX' },
      { property: 'og:description', content: 'Adam Heidmark är frilansande frontendutvecklare och UX-designer verksam i Stockholm med över 7 års erfarenhet.' },
      { property: 'og:url', content: 'https://heidmark.se/cv/' }
    ],
    link: [
      { rel: 'canonical', href: 'https://heidmark.se/cv/' },
    ]
  },
  beforeMount() {
    moment.locale('sv_SE')
  },
  data () {
    return {
      search: '',
      work: [
        {
          from: [2015,10,1],
          to: [2018,8,15],
          company: "Utecklarbolaget",
          role: "Konsult",
          description: "<p class='lead'>Utvecklarbolaget är ett konsultbolag som levererar seniora, högpresterande utvecklare med spetskompetens inom frontendutveckling till organisationer och företag.</p>" +
                       "<p>Anställd som konsult</p>"
        },
        {
          from: [2017,5,1],
          to: [2018,8,1],
          company: "Feelgood",
          role: "Frontend / UI / UX (Konsult)",
          env: ['Vue', 'Vue CLI', 'Vuex', 'Vue router', 'i18n', 'Rest API', 'Tillgänglighet (ARIA)', 'HTML5', 'SCSS', 'JSON', 'Git', 'Trello', 'Scrum'],
          description: "<p class='lead'>Feelgood arbetar främst med företagshälsovård med ett brett spektrum av hälsotjänster till företag, organisationer och privatpersoner.</p>" +
                       "<p>På Feelgood var jag med i deras digitaliseringsfas genom att skapa en kundportal där Feelgoods kunder kunde logga in för att se avtal, bokningar, fakturor osv.</p>" +
                       "<p>Jag hade ett helhetsansvar från arkitektur till implementation av frontend. Teamet bestod av mig som frontend-utvecklare, 2 backend-utvecklare samt en UX-designer.</p>"
        },
        {
          from: [2017,11,1],
          to: [2018,2,1],
          company: "Utvecklarbolaget",
          role: "Utvecklare / UI / UX",
          env: ['Vue', 'Vuex', 'Vue router', 'Firebase', 'SCSS', 'HTML5', 'UI', 'UX', 'PHP'],
          description: "<p>Internt projekt för Utvecklarbolaget. Fick ganska fria händer att göra om deras hemsida från grunden, från design och ramverk till implementation. Arbetade nära Utvecklarbolagets VD samt en copywriter.</p>"
        },
        {
          from: [2016,9,17],
          to: [2017,4,31],
          company: "SAAB",
          role: "Frontend / UI / UX (Konsult)",
          env: ['JavaScript', 'KnockoutJS', 'SCSS', 'HTML5', 'jQuery', 'Websocket', 'RequireJS', 'JSON', 'Squish', 'Jira', 'Git', 'UI', 'UX'],
          description: "<p class='lead'>SAAB Innovations arbetar med tekniska lösningar främst riktat mot försvarsindustrin.</p>" +
                       "<p>Huvudansvar av kod, arkitektur och UI/UX för att uppdatera en mycket gammal och komplex applikation för beräkning av skjutgränser. Tät dialog med kravställare (Försvarsmakten) och SAABs egna experter på befintligt system för att ta fram ett så användarvänligt och effektivt system som möjligt med dels all befintlig funktionalitet samt nyutvecklad funktionalitet.</p> <p>I slutet av uppdraget hjälpte jag test-teamet med automatiserade <b>GUI tester</b> med hjälp av <b>Squish</b>.</p>"
        },
        {
          from: [2016,5,1],
          to: [2016,9,1],
          company: "Elektroskandia",
          role: "Frontend / UI / UX (Konsult)",
          env: ['HTML5', 'SCSS', 'Bootstrap 4', 'UI', 'UX', 'Sketch', 'JavaScript', 'Ajax', 'Rest API', 'jQuery', 'jQuery UI', 'SEO', 'Visual Studio', 'TFS', 'Scrum'],
          description: "<p class='lead'>Elektroskadia är Sveriges ledande el-teknikgrossister.</p>" +
                       "<p>Mitt uppdrag var att ta fram en mer modern design som ändå skulle påminna om tidigare design samt skriva om hela frontend på deras webbshop. En önskan var att inte implementera något ramverk utan all kod skulle vara i vanilla Javascript eller jQuery.</p>" +
                       "<p>Arbetet skedde agilt med täta diskussioner med både marknads- och utvecklingsavdelningen. Fick även möjlighet att utbilda anställda utvecklare i best practices när det kommer till Javascript och SCSS.</p>"
        },
        {
          from: [2016,3,1],
          to: [2016,5,1],
          company: "Sveaskog",
          role: "Frontend / UI / UX (Konsult)",
          env: ['HTML5', 'SCSS', 'Bootstrap 4', 'UI', 'UX', 'Sketch', 'Angular', 'Gulp', 'NodeJS'],
          description: "<p class='lead'>Sveaskog är Sveriges största skogsägare vars kärnverksamhet är att bruka skogen och sälj timmer, massaved och biobränsle.</p>" +
                       "<p>Detta uppdrag gick ut på att ta fram ett komponent-bibliotek och grafiskt regelverk och dokumentation i <b>Angular</b> som sedan skulle kunna användas i framtida implementationer av utvecklare. Jag arbetade tätt tillsammans med en grafiker.</p>"
        },
        {
          from: [2016,1,1],
          to: [2016,3,1],
          company: "Albert / B3IT",
          role: "Frontend / UX (Konsult)",
          env: ['HTML5', 'SCSS', 'Bootstrap 4', 'UI', 'UX', 'Sketch', 'ReactJS', 'Firebase', 'Git', 'Scrum'],
          description: "<p class='lead'>Albert är en digital plattform utformad till att lära ut mattematik till mellan- och högstadieelever.</p>" +
                       "<p>Arbetade i ett mycket agilt team med snabba beslutsvägar då vi hade tät kommunikation med slutkund. Min roll var att ta fram ett ramverk med komponenter i <b>React</b> samt applicera dess i applikationen.</p>"
        },
        {
          from: [2015,11,1],
          to: [2016,1,1],
          company: "Epiceros",
          role: "Frontend (Konsult)",
          env: ['HTML5', 'SCSS', 'CSS Components', 'Sketch', 'ReactJS', 'Git', 'NodeJS'],
          description: "<p class='lead'>Epiceros skapar mjukvara för kasino- och spel.</p>" +
                       "<p>Mitt första uppdrag som konsult var på Epiceros när de var väldigt nystartade. Min roll var att ta fram ett bibliotek av komponenter i <b>React</b> baserat på skisser levererat av grafiker.</p>"
        },
        {
          from: [2014,2,1],
          to: [2015,10,1],
          company: "Aditro",
          role: "Frontend / Area specialist",
          env: ['HTML5', 'SCSS', 'UI', 'UX', 'Git', 'Scrum', 'Kanban', 'Umbraco'],
          description: "<p class='lead'>Aditro erbjuder modulära HR- och lönesystem i form av en molntjänst.</p>" +
                       "<p>På Aditro arbetade jag som frontend-utvecklare i 1 av totalt 7 team. De olika teamen var spridda. Jag var baserad i Stockholm, andra satt i Växjö och 2 team satt i Indien. Alla team hade sin egen modul som huvudfokus, i det team jag ingick i arbetade vi med själva grundramverket för hela applikationen. Min roll var att ta fram en standard samt bas-komponenter i ett komponentbibliotek som andra teame kunde implementera i sina moduler.</p>" +
                       "<p>Med tiden fick jag mer ansvar och 2015 skapades ett renodlat UX-team som skulle kontrollera helheten av applikationen. Min roll i teamet var att kodgranska all kod, säkerställa kvaliteten på komponenter och vara bollplank till designers.</p>" +
                       "<p>Jag höll även seminarier i hur man skriver effektiv <b>SCSS</b> samt best practices i <b>HTML</b> och <b>CSS</b>.</p>"
        },
        {
          from: [2013,4,1],
          to: [2014,2,1],
          company: "Allra",
          role: "Frontend / UX / UI",
          env: ['HTML5', 'LESS', 'SEO', 'Bootstrap 3', 'UI', 'UX', 'jQuery', 'JavaScript', 'Ajax', 'Razor', 'Umbraco'],
          description: "<p class='lead'>Allra erbjuder idag enbart försäkringar, då jag arbetade på Allra erbjöd dom även pensionsförvaltning, lån samt sparande.</p>" +
                       "<p>På Allra arbetade jag som ensam frontend-utvecklare tillsammans med två backend-utvecklare och byggde upp Allras site från grunden i sammarbete med en extern designer. Jag var involverad i val av ramverk och teknik för frontend.</p>" +
                       "<p>Allras sida byggdes upp med hjälp av <b>Umbraco</b> och stor vikt lades på att sidan skulle vara plattformsoberoende samt stödja alla moderna browsers.</p>"
        },
        {
          from: [2010,7,1],
          to: [2013,2,1],
          company: "Lensway",
          role: "Frontend",
          env: ['HTML5', 'LESS', 'SEO', 'UI', 'UX', 'jQuery', 'JavaScript', 'Ajax', 'Microformats', 'MustacheJS', 'JSP', 'XSLT'],
          description: "<p class='lead'>Lensway säljer linser, glasögon och solglasögon via sin onlinebutik</p>" +
                       "<p>Min roll på Lensway var i första hand frontend-utvecklare men fick med tiden även skapa design och grafik. Efter en tid fick designen ett rejält upplyft med hjälp av extern firma. Under den processen arbetade jag tätt med den externa firmans designer och agerade bollplank, producerade interaktiva prototyper och bistå med teknisk kompetens för frontend-frågor.</p>" +
                       "<p>Jag hade även huvudansvaret för att optimera sidans organiska sök i form av <b>SEO</b>.</p>" +
                       "<p>Under tiden på Lensway fick jag även fria händer att designa och koda upp Lensways andra webbshoppar: Nordic Lenses och YourLenses.</p>" +
                       "<p>Jag ansvarade även för design och layout på fakturor med hjälp av <b>PlanetPress</b> samt kodade mail i <b>XSLT</b> och senare med hjälp av <b>Apsis</b></p>"
        }
      ]
    }
  },
  computed: {
    filtered () {
      return this.work.filter( keyword => {
        if (keyword.env) {
          const tags = keyword.env
          for (let i = 0; i < tags.length; i++) {
            if (tags[i].toLowerCase().indexOf(this.search.toLowerCase()) > -1) {
              return true
            }
          }
        }
      })
    }
  },
  methods: {
    date (date) {
      return moment(date).format('YYYY-MM-DD')
    },
    duration (from, to) {
      const start = moment(from)
      const end = moment(to)
      return end.from(start, true)
    }
  }
}
</script>

<style lang="scss">
.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
