<template>
  <section>
    <nav>
      <a href="https://tickets.chaostreff-flensburg.de/ctfl/hoth2022/" class="nav-link"  target="_blank">Tickets</a>
      <a href="#program">Program</a>
      <a href="#faq">F.A.Q.</a>
    </nav>
  </section>
</template>

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
