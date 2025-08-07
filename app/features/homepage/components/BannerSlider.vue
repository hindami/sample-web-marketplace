<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import type { Banner } from '../types'
  import { getRandomHexColor } from '~/utils/colors'

  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  import { Pagination, Autoplay } from 'swiper/modules'

  const props = defineProps<{
    banners: Banner[]
  }>()

  const defaultImages = props.banners.map(() => {
    return `https://placehold.co/190x190/${getRandomHexColor()}/FFF?text=Banner`
  })
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
        <!-- <img :src="banner.image" :alt="'bnr-' + index" /> -->
        <img :src="defaultImages[index]" :alt="'bnr-' + index" />
      </NuxtLink>
    </swiper-slide>
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
