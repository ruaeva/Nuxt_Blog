<script setup lang="ts">
import {SiteConfig} from "~/config";
import {getExternalIcon} from "~/utils/icons";
</script>

<template>
  <div class="links flex flex-wrap justify-center gap-1.5">
    <div
        v-for="(link, index)  in SiteConfig.social" :key="index"
        class="p-2.5 bg-blue-100 rounded-xl hover:bg-blue-300 active:scale-95 transform transition-all">
    <span
        v-if="link.external"
        v-html="getExternalIcon(link.url)"
    />
    </div>
  </div>
</template>
