import type {
    NavbarConfig
} from "@/types/config"

// 定义站点语言
const SITE_LANG = "en"; // 语言代码，例如：'en', 'zh_CN', 'ja' 等。


// 站点配置
export const SiteConfig = {
    // 站点名称
    title: 'Nuxt.js 3.0 中文文档',
    // 站点描述
    description: 'Nuxt.js 3.0 中文文档',
    // 站点图标
    icon: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    // 站点语言
    lang: SITE_LANG,
    // 站点作者
    navbar: [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Archive',
            path: '/archive'
        },
        {
            name: 'Link',
            path: '/link'
        },
        {
            name: 'Acg',
            path: '/acg'
        },
        {
            name: 'About',
            path: '/about'
        },


    ] as NavbarConfig[],
}