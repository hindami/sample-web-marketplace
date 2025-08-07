<script setup lang="ts">
  import type { Product } from '../types'
  import { ref } from 'vue'
  const { title, image, url } = defineProps<Product>()

  const defaultImage = 'https://placehold.co/190x190/000000/FFF'
  // const imgSrc = ref(image || defaultImage)
  // const hasErrored = ref(false)

  // function handleError() {
  //   if (!hasErrored.value) {
  //     imgSrc.value = defaultImage
  //     hasErrored.value = true
  //   }
  // }
</script>
<template>
  <NuxtLink class="item-card--container" :to="`${url}`">
    <div class="item-card--img-container">
      <!-- <img :src="image" :alt="title" :key="image" @error="handleError" /> -->
      <img :src="defaultImage" :alt="title" :key="image" />
    </div>
    <div class="item-card--info-container">
      <p>{{ title }}</p>
    </div>
  </NuxtLink>
</template>
<style scoped>
  .item-card--container {
    flex-grow: 1;
    margin: 10px;
    background-color: #ffffff !important;
    border: 1px solid black;
    overflow: hidden;
    border-radius: 10px;
  }

  .item-card--img-container {
    background-color: #ffffff;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-card--img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .item-card--info-container {
    height: 50px;
    padding: 5px 16px;
  }
</style>
