<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'

import { type IStaticMethods } from 'preline/preline'
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

onMounted(() => {
  setTimeout(() => {
    window.HSStaticMethods.autoInit()
  }, 100)
})
</script>

<template>
  
  <main class="bg-customDark">
    <RouterLink to="/"></RouterLink>
    <RouterView />
  </main>
</template>
