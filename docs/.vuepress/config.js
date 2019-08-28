const pluginsConf = require('../../config/pluginsConf.js');
const sidebarConf = require('../../config/sidebarConf.js');
const navConf = require('../../config/navConf.js');

module.exports = {
	base: "/test/"
    port: 8080,
    title: '郑俊仁',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', { rel: 'icon', href: '/logoko.png' }],
        ['meta', { name: 'Keywords', content: '郑俊仁的博客,zjr,zhengjunren,郑俊仁,郑俊仁博客'}],
        ['meta', { name: 'Description', content: '郑俊仁的博客,zjr,zhengjunren,郑俊仁,郑俊仁博客'}]
    ],
    plugins: pluginsConf,
    themeConfig: {
        nav: navConf,
        lastUpdated: '上次更新',
        sidebar: sidebarConf
    }
};
