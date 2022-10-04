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
          '/pages/entire_page_01.md',
          '/pages/entire_page_02.md',
          '/pages/entire_page_03.md',
          '/pages/range_01.md',
          '/pages/range_02.md',
          '/pages/range_03.md',
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
