/**
 * 外链图标工具
 * 根据 URL 自动识别并返回对应的图标
 */

import { EXTERNAL_ICONS } from '~/utils/icons/externalIcons'

/**
 * 根据 URL 获取对应的外链图标
 * @param url 外链地址
 * @returns SVG 图标字符串，如果没有匹配则返回默认图标
 */
export function getExternalIcon(url: string): string {
    // 默认外链图标（箭头）
    const defaultIcon = `<svg class="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>`

    try {
        // 创建 URL 对象
        const urlObj = new URL(url)
        // 获取域名
        const hostname = urlObj.hostname.toLowerCase()

        // 遍历所有预定义的图标，找到匹配的域名88
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [key, config] of Object.entries(EXTERNAL_ICONS)) {
            if (config.domains.some(domain => hostname.includes(domain))) {
                return config.svg
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
        // URL 解析失败，返回默认图标
        console.warn('Invalid URL:', url)
    }

    return defaultIcon
}

/**
 * 检查 URL 是否匹配已知的外链图标
 * @param url 外链地址
 * @returns 图标名称或 null
 */
export function matchExternalIcon(url: string): string | null {
    try {
        const urlObj = new URL(url)
        const hostname = urlObj.hostname.toLowerCase()

        for (const [key, config] of Object.entries(EXTERNAL_ICONS)) {
            if (config.domains.some(domain => hostname.includes(domain))) {
                return key
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
        return null
    }

    return null
}