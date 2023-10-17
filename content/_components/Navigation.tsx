export default (props) => (
  <nav class="bg-white flex justify-between items-center justify-evenly py-3 text-xl mb-6 rounded sticky top-0">
    {props.lang === "en" ? (
      <>
        <a
          href="https://tickets.chaostreff-flensburg.de/hoth/hoth23/"
          class="nav-link"
          target="_blank"
        >
          Tickets
        </a>
        <a href="/#program">Program</a>
        <a href="/#faq">F.A.Q.</a>
        <a href="/coc">CoC</a>
      </>
    ) : (
      <>
        <a
          href="https://tickets.chaostreff-flensburg.de/hoth/hoth23/"
          class="nav-link"
          target="_blank"
        >
          Tickets
        </a>
        <a href="/de/#programm">Programm</a>
        <a href="/de/#faq">F.A.Q.</a>
        <a href="/de/coc">CoC</a>
      </>
    )}
  </nav>
);
