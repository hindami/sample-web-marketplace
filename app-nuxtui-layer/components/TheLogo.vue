<script setup lang="ts">
  import logo from '../../app/assets/images/SampleMall.svg'
</script>
<template>
  <ULink data-pg-name="Logo" class="flex items-center sm:flex-row" to="/">
    <img :src="logo" alt="logo" />
  </ULink>
</template>
<style scoped></style>
