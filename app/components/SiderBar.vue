<script setup lang="ts">
import Profile from "~/components/widget/Proflie.vue";
import Announcement from "~/components/widget/Announcement.vue";
import Categories from "~/components/widget/Categories.vue";
import Tags from "~/components/widget/Tags.vue";
</script>

<template>
  <div class="flex flex-col lg:gap-4 gap-2 w-auto" > 
    <Profile/>
    <Announcement/>
    <Categories/>
    <Tags/>

  </div>


</template>

