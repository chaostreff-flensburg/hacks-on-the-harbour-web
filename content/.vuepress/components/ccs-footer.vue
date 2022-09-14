<template>
  <footer>
    <section>
      <p>Eine Projekt des <a href="https://chaostreff-flensburg.de/">Chaostreff Flensburg e.V.</a></p>
      <a href="https://chaostreff-flensburg.de/impressum/">Impressum</a> &
      <a href="https://chaostreff-flensburg.de/datenschutz/">Datenschutz</a>
    </section>
  </footer>
</template>

<style scoped>
footer {
  z-index: 10;
  padding: 24px;
  margin-top: 32px;

  color: var(--black);
  background-color: #fdf2d7;
}
section {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: auto;
  max-width: var(--max-site-width);

  font-size: 14px;
}
a {
  text-decoration: none;
}
</style>
