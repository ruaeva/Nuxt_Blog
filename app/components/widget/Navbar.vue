<script setup lang="ts">
import {ref,onNuxtReady} from "#app";
import ToggleDarkMode from "~/components/control/ToggleDarkMode.vue";
import {SiteConfig} from "~/config";

onNuxtReady(() => {
  // console.log(SiteConfig.navbar)

})
</script>

<template>
  <nav class="navbar flex row ">
    <div
        v-for="item in SiteConfig.navbar"
        :key="item.path"
        class="nav-item ">
      <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
    </div>

  </nav>

</template>

<style scoped>

</style>