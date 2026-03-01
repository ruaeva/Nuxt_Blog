<template>
  <div class="">
    <div class="text-sm text-gray-700 mb-1">技能</div>
    <div class="font-bold text-4xl text-gray-900">创造源于兴趣</div>

    <!-- 自动滚动轮播容器 -->

    <div class="flex flex-col  gap-6 overflow-hidden p-6">
      <div class=" ">
        <div
          ref="carouselRef"
          class="flex gap-4 transition-transform duration-300 ease-linear"
          :style="{ transform: `translateX(${scrollPosition}px)` }"
        >
          <!-- 重复渲染图标以实现无缝滚动效果 -->
          <div
            v-for="(item, index) in repeatedIcons"
            :key="index"
            class="w-16 h-16 p-2 rounded-[20px] shadow-lg bg-gray-200 flex items-center justify-center shrink-0"
          >
            <img
              :src="item"
              alt="技能图标"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div class=" ">
        <div
          ref="carouselRef"
          class="flex gap-4 transition-transform duration-300 ease-linear"
          :style="{ transform: `translateX(${scrollPosition}px)` }"
        >
          <!-- 重复渲染图标以实现无缝滚动效果 -->
          <div
            v-for="(item, index) in repeatedIcons"
            :key="index"
            class="w-16 h-16 p-2 rounded-2xl shadow-lg  bg-gray-200 flex items-center justify-center shrink-0"
          >
            <img
              :src="item"
              alt="技能图标"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const imgUrls: string[] = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
];

// 为了实现无缝滚动，重复图标数组
const repeatedIcons = computed(() => {
  // 重复3次确保有足够的内容滚动
  return [...imgUrls, ...imgUrls, ...imgUrls];
});

const carouselRef = ref<HTMLDivElement | null>(null);
const scrollPosition = ref(0);
const iconWidth = 64 + 16; // 图标宽度(64px) + 间距(16px)
let animationFrameId: number | null = null;
const scrollSpeed = 1; // 滚动速度，数值越小越慢

const animateScroll = () => {
  if (!carouselRef.value) return;

  scrollPosition.value -= scrollSpeed;

  // 当滚动到第一组图标末尾时，重置位置到第二组开始的位置
  const totalWidth = imgUrls.length * iconWidth;
  if (Math.abs(scrollPosition.value) >= totalWidth) {
    scrollPosition.value = 0;
  }

  animationFrameId = requestAnimationFrame(animateScroll);
};

onMounted(() => {
  // 确保DOM渲染完成后再开始动画
  setTimeout(() => {
    animateScroll();
  }, 100);
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style scoped>
/* 可以添加额外的样式 */
</style>
