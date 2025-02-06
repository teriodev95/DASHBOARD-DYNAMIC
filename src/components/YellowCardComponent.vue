<script setup lang="ts">


interface Props {
  title: string
  amount: string|undefined
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col bg-secondary shadow-sm rounded-xl p-4 md:p-5 space-y-2">
    <h3 class="text-lg text-center font-bold text-customDark">{{ props.title }}</h3>
    
    <h3 class="mt-2 text-xl sm:text-2xl sm:text-center md:text-center md:text-4xl text-customDark text-center">
      {{ props.amount }}
    </h3>
  </div>
</template>
