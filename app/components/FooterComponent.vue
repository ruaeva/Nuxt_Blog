<template>
  <div class="flex flex-col items-center  bottom-0 w-full">
    <div
      class="dashed-divider  w-[60%] h-0.5 mt-12 border border-dashed border-gray-300"
    />
    <div class="flex w-full justify-center items-center">
      <div class="text-sm font-medium text-center  text-gray-100 py-4">
        <p>© 2026 Ruaeva'blog. All Rights Reserved.</p>
        <p>
          Powered by
          <a
            href="https://nuxt.com"
            class="text-blue-500 font-bold hover:scale-105 md:text-[1.05rem] hover:text-blue-200 animated-underline transition-colors duration-200"
            >Nuxt</a
          >
          &
          <a
            href="https://nuxt.com"
            class="text-blue-500 font-bold hover:scale-105 md:text-[1.05rem] hover:text-blue-200 animated-underline transition-colors duration-200"
            >Ruaeva</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.animated-underline {
  position: relative;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 3px;
    border-radius: 4px;
    background-color: currentColor;
    transition: all 0.3s ease-in-out;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 105%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
