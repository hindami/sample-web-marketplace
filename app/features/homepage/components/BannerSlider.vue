<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import type { Banner } from '../types'

  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  // Import modules
  import { Pagination, Autoplay } from 'swiper/modules'

  const props = defineProps<{
    banners: Banner[]
  }>()
</script>

<script lang="ts">
  export default {
    name: 'BannerSlider',
  }
</script>

<template>
  <swiper
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :slides-per-view="1"
    :space-between="10"
    class="mySwiper"
    :modules="[Pagination, Autoplay]"
    pagination
  >
    <!-- <slot v-for="(item, index) in items" :item="item" :index="index" /> -->
    <swiper-slide v-for="(banner, index) in props.banners" :key="index">
      <NuxtLink :to="banner.url" class="banner-slider-item__container">
        <img :src="banner.image" :alt="'bnr-' + index" />
      </NuxtLink>
    </swiper-slide>
    <!-- <swiper-slide>2</swiper-slide>
    <swiper-slide>3</swiper-slide> -->
    <!-- <swiper-slide v-for="n in 5" :key="n">Slide {{ n }}</swiper-slide>
    <swiper-slide v-for="n in 5" :key="n">Slide {{ n }}</swiper-slide> -->

    <!-- Optional navigation buttons -->
    <!-- <div class="swiper-button-prev" />
    <div class="swiper-button-next" /> -->

    <!-- Optional pagination -->
    <!-- <div class="swiper-pagination" /> -->
  </swiper>
</template>

<style scoped>
  .banner-slider-item__container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner-slider-item__container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .mySwiper {
    width: 100%;
    height: 496px;
  }
</style>

<!-- <template>
  <h2>Banner Slider</h2>
</template> -->
