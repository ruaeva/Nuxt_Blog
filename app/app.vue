<template>
  
    <DefaultLayout>
      <template #header>
        <Navbar />
      </template>

      <template #sidebar>
        <SiderBar />
      </template>

  

      <template #main>
        <NuxtPage />
      </template>
    </DefaultLayout>

    
    <Analytics />

  
</template>

<script setup lang="ts">
import DefaultLayout from "./layout/DefaultLayout.vue";
import { Analytics } from '@vercel/analytics/nuxt';




</script>
