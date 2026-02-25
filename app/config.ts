import type {
    NavbarConfig,
    ProfileConfig,
    SocialLinks,
} from "@/types/config"


 /**
 * 站点语言配置
 * 支持的语言: 'en' | 'zh-CN' | 'zh-TW' | 'ja' | 'ko' 等
 */
const SITE_LANG = "en" as const

/**
 * 站点基础信息配置
 */
const SITE_INFO = {
    name: "Nuxt.js 3.0 中文文档",
    description: "Nuxt.js 3.0 完整中文文档 - 学习现代化的 Vue.js 全栈框架",
    keywords: ["Nuxt.js", "Vue.js", "SSR", "全栈框架", "中文文档"],
    author: "Ruaeva",
    url: "https://your-domain.com",
    locale: SITE_LANG,
} as const

/**
 * 站点图标配置
 */
const SITE_ICONS = {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    svg: "/favicon.svg", // 推荐添加 SVG 格式
} as const

/**
 * 导航栏配置
 */
const NAVBAR_ITEMS: NavbarConfig[] = [
    {
        name: "Home",
        path: "/",
        icon: "home", // 可选：图标名称

    },
    {
        name: "Archive",
        path: "/archive",
        icon: "archive",
    },
    {
        name: "Link",
        path: "/link",
        icon: "link",
        // 可选：添加子项
        children: [
            {
                name: "GitHub",
                path: "https://github.com/yourusername",
                external: true, // 自动显示 GitHub 图标
            },
            {
                name: "Twitter",
                path: "https://twitter.com/yourusername",
                external: true, // 自动显示 Twitter 图标
            },
            {
                name: "bill",
                path: "https://bilibili.com/yourusername",
                external: true, // 自动显示 Bilibili 图标
            },
        ]
    },
    {
        name: "Acg",
        path: "/acg",
        icon: "star",
    },
    {
        name: "About",
        path: "/about",
        icon: "user",
    },
]

/**
 * 社交媒体链接配置
 */
const SOCIAL_LINKS: SocialLinks[] = [
    {
        name:"github",
        url:"https://github.com/yourusername",
        external: true
    },
    {
        name:"twitter",
        url:"https://twitter.com/yourusername",
        external: true
    },
    {
        name:"bilibili",
        url:"https://bilibili.com/yourusername",
        external: true
    },
    {
        name:"youtube",
        url:"https://youtube.com/yourusername",
        external: true
    },
    {
        name:"instagram",
        url:"https://instagram.com/yourusername",
        external: true
    },
    {
        name:"linkedin",
        url:"https://linkedin.com/in/yourusername",
        external: true
    },
    {
        name:"facebook",
        url:"https://facebook.com/yourusername",
        external: true
    },
    {
        name:"weibo",
        url:"https://weibo.com/yourusername",
        external: true
    }
] as const

/*
*  个人信息配置
* */
const PROFILE_CONFIG: ProfileConfig = {
    avatar: "https://avatars.githubusercontent.com/u/10656201?v=4",
    name: "Ruaeva",
    bio: "This is my blog."
} as const



/**
 * SEO 配置
 */
const SEO_CONFIG = {
    ogImage: "/og-image.png",
    twitterCard: "summary_large_image",
    twitterSite: "@yourusername",
    themeColor: "#fbbf24", // amber-400
} as const

/**
 * 功能开关配置
 */
const FEATURE_FLAGS = {
    enableSearch: true,
    enableDarkMode: true,
    enableComments: false,
    enableAnalytics: true,
} as const

/**
 * 站点主配置导出
 */
export const SiteConfig = {
    // 基础信息
    siteName: SITE_INFO.name,
    description: SITE_INFO.description,
    keywords: SITE_INFO.keywords,
    author: SITE_INFO.author,
    url: SITE_INFO.url,
    lang: SITE_INFO.locale,

    // 图标配置
    icon: SITE_ICONS,

    // 导航配置
    navbar: NAVBAR_ITEMS,

    // 社交链接
    social: SOCIAL_LINKS,

    // 个人信息配置
    profile: PROFILE_CONFIG,

    // SEO 配置
    seo: SEO_CONFIG,

    // 功能开关
    features: FEATURE_FLAGS,
} as const

/**
 * 根据语言获取本地化配置
 */
// export const getLocalizedConfig = (lang: string = SITE_LANG) => {
//     const locales: Record<string, typeof SITE_INFO> = {
//         en: {
//             name: "Nuxt.js 3.0 Documentation",
//             description: "Complete documentation for Nuxt.js 3.0 - Modern Vue.js full-stack framework",
//             keywords: ["Nuxt.js", "Vue.js", "SSR", "Full-stack Framework", "Documentation"],
//             author: "Ruaeva",
//             url: "https://your-domain.com",
//             locale: "en",
//         },
//         "zh-CN": {
//             name: "Nuxt.js 3.0 中文文档",
//             description: "Nuxt.js 3.0 完整中文文档 - 学习现代化的 Vue.js 全栈框架",
//             keywords: ["Nuxt.js", "Vue.js", "SSR", "全栈框架", "中文文档"],
//             author: "Ruaeva",
//             url: "https://your-domain.com/zh-CN",
//             locale: "zh-CN",
//         },
//     }
//
//     return locales[lang] || locales.en
// }

/**
 * 导出类型定义
 */
export type SiteConfigType = typeof SiteConfig