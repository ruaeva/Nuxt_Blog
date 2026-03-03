<script setup lang="ts">
const { data: articles } = await useAsyncData(
    'articles-list',
    () => queryCollection('articles')
        .order('date' as any, 'DESC')
        .all()
)

useSeoMeta({
  title: '文章列表',
  description: '所有文章列表'
})
</script>

<template>
  <div class="card-content container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">所有文章</h1>
    <div class="space-y-4">
      <NuxtLink
          v-for="article in articles"
          :key="article._path"
          :to="article._path"
          class="block p-4 border rounded hover:bg-gray-50"
      >
        <h2 class="text-xl font-semibold">{{ (article as any).title }}</h2>
        <p class="text-gray-600 text-sm mt-1">
          {{ (article as any).date }} • {{ (article as any).description }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
