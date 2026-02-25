<script setup lang="ts">
import { ref } from "vue";
import { useRoute, navigateTo } from "#app";

// 定义 page 类型
interface PageData {
  title?: string;
  content?: string;
  [key: string]: any;
}

const route = useRoute();
const page = ref<PageData | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

// 路径合法性校验函数
const isValidPath = (path: string): boolean => {
  // 简单校验路径是否合法（可根据实际需求扩展）
  return /^\/[\w\-\/]*$/.test(path);
};

// 获取页面数据的异步函数
const fetchPageData = async (path: string) => {
  try {
    if (!isValidPath(path)) {
      throw new Error("Invalid path");
    }
    const result = await queryCollection("content").path(path).first();
    if (!result) {
      throw new Error("Page not found");
    }
    page.value = result;
  } catch (err: any) {
    error.value = err.message || "Failed to load page";
    console.error(`Error fetching page data for path "${path}":`, err);
  } finally {
    loading.value = false;
  }
};

// 初始化数据加载
await fetchPageData(route.path);

// 页面不存在时跳转至 404
if (!page.value && !error.value) {
  await navigateTo("/404", { redirectCode: 404 });
}
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <ContentRenderer v-else-if="page" :value="page" />
</template>
