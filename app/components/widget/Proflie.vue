<script setup lang="ts">

import {computed} from "vue";
import {SiteConfig} from "~/config";
import {Icon} from "@iconify/vue";
import SocialLinks from "~/components/widget/SocialLinks.vue";


const safaAvatarUrl = computed(() => {
  // 边界检查：确保 SiteConfig.profile 和 avatar 存在
  if (!SiteConfig.profile || !SiteConfig.profile.avatar) {
    return ''; // 返回默认空字符串或其他默认值
  }
  const avatar = SiteConfig.profile.avatar;
  // 安全性校验：确保 URL 是合法的 HTTP/HTTPS 链接
  const urlPattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
  if (!urlPattern.test(avatar)) {
    console.warn('Invalid avatar URL detected:', avatar);
    return ''; // 返回默认值或占位图
  }

  return avatar;
})

const avatarAltText = computed(() => {
  // 边界检查：确保 SiteConfig.profile 和 name 存在
  if (!SiteConfig.profile || !SiteConfig.profile.name) {
    return ''; // 返回默认空字符串或其他默认值
  }
  return SiteConfig.profile.name;
})

</script>

<template>

  <div class="card-base flex flex-col items-center justify-center  bg-amber-100 p-3">
    <nuxt-link
        aria-label="Go to About Page"
        class="avatar-img  relative rounded-3xl group  overflow-hidden transform transition-all active:scale-98 "
        to="/about">
      <div
          class="absolute w-full h-full overflow-hidden   hover:bg-black/10  transform  transition-colors flex justify-center items-center ">
        <Icon
            class="transition opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 text-white h-24 w-24"
            icon="tabler:address-book" />
      </div>
      <img class="w-full  " :src="safaAvatarUrl" :alt="avatarAltText">
    </nuxt-link>
    <div class="author">
      <div class="font-bold text-xl text-center mt-2 mb-1 dark:text-neutral-50 transition  ">{{
          SiteConfig.profile.name
        }}
      </div>
      <div class="h-1 w-5 bg-blue-600 mx-auto rounded-full mb-2 transition"/>
      <div class="text-sm text-center mb-2 text-neutral-500 dark:text-neutral-400 transition">
        {{ SiteConfig.profile.bio }}
      </div>
    </div>


    <SocialLinks/>
  </div>


</template>

<style scoped>

</style>