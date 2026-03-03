<script setup>
const posts = await queryContent('posts').find()
</script>

<template>
  <div v-for="a in posts" :key="a._path">
    <NuxtLink :to="a._path">{{ a.title }}</NuxtLink>
  </div>
</template>
