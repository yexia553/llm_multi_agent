import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LLM Multi Agent",
  description: "大模型多智能体",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/icon.jpg',
    footer: {
    //   message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present <a href="https://panzhixiang.com" target="_blank">PANZHIXIANG</a>'
    },
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'blogs', link: '/blogs' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  sitemap: {
        hostname: 'https://llmmultiagent.com'
  },
})
