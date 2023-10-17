export default ({ title, children, ...props }) => (
  <props.comp.Base title={title} {...props}>
      <props.comp.Header {...props} />
      <main class="mx-auto px-4 max-w-4xl mb-12">
        <props.comp.Navigation {...props} />
        <props.comp.LanguageSwitcher {...props} />
        <main class="prose max-w-none bg-cardBackground p-8 rounded">
          {children}
          <props.comp.Newsletter />
        </main>
      </main>
      <props.comp.Footer {...props} />
  </props.comp.Base>
);
