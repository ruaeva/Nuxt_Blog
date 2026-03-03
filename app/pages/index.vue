<template>
  <div class="card-content min-h-[50vh] flex flex-col items-center justify-center">
    <div class="bg-red-500 w-full max-w-full p-4 text-center">
      <h1 class="text-2xl font-bold">欢迎来到我的博客</h1>
      <p>这里将展示最新的文章和内容</p>
      <Posts />
    </div>
    <text class="mt-4">Hello world!</text>
  </div>
</template>

<script setup lang="ts">
  import Posts from '~/components/posts.vue'

</script>