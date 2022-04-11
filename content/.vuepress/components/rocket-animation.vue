<template>
  <section class="rocketAnimationWrapper" ref="wrapper">
    <img src="../../assets/rakede-farbe.png" alt="rakede" ref="rakede" class="rakede">
  </section>
</template>

<script>

const Rocket = class {
  constructor({parent, element = document.createElement('div')}) {
    this.parent = parent;
    this.x = 0;
    this.y = 0;
    this.el = element.cloneNode(true);
    this.init();
  }
  init(){
    this.parent.appendChild(this.el);
  }
  remove(){
    this.el.remove();
  }
  isVisible(){
    return this.x > 0 && this.x < this.parent.clientWidth
      && this.y > 0 && this.y < this.parent.clientHeight;
  }
  async animate(){
    let dirX = 0;
    let dirY = 0;
    do {
      dirX = Math.random() * 8 - 4;
      dirY = Math.random() * 8 - 4;
    } while(dirX**2 + dirY**2 < 2)

    let angle = Math.atan(dirX/dirY);

    if (dirY > 0){
      this.y = 10;
    } else {
      angle += Math.PI;
      this.y = window.innerHeight - 10;
    }
    this.x = Math.random()*window.innerWidth;

    this.el.style.transform = `rotate(${angle}rad)`;
    this.el.classList.add('active');
    while (this.isVisible()){
      this.x += dirX;
      this.y += dirY;

      this.el.style.left = `${this.x}px`;
      this.el.style.bottom = `${this.y}px`;
      await sleep(20);
    }
    this.el.classList.remove('active');
  }
}

const sleep = ms => new Promise(res => setTimeout(res, ms));

export default {
  name: "rocket-animation",
  methods: {
    async animation() {
      const slot = async () => {
        while (true){
          let rocket = new Rocket({parent: this.$refs.wrapper, element: this.$refs.rakede});
          await rocket.animate();
          rocket.remove();
          await sleep(100);
        }
      };
      for (let i = 0; i<8; i++){
        slot();
      }
    }
  },
  mounted() {
    this.animation();
  }
}
</script>

<style scoped>
.rocketAnimationWrapper{
  pointer-events: none;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.rakede{
  position: absolute;
  height: 5rem;
  opacity: 0;
}
.active{
  opacity: 1;
}
</style>
