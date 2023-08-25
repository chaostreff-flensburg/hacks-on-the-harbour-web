<template>
  <section>
    <ClientOnly>
      <nav v-if="currentLang && currentLang.lang === 'english'">
        <a href="https://tickets.chaostreff-flensburg.de/hoth/hoth23/" class="nav-link"  target="_blank">Tickets</a>
        <a href="/en/#program">Program</a>
        <a href="/en/#faq">F.A.Q.</a>
        <a href="/en/coc.html">CoC</a>
      </nav>
      <nav v-else-if="currentLang && currentLang.lang === 'german'">
        <a href="https://tickets.chaostreff-flensburg.de/hoth/hoth23/" class="nav-link"  target="_blank">Tickets</a>
        <a href="/de/#programm">Programm</a>
        <a href="/de/#faq">F.A.Q.</a>
        <a href="/de/coc.html">CoC</a>
      </nav>
    </ClientOnly>
  </section>
</template>

<script>
export default {
  name: 'HothNav',
  data(){
    return {
      currentLang: undefined,
      languages: {
        'en-UK': {
          lang: 'english',
          path: '/en',
        },
        'de-DE': {
          lang: 'german',
          path: '/de',
          id: 'de-DE',
        },
      }
    };
  },
  methods: {
    updateLang() {
      this.currentLang = Object.entries(this.languages).find(([id, lang]) => this.$route.path.startsWith(lang.path))?.[1];
    }
  },
  created(){
    this.updateLang();
  },
  watch: {
    '$route': function (){
      this.updateLang();
    }
  },
}
</script>

// @ToDo: rainbow colors, responsive side margin

<style scoped>
section {
  position: sticky;
  top: 0;
  z-index: 20;
}
nav {
  min-height: 38px;
  max-width: 920px;

  padding: 8px 0;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  border-radius: var(--border-radius);
  background-color: var(--background);
  box-shadow: 0 4px 12px var(--shadow);
}
@media (max-width: 920px) {
  nav {
    border-radius: 0;
  }
}
a {
  padding: 2px 4px;

  color: var(--foreground);
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
}
</style>
