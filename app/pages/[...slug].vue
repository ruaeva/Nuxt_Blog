<template>
  <div
    class="card-content min-h-full min-w-full flex flex-col items-center justify-center"
  >
    <Icon
      icon="lucide:globe-x"
      class="absolute left-4 top-4 text-4xl "
    />
    <Icon
      icon="lucide:screen-share-off"
      class="absolute right-4 bottom-4 text-4xl "
    />
    <Icon
      icon="mdi:alert-circle-outline"
      class="absolute size-60 xl:size-120 text-gray-900/20 mb-2 z-"
    />

    <div class="flex flex-col items-center justify-center z-50">
      <h1 class="font-blod md:text-9xl text-7xl mb-2">404</h1>
      <p class="font-blod md:text-4xl text-2xl mb-2">页面不存在</p>
      <p class="md:text-2xl text-md mb-4">
        抱歉，您尝试访问的页面不存在或已被移动
      </p>
      <NuxtLink
        class="font-blod md:text-xl p-2 rounded-xl bg-blue-100/50 backdrop-blur-xl hover:bg-gray-50 transform transition-all hover:scale-95 hover:text-gray-700"
        to="/"
        >返回首页</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
// 可选：设置状态码
useHead({ title: "404 页面不存在" });
</script>

<style scoped></style>
