<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'
  import { useHomepage } from './composables/useHomepage'
  import BannerSlider from './components/BannerSlider.vue'
  import PromotionList from './components/PromotionList.vue'
  import NewProducts from './components/NewProducts.vue'
  import FavouriteProducts from './components/FavouriteProducts.vue'

  definePageMeta({
    // layout: 'default',
    name: 'Homepage',
    // alias: 'index',
    title: 'Home',
    description: 'New Arrivals, Big Savings!',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  const { optimizeImage } = useOptimizeImage()
  const heroImageOptimized = {
    alt: `hero`,
    cover: true,
    ...optimizeImage(
      heroImageUrl,
      /* options */
      {
        // placeholder: false, // placeholder image before the actual image is fully loaded.
      },
      true /* return bgStyles */,
    ),
  }

  const { homepage } = await useHomepage()

  const heroImage = heroImageOptimized.src
  const bgStyles = heroImageOptimized.bgStyles
</script>

<script lang="ts">
  export default {
    name: 'HomePage',
  }
</script>

<template>
  <div>
    <BannerSlider :banners="homepage[0].banners" />

    <UContainer class="pt-8">
      <PromotionList :promotions="homepage[0].promotions" class="mt-8" />
      <NewProducts :products="homepage[0].newProducts" class="mt-8" />
      <FavouriteProducts :products="homepage[0].favourites" class="mt-8" />
    </UContainer>
  </div>
</template>
<style scoped></style>
