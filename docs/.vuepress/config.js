module.exports = {
  base: '/vuepress-plugin-view-source-demo/',
  title: 'vuepress-plugin-view-source',
  dest: 'docs/.vuepress/dist',

  themeConfig: {
    search: false,
    sidebar: [],
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
