<script setup lang="ts">
/*
* 初始化主题
* @desc 在页面加载或更换主题时，最好在“head”里加内联，避免FOUC
* */

// 使用响应式变量跟踪当前主题状态
const currentTheme = ref<'light' | 'dark' | 'system'>('system');

function initializeTheme() {
  try {
    // 检查本地存储的主题设置
    const storedTheme = localStorage.getItem("theme");

    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  } catch (e) {
    // Handle case where localStorage is not available
    console.warn("localStorage not available, falling back to system preference");
    document.documentElement.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }
}

// Function to set light theme
function setLightTheme() {
  try {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  } catch (e) {
    console.warn("localStorage not available");
  }
}

// Function to set dark theme
function setDarkTheme() {
  try {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  } catch (e) {
    console.warn("localStorage not available");
  }
}

// Function to follow system preference
function setSystemTheme() {
  try {
    localStorage.removeItem("theme");
    document.documentElement.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  } catch (e) {
    console.warn("localStorage not available");
  }
}

// Initialize theme on page load
initializeTheme();

</script>

<template>

</template>

<style scoped>

</style>