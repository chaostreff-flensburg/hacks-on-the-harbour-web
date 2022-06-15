<template>
  <ClientOnly>
    <div class="languages">
      <router-link
        v-for="lang in languages"
        :key="lang.lang"
        :to="lang.path"
        class="language"
        :class="{ active: currentLang === lang }"
      >{{lang.lang}}</router-link>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: "ToggleLanguage",
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
    }
  },
  methods: {
    setLanguage(ev){
      const value = ev.target.value;
      this.$route.path = this.languages.find(lang => lang.lang === value)?.path;
    },
    updateLang(){
      this.currentLang = Object.entries(this.languages).find(([id, lang]) => this.$route.path.startsWith(lang.path))?.[1];
      if (!this.currentLang) this.$router.push(`${(this.languages[this.getUserLang()] ?? this.languages['en-UK']).path}${this.$route.path}`);
    },
    getUserLang(){
      return navigator.language || navigator.userLanguage;
    }
  },
  created(){
    this.updateLang();
  },
  watch: {
    '$route': function (){
      this.updateLang();
    }
  }
}
</script>

<style scoped>
.languages{
  padding: .5rem;
  border: 1px #aaaa solid;
  width: fit-content;
  border-radius: .5rem;
  background-color: #fff;
  margin-bottom: 1rem
}
.language{
  padding: .5rem;
  font-weight: normal;
}
.active{
  font-weight: bold;
}
</style>
