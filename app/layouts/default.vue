<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/FooterComponent.vue";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <!-- 桌面端布局 -->
  <div class="desktop-layout flex flex-col justify-center   bg-red-50">
    <SpeedInsights />
    <div class="header">
      <Navbar />
    </div>
    <div
      class="main p-2 xl:mx-auto md:p-4 grid  md:grid-cols-[280px_1fr] xl:grid-cols-[260px_1fr_260px] gap-4  md:mx-auto"
    >
      <div class="left-side hidden md:block">
        <SiderBar />
      </div>
      <div class="content w-[860px] ">
        <slot />

        <div class="footer">
          <Footer />
        </div>
        
      </div>
      <div class="left-side block max-[1280px]:hidden">
          <SiderBar />
        </div>
    </div>
  </div>

  <!-- 移动端布局 -->
  <div class="mobile-layout"></div>
</template>

<style scoped></style>
