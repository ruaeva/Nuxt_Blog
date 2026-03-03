<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/FooterComponent.vue";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <!-- 桌面端布局 -->
  <div
    class="desktop-layout flex justify-center bg-[url('https://th.bing.com/th/id/OIP.c9AMmJ5wSjV2oVwBTbQBtQHaEK?w=326&h=183&c=7&r=0&o=7&pid=1.7&rm=3')]"
  >
    <div class=" @container w-full min-h-screen xl:mx-40 lg:mx-4 mx-2">
      <div class="header w-full">
        <Navbar />
      </div>
      <SpeedInsights />

      <div
        class="main relative grid md:grid-cols-[256px_1fr] xl:grid-cols-[max(250px)_1fr_max(250px)] gap-2 lg:gap-4"
      >
        <div class="left-side hidden md:block">
          <SiderBar />
        </div>
        <div class="content w-full  transform transition-all duration-300">
          <slot />
          <div class="footer mt-4">
            <Footer />
          </div>
        </div>
        <div class="left-side hidden xl:block">
          <SiderBar />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
