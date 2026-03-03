import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // 定义文章集合
    articles: defineCollection({
      type: 'page',
      source: {
        include: 'articles/**/*.md', // 只读 articles 下的 md
        exclude: ['**/_*'] // 排除下划线开头文件
      },
      // 自动生成 slug（文件名转路径）
      slugify: {
        lower: true,
        remove: /[*+~.()'"!:@]/g
      }
    })
  }
})
