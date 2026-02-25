<script setup lang="ts">
import {Icon} from "@iconify/vue";

const announcements = [
  {
    id: 1,
    title: 'Nuxt.js 3.0 官方文档已发布',
    content: 'Nuxt.js 3.0 官方文档已发布，请前往阅读。',
    date: '2023-09-01',
    important: true,
  },
  {
    id: 2,
    title: 'Nuxt.js 3.0 官方文档已发布',
    content: 'Nuxt.js 3.0 官方文档已发布，请前往阅读。',
  },
  {
    id: 1,
    title: 'Nuxt.js 3.0 官方文档已发布',
    content: 'Nuxt.js 3.0 官方文档已发布，请前往阅读。',
    date: '2023-09-01',
    important: true,
  },
  {
    id: 2,
    title: 'Nuxt.js 3.0 官方文档已发布',
    content: 'Nuxt.js 3.0 官方文档已发布，请前往阅读。',
  }
]

</script>

<template>
<div class="card-base p-4 m-2 bg-blue-50">
  <div class="">
    <div class="flex items-center  gap-2">
      <Icon height="30" icon="uil:calendar" width="30"/>
      <text class="text-xl font-bold">公告栏</text>
    </div>

    <div class=" max-h-[8rem] overflow-y-auto scrollbar-hide">
      <div
          v-for="announcement in announcements"
          :key="announcement.id"
          :class="{ 'sidebar-announcement__item--important': announcement.important }"
          class=""
      >
        <div :class="{ 'hr-sidebar-announcement__item--important' : announcement.important}"
             class="hr-sidebar-announcement__item"/>
        <div>
          <h4 class="sidebar-announcement__item-title">{{ announcement.title }}</h4>
          <p class="sidebar-announcement__item-text">{{ announcement.content }}</p>
          <div v-if="announcement.date" class="sidebar-announcement__item-date">
            {{ announcement.date }}
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>