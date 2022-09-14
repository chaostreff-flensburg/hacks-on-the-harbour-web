module.exports = {
  locales: {
    "/de/": {
      lang: "de-DE",
      title: "Hacks On The Harbour",
      description: "Das Hacks on the Harbour ist ein Maker & Hacker Festival - direkt am Hafen von Sønderborg."
    }
  },
  head: [
    ['link', { rel: 'preload', href: '/fonts/space-mono-v4-latin/space-mono-v4-latin-regular.woff2', as: 'font', type: 'font/woff2', crossorigin: "anonymous" }],
    ['link', { rel: 'preload', href: '/fonts/space-mono-v4-latin/space-mono-v4-latin-italic.woff2', as: 'font', type: 'font/woff2', crossorigin: "anonymous" }],
    ['link', { rel: 'preload', href: '/fonts/space-mono-v4-latin/space-mono-v4-latin-700.woff2', as: 'font', type: 'font/woff2', crossorigin: "anonymous" }],
    ['link', { rel: 'preload', href: '/fonts/space-mono-v4-latin/space-mono-v4-latin-700italic.woff2', as: 'font', type: 'font/woff2', crossorigin: "anonymous" }],
    ['link', {rel: "icon", sizes: "32x32", href: "/favicon/favicon-32x32.png"}],
    ['link', {rel: "icon", sizes: "16x16", href: "/favicon/favicon-16x16.png"}],
    ['link', {rel: "icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png"}],
    ['link', { rel: "shortcut icon", href: "/favicon/favicon.ico"}],
    ['link', { rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['meta', { name: "msapplication-TileColor", content: "#da532c"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  markdown: {
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.set({ breaks: true });
    }
  },
  dest: "./dist"
};
