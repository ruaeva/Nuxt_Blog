// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
    // Your custom configs here
    {
        // 忽略规则
        rules: {
            // '@typescript-eslint/no-unused-vars': 'off',         // 忽略未使用变量
            // '@typescript-eslint/no-explicit-any': 'off',        // 忽略显式 any
            '@typescript-eslint/no-non-null-assertion': 'off',  // 忽略非空断言
            '@typescript-eslint/no-empty-function': 'off',      // 忽略空函数
            // '@typescript-eslint/no-empty-interface': 'off',     // 忽略空接口
            '@typescript-eslint/no-inferrable-types': 'off',    // 忽略类型推导
            '@typescript-eslint/no-unused-export': 'off'        // 忽略未使用的导出

        }
    }
])
