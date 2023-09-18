/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://www.perfilhumane.com',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    alternateRefs: [
        {
            siteUrl: 'https://perfilhumane.com',
            hreflang: 'perfilhumane',
        }
    ],
    // Default transformation function
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
}