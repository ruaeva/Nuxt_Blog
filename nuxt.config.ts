import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
    modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/hints','@pinia/nuxt',],
    // 是否开启服务端渲染 默认开启
    ssr: true,
    vite: {
        plugins: [
            tailwindcss()
        ]
    },
    // 全局CSS样式
    css: ['@/style/main.css'],
    // 配置页面头部信息
    app: {
        head: {
            title: 'Ruaeva',
            meta: [
                {name: 'description', content: 'test'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'preload', href: '/style/main.css', as: 'style'},
                {rel: 'stylesheet', href: '/style/main.css'}
            ]
        }
    },
    // 内容配置
    content: {},
    // 服务端运行端口
    devServer: {
        // host: '0.0.0.0',
        port: 3000
    },
    // 添加构建优化配置
    build: {},
    // nitro 配置
    nitro: {
        // 配置代理，前后端分离
        // devProxy: {
        //  "api" : {
        //      target: 'http://localhost:8080', // 目标地址
        //      changeOrigin: true, // 是否改变请求头
        //      prependPath: true,  // 是否添加路径前缀
        //      rewrite: (path) => path.replace(/^\/api/, '') // 路径前缀替换
        // }
    },
    // 添加自动导入配置
    // imports: {
    //     dirs: ['composables/**']
    // },
    // 是否开启开发工具
    devtools: {enabled: false},
    // 兼容性设置
    compatibilityDate: '2024-04-03',
})