<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  
  
  <nav class="navbar navbar-expand flex justify-content-center bg-green-500 text-white font-bold uppercase py-3">
    <RouterLink to="/" class="mx-2 nav-link" active-class="text-bg-dark py-2 px-2">Barcode Generator</RouterLink>
    <RouterLink to="/product" class="mx-2 nav-link" active-class="text-bg-dark py-2 px-2">Production</RouterLink>
    <!-- <RouterLink to="/barcode" class="mx-2 nav-link" active-class="text-bg-dark py-2 px-2">Barcode</RouterLink> -->
  </nav>

  <RouterView />
</template>

<style scoped>

</style>
