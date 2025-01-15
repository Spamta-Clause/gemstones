import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Dungeons & Dragons",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel Decorative",
        body: "Eagle Lake",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f4ecd8",           // Sepia-like background for light mode
          lightgray: "#d1c6b1",       // Warmer gray for light mode, matching sepia tones
          gray: "#a59e8f",            // A softer gray to blend with the sepia background
          darkgray: "#6e5e4f",        // Darker gray that complements sepia
          dark: "#2b2b2b",            // Dark background color for light mode
          secondary: "#9C1C1C",       // D&D Red (secondary color)
          tertiary: "#f57373",
          highlight: "rgba(143, 159, 169, 0.15)",  // Subtle highlight
          textHighlight: "#fff23688", // Text highlight with a golden tint      
        },
      
      darkMode: {
          light: "#161618",           // Dark background for dark mode
          lightgray: "#393639",       // Darker gray for dark mode
          gray: "#646464",            // Standard gray
          darkgray: "#d4d4d4",        // Lighter gray for contrasts
          dark: "#ebebec",            // Light background for dark mode
          secondary: "#2cc9c0",       // Terraria Teal (new color for secondary)
          tertiary: "#84a59d",        // Soft teal for secondary elements
          highlight: "rgba(143, 159, 169, 0.15)",  // Subtle highlight
          textHighlight: "#b3aa0288", // Text highlight with a yellowish tint
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
