/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.sergiolopezsouto.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,

  transform: async (config, path) => ({
    loc: config.siteUrl + path,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: path === "/" ? 1.0 : 0.6,
  }),

  exclude: ["/404"], // Excluir páginas no necesarias
};

module.exports = config;
