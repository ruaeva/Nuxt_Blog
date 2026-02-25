/**
 * 导航栏配置接口
 */
export interface NavbarConfig {
    /** 菜单项显示名称 */
    name: string
    /** 菜单项路径或URL */
    path: string
    /** 是否是外部链接 */
    external?: boolean
    /** 菜单项图标名称 */
    icon?: string
    /** 菜单项描述（可选，用于tooltip） */
    description?: string
    /** 是否在新标签页打开 */
    target?: '_blank' | '_self'
    /** 子菜单配置 */
    children?: NavbarConfig[]
    /** 是否禁用 */
    disabled?: boolean
    /** 自定义CSS类名 */
    className?: string
}

/**
 * 站点图标配置
 */
export interface SiteIconConfig {
    /** 默认favicon */
    icon: string
    /** 16x16快捷图标 */
    shortcut: string
    /** Apple设备图标 */
    apple: string
    /** SVG格式图标（推荐） */
    svg?: string
    /** 其他尺寸图标 */
    sizes?: {
        [key: string]: string
    }
}

/**
 * 社交媒体链接配置
 */
export interface SocialLinks {
    name: string
    url: string
    external?: boolean
}

/**
 * SEO配置
 */
export interface SeoConfig {
    /** Open Graph图片 */
    ogImage?: string
    /** Twitter卡片类型 */
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
    /** Twitter用户名 */
    twitterSite?: string
    /** 主题颜色 */
    themeColor?: string
    /** 站点验证码（Google、Bing等） */
    verification?: {
        google?: string
        bing?: string
        yandex?: string
        [key: string]: string | undefined
    }
}

/**
 * 功能开关配置
 */
export interface FeatureFlagsConfig {
    /** 是否启用搜索功能 */
    enableSearch?: boolean
    /** 是否启用深色模式 */
    enableDarkMode?: boolean
    /** 是否启用评论功能 */
    enableComments?: boolean
    /** 是否启用分析统计 */
    enableAnalytics?: boolean
    /** 是否启用RSS */
    enableRss?: boolean
    /** 是否启用PWA */
    enablePwa?: boolean
}

/**
 * 分析统计配置
 */
export interface AnalyticsConfig {
    /** Google Analytics ID */
    googleAnalytics?: string
    /** Baidu统计ID */
    baiduAnalytics?: string
    /** Umami配置 */
    umami?: {
        websiteId: string
        src: string
    }
    /** 自定义分析工具 */
    [key: string]: any
}

/**
 * 评论系统配置
 */
export interface CommentsConfig {
    /** 评论系统类型 */
    provider?: 'giscus' | 'disqus' | 'utterances' | 'waline'
    /** Giscus配置 */
    giscus?: {
        repo: string
        repoId: string
        category: string
        categoryId: string
        mapping?: string
        theme?: string
    }
    /** Disqus配置 */
    disqus?: {
        shortname: string
    }
    /** Utterances配置 */
    utterances?: {
        repo: string
        issueTerm?: string
        theme?: string
    }
    /** Waline配置 */
    waline?: {
        serverURL: string
        lang?: string
    }
}

/**
 * 站点配置主接口
 */
export interface SiteConfig {
    /** 站点名称 */
    siteName: string
    /** 站点描述 */
    description: string
    /** 站点关键词 */
    keywords?: string[]
    /** 站点作者 */
    author?: string
    /** 站点URL */
    url?: string
    /** 站点语言 */
    lang: string
    /** 站点图标配置 */
    icon: SiteIconConfig
    /** 导航栏配置 */
    navbar: NavbarConfig[]
    /** 社交媒体链接 */
    social?: SocialLinks
    seo?: SeoConfig
    /** 功能开关 */
    features?: FeatureFlagsConfig
    /** 分析统计配置 */
    analytics?: AnalyticsConfig
    /** 评论系统配置 */
    comments?: CommentsConfig
    /** 页脚配置 */
    footer?: {
        /** 版权信息 */
        copyright?: string
        /** 起始年份 */
        startYear?: number
        /** 备案号 */
        icp?: string
        /** 自定义链接 */
        links?: Array<{
            name: string
            url: string
            external?: boolean
        }>
    }
}

/**
 * 语言配置
 */
export type SupportedLocale = 'en' | 'zh-CN' | 'zh-TW' | 'ja' | 'ko' | 'fr' | 'de' | 'es'

/**
 * 多语言配置映射
 */
export type LocaleConfig = Record<SupportedLocale, Partial<SiteConfig>>

/**
 * 导航链接预设类型（用于快速创建常用链接）
 */
export type LinkPreset =
    | 'home'
    | 'blog'
    | 'archive'
    | 'about'
    | 'tags'
    | 'categories'
    | 'friends'
    | 'rss'

/**
 * 导航链接预设映射
 */
export const NavbarPresets: Record<LinkPreset, Omit<NavbarConfig, 'name'>> = {
    home: { path: '/', icon: 'home' },
    blog: { path: '/blog', icon: 'book' },
    archive: { path: '/archive', icon: 'archive' },
    about: { path: '/about', icon: 'user' },
    tags: { path: '/tags', icon: 'tag' },
    categories: { path: '/categories', icon: 'folder' },
    friends: { path: '/friends', icon: 'users' },
    rss: { path: '/rss.xml', icon: 'rss', external: true },
}

/**
 * 类型守卫：检查是否为外部链接
 */
export function isExternalLink(path: string): boolean {
    return /^(https?:)?\/\//.test(path)
}

/**
 * 类型守卫：检查导航项是否有子菜单
 */
export function hasChildren(item: NavbarConfig): item is Required<Pick<NavbarConfig, 'children'>> & NavbarConfig {
    return Array.isArray(item.children) && item.children.length > 0
}

/**
* Profile配置
* */
export interface ProfileConfig {
    /** 头像URL */
    avatar: string
    /** 昵称 */
    name: string
    /** 描述 */
    bio?: string
    /** 社交链接 */
    social?: SocialLinks
}