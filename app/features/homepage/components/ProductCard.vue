<script setup lang="ts">
  import type { Product } from '../types'
  const { title, image, url } = defineProps<Product>()
</script>
<template>
  <NuxtLink
    class="m-4 relative w-full md:w-1/3 lg:w-1/4 xl:w-1/5"
    :to="`${url}`"
  >
    <UCard class="md:h-full">
      <template #header>
        <div class="flex justify-center">
          <div class="-m-4 bg-white h-64 p-6 rounded-lg">
            <NuxtImg class="max-h-full" :src="image" height="250" />
          </div>
        </div>
      </template>
      <div>
        <span>{{ title }}</span>
      </div>
    </UCard>
  </NuxtLink>
</template>
<style scoped></style>
