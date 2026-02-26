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
    <SpeedInsights />
  
</template>

<script setup lang="ts">
import DefaultLayout from "./layout/DefaultLayout.vue";
import { SpeedInsights } from '@vercel/speed-insights/vue';

</script>
