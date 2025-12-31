export interface NavbarConfig {
    name: string, // 菜单项名称
    path: string, // 菜单项路径
    external?: boolean; // 是否是外部链接
    icon?: string; // 菜单项图标
    // children?: (NavBarLink | LinkPreset)[]; // 支持子菜单，可以是NavBarLink或LinkPreset
}

