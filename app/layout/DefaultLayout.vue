<script setup lang="ts">
  import {ref} from 'vue'
  import {SiteConfig} from "~/config";

</script>

<template>
  <!-- 桌面端布局 -->
  <div class="desktop-layout">
    <div class="left-side"></div>

    <div class="content">
      <slot></slot>
    </div>

    <div class="footer">
      <div class="copyright">
        Copyright © 2022 - 2023
      </div>
    </div>

  </div>

  <!-- 移动端布局 -->
  <div class="mobile-layout">

  </div>

</template>

<style scoped>

</style>