module.exports = {
  base: '/vuepress-plugin-view-source-demo/',
  title: 'vuepress-plugin-view-source',
  dest: 'docs/.vuepress/dist',

  themeConfig: {
    search: false,
    sidebar: [
      {
        title: 'Pages',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/pages/page_01.md',
          '/pages/page_02.md',
          '/pages/page_03.md',
          '/pages/page_04.md',
        ],
      },
    ],
  },

  plugins: [
    ['view-source'],
  ],

  markdown: {
    extendMarkdown: (md) => {
      md.set({ breaks: true });
    },
  },
};
