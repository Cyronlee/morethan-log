const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Cyron",
    image: "/avatar.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "全栈开发者",
    bio: "会使用工具",
    email: "li4yuan@gmail.com",
    linkedin: "",
    github: "cyronlee",
    instagram: "",
  },
  projects: [
    {
      name: `Z-Board`,
      href: "https://zboard.cyron.site",
    },
    {
      name: `BA Copilot`,
      href: "https://www.bacopilot.site",
    },
    {
      name: `Nana Card Game`,
      href: "https://nana.cyron.site/",
    },
    {
      name: `WebRTC Zoom`,
      href: "https://zoom.cyron.site",
    },
    {
      name: `Journey Crafter`,
      href: "https://journey-crafter.cyron.site",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Cyron's Blog",
    description: "Welcome",
  },

  // CONFIG configration (required)
  link: "https://blog.cyron.site",
  since: 2018, // If leave this empty, current year will be used.
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
