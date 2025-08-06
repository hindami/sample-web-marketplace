<script setup lang="ts">
  import ProductCard from './ProductCard.vue'
  import type { Product } from '../types'

  const props = defineProps<{
    products: Product[]
  }>()
</script>
<template>
  <div>
    <UContainer class="py-8">
      <div
        class="-tracking-wide flex font-bold items-center justify-center text-5xl"
      >
        <span class="text-center text-primary">Popular Items</span>
        <UIcon name="i-twemoji-fire" class="ml-2" width="28px" />
      </div>
      <section
        data-pg-name="Products"
        class="flex flex-wrap justify-center mt-8"
      >
        <ProductCard
          v-for="(item, index) in props.products"
          :key="index"
          v-bind="item"
        />
      </section>
    </UContainer>
  </div>
</template>
<style scoped></style>
