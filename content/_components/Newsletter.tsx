export default () => (
  <>
    <h2 id="newsletter-anmelden">Newsletter</h2>
    <form
      method="post"
      action="https://newsletter.chaostreff-flensburg.de/subscription/form"
      class=""
    >
      <input
        type="email"
        name="email"
        aria-label="Deine E-Mail Adresse (Pflichtfeld)"
        required
        placeholder="E-Mail"
        class="block w-full px-2 py-1 mb-2 rounded"
      />
      <input
        type="text"
        name="name"
        aria-label="Deine Name  (optional)"
        placeholder="Name (optional)"
        class="block w-full px-2 py-1 mb-2 rounded"
      />

      <input
        hidden
        id="31061"
        type="hidden"
        name="l"
        checked
        aria-hidden="true"
        value="31061148-d1af-45fd-a01b-fea8a2f9bf67"
      />

      <button
        type="submit"
        aria-label="Jetzt Abbonieren"
        class="btn btn-success bg-green text-white px-4 py-2 rounded"
      >
        Abonnieren
      </button>
    </form>
  </>
);
