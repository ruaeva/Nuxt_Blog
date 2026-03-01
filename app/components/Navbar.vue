<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import SwitchThemeButton from "~/components/widget/SwitchThemeButton.vue";
import { SiteConfig } from "~/config";
import { getExternalIcon } from "~/utils/icons";

// 定义导航项类型
interface NavItem {
  path: string;
  name: string;
  external?: boolean;
  children?: NavItem[];
}

// 类型化 SiteConfig.navbar
const navbarItems = ref<NavItem[]>(SiteConfig.navbar);

const isNavbarVisible = ref(true);
const lastScrollY = ref(0);
const scrollThreshold = 150; // 滚动阈值

// 用于跟踪哪个导航项的下拉菜单是打开的
const hoveredItem = ref<string | null>(null);

// 下拉菜单位置
const dropdownPosition = ref({ left: "0px", top: "0px" });

// 缓存当前滚动位置
let currentScrollY = 0;

const handleScroll = () => {
  currentScrollY = window.scrollY;

  // 向下滚动且超过阈值时隐藏导航栏
  if (currentScrollY > lastScrollY.value && currentScrollY > scrollThreshold) {
    isNavbarVisible.value = false;
  }
  // 向上滚动或回到顶部时显示导航栏
  else if (
    currentScrollY < lastScrollY.value ||
    currentScrollY <= scrollThreshold
  ) {
    isNavbarVisible.value = true;
  }

  lastScrollY.value = currentScrollY;
};

// 节流函数优化性能
let ticking = false;
const throttledScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
};

// 悬浮进入时显示下拉菜单
const showDropdown = (itemPath: string, event: MouseEvent) => {
  hoveredItem.value = itemPath;
  // 计算菜单位置
  const target = event.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  dropdownPosition.value = {
    left: `${rect.left}px`,
    top: `${rect.bottom + 8}px`,
  };
};

// 悬浮离开时隐藏下拉菜单
const hideDropdown = () => {
  hoveredItem.value = null;
};

const hideTimeout = ref<number | null>(null);

// 延迟隐藏下拉菜单
const delayedHideDropdown = () => {
  hideTimeout.value = window.setTimeout(() => {
    hoveredItem.value = null;
  }, 100); // 延迟 100ms
};

// 取消隐藏下拉菜单
const cancelHideDropdown = () => {
  if (hideTimeout.value) {
    clearTimeout(hideTimeout.value);
    hideTimeout.value = null;
  }
};

onMounted(() => {
  window.addEventListener("scroll", throttledScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", throttledScroll);
  // 清理定时器避免内存泄漏
  if (hideTimeout.value) {
    clearTimeout(hideTimeout.value);
  }
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out flex justify-center px-10"
    :class="{ '-translate-y-full': !isNavbarVisible }"
  >
    <nav
      class="flex items-center justify-between overflow-hidden border-2 border-gray-50/30 bg-blue-100/30 backdrop-blur-xl mt-4 mb-2 py-2 px-4 bg-navbar rounded-2xl shadow-lg gap-4 md:gap-20 w-full max-w-7xl"
    >
      <!-- Logo -->
      <div class="logo flex-shrink-0">
        <NuxtLink to="/index" class="block hover:opacity-80 transition-opacity">
          <!-- <img src="/logo.png" alt="网站Logo" class="h-8 w-auto"> -->
        </NuxtLink>
      </div>

      <!-- 导航项 -->
      <div
        class="nav-items flex items-center gap-2 md:gap-4 flex-1 justify-center"
      >
        <div
          v-for="item in navbarItems"
          :key="item.path"
          class="nav-item relative"
          @mouseenter="(e) => showDropdown(item.path, e)"
          @mouseleave="delayedHideDropdown"
        >
          <!-- 有子项的导航 -->
          <div
            v-if="item.children && item.children.length > 0"
            class="px-4 py-1.5 rounded-xl hover:bg-rose-500/60 transition-all duration-200 flex items-center gap-1 cursor-pointer font-bold md:text-lg"
          >
            {{ item.name }}
            <!-- 下拉箭头 -->
            <svg
              class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': hoveredItem === item.path }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <!-- 无子项的普通导航 -->
          <NuxtLink
            v-else
            :to="item.path"
            :target="item.external ? '_blank' : '_self'"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            class="px-4 py-1.5 rounded-xl hover:bg-rose-500/60 transition-all duration-200 flex items-center gap-1 font-bold md:text-lg"
            active-class="bg-rose-300/60"
          >
            <!-- 外部链接图标（自动识别） -->
            <span v-if="item.external" v-html="getExternalIcon(item.path)" />
            {{ item.name }}
          </NuxtLink>

          <!-- 下拉菜单 - 使用 Teleport 避免堆叠上下文问题 -->
          <Teleport to="body">
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="
                  item.children &&
                  item.children.length > 0 &&
                  hoveredItem === item.path
                "
                class="fixed mt-2 overflow-hidden rounded-2xl bg-blue-100/30 backdrop-blur-2xl shadow-xl min-w-40 z-100"
                :style="{
                  left: dropdownPosition.left,
                  top: dropdownPosition.top,
                }"
                @mouseenter="cancelHideDropdown"
                @mouseleave="delayedHideDropdown"
              >
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.path"
                  :to="child.path"
                  :target="child.external ? '_blank' : '_self'"
                  :rel="child.external ? 'noopener noreferrer' : undefined"
                  class="block px-4 py-2 hover:bg-rose-400/30 transition-colors duration-200 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  <span class="flex items-center gap-2 text-sm font-bold">
                    <!-- 外部链接图标（自动识别） -->
                    <span
                      v-if="child.external"
                      v-html="getExternalIcon(child.path)"
                    />
                    {{ child.name }}
                  </span>
                </NuxtLink>
              </div>
            </transition>
          </Teleport>
        </div>
      </div>

      <!-- 控制按钮 -->
      <div class="control-box flex items-center gap-2 md:gap-3 flex-shrink-0">
        <div class="toggle-dark-mode">
          <WidgetSwitchThemeButton
            size="20px"
            ball="gradient"
            halo="linear"
            delay="1500"
            finish="delay"
            @onStatus="handleThemeChange"
          />
        </div>
        <button
          class="search-box p-2 rounded-lg hover:bg-rose-500 transition-colors duration-200"
          aria-label="搜索"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
  </header>

  <!-- 占位元素，防止内容被固定导航栏遮挡 -->
  <div class="h-20" />
</template>

<style scoped></style>
