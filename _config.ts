import lume from "lume/mod.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import minify_html from "lume/plugins/minify_html.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import typography from "npm:@tailwindcss/typography";
import anchor from "npm:markdown-it-anchor";

const markdown = {
  plugins: [[anchor, { level: 2 }]],
  keepDefaultPlugins: true,
};

const site = lume(
  {
    src: "./content",
  },
  {
    markdown,
  }
);

site.use(
  multilanguage({
    extensions: [".html", ".tsx"],
    languages: ["en", "de"],
    defaultLanguage: "en",
  })
);
site.use(minify_html());
site.use(
  tailwindcss({
    extensions: [".html", ".tsx"],
    options: {
      plugins: [typography],
      theme: {
        colors: {
          background: "#3b579a",
          header: "#b6e1f9",
          white: "#fff",
          cardBackground: "hsla(0,0%,100%,.8)",
          green: "#4caf50",
          footerBackground: "#fdf2d7",
          dark: "#222",
        },
        fontFamily: {
          mono: ["Space Mono", "monospace"],
        },
      },
    },
  })
);
site.use(postcss());
site.use(jsx_preact());
site.use(lightningcss());
site.copy("assets");
site.copy("favicon.ico");

export default site;
