<template>
  <div class="container">
    <h1>背景API测试页面</h1>
    <div v-if="loading">加载中...</div>
    <div v-else-if="error">
      <p>错误: {{ error }}</p>
    </div>
    <div v-else>
      <p>Blob URL: {{ blobData.url }}</p>
      <p>文件大小: {{ blobData.size }} bytes</p>
      <p>内容类型: {{ blobData.contentType }}</p>
      <img :src="blobData.url" alt="测试图片" style="max-width: 100%; height: auto; margin-top: 20px;" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: blobData, pending: loading, error } = await useFetch('/api/bg')
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>