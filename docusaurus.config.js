module.exports = {
  title: 'Yipnyap Documentation',
  tagline: 'Need help? I do too, tbh.',
  url: 'https://help.yipnyap.xyz/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Yipnyap',
      logo: {
        alt: 'Yipnyap Documentation Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Yipnyap &mdash; <a href="https://twitter.com/rekkisomo" target="_blank">project by @rekkisomo</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
