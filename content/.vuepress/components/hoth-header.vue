<template>
  <figure class="header">
    <router-link to="/" class="logo-link">
      <img src="../../assets/logo.png" class="logo" id="logo" alt="hacks on the harbour logo">
    </router-link>
    <img src="../../assets/header-back.svg" class="back-curve" alt="">
    <ClientOnly>
      <rocket-animation v-if="showRakeden"/>
    </ClientOnly>
  </figure>
</template>

<script>
  import NoSSR from 'vue-no-ssr'
  import rocketAnimation from "./rocket-animation";

  export default {
    components: {
      'no-ssr': NoSSR
    },
  data(){
    return {
      showRakeden: true
  }
},
    created(){
      this.updateRakedenStatus()
    },
    
  watch: {
    '$route': function (){
      this.updateRakedenStatus();
    }
  },
  methods: {
    updateRakedenStatus(){
      if(window.location.href.includes('keineRakeden')){
        this.showRakeden = false;
      }
    },
  }
  }
</script>

<style scoped>
*::selection {
  appearance: none;
}
figure {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 52px;
  padding-bottom: 24px;
  margin: 0;

  background-color: #b6e1f9;
}
.logo {
  position: relative;
  z-index: 10;

  width: 640px;
  margin: 0 12px;

  cursor: pointer;
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.25));
  transition: opacity 0.5s ease-in-out;
}
.back-curve{
  width: 100%;
  position: absolute;
  top: 100%;
}
@media (max-width: 700px) {
  .logo {
    width: 95vw;
    margin: 0 auto;
  }
}
@media (max-width: 420px) {
  .logo {
    width: 90vw;
    opacity: 1;
  }
}
</style>

<style>
.p5Canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>
