<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  await navigateTo('/404', { redirectCode: 404 })
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
