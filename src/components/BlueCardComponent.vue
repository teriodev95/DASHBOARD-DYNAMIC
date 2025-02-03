<script setup lang="ts">
interface Props {
  title: string
  amount: string|number | undefined
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col bg-customBlueDark shadow-sm rounded-xl p-4 md:p-5">
    <h3 class="text-lg text-center font-bold text-customWhite">{{ props.title }}</h3>
    <h3 class="mt-2 text-6xl text-white text-center sm:text-4xl">
      {{ props.amount }}
    </h3>
  </div>
</template>
