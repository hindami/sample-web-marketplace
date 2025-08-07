<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import type { Promotion } from '../types'
  import { getRandomHexColor } from '~/utils/colors'

  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  import { Autoplay, Navigation } from 'swiper/modules'

  const props = defineProps<{
    promotions: Promotion[]
  }>()

  const defaultImages = props.promotions.map(() => {
    return `https://placehold.co/190x190/${getRandomHexColor()}/FFF?text=Promotion`
  })
</script>

<script lang="ts">
  export default {
    name: 'PromoList',
  }
</script>

<template>
  <swiper
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    :slides-per-view="1"
    :space-between="10"
    class="promotionSwiper"
    :modules="[Autoplay, Navigation]"
    navigation
  >
    <swiper-slide v-for="(banner, index) in props.promotions" :key="index">
      <NuxtLink :to="banner.url" class="banner-slider-item__container">
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

  .promotionSwiper {
    width: 100%;
    height: 120px;
  }
</style>
