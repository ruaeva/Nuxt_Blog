<script setup lang="ts">
import Footer from "~/components/FooterComponent.vue";
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <!-- 桌面端布局 -->
  <div
    class="desktop-layout bg-cover  bg-[url('https://7tlpfu4y7t0osxeb.private.blob.vercel-storage.com/0000.jpg')]"
  >
    <SpeedInsights />
    <div class="header">
      <slot name="header" />
    </div>

    <div class="grid grid-cols-5 mt-20 mx-2 md:mx-60 gap-4">
      <div class="left-side col-span-1 hidden md:block">
        <slot name="sidebar" />
      </div>

      <div class="main col-span-5 auto md:col-span-3">
        <slot name="main" />

        <div class="footer">
          <Footer />
        </div>
      </div>

      
    </div>
  </div>

  <!-- 移动端布局 -->
  <div class="mobile-layout"></div>
</template>

<style scoped></style>
