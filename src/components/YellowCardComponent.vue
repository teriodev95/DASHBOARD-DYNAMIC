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
    <div class="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-dollar-sign"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
    </div>
    <h3 class="mt-2 text-4xl text-customDark text-center">
      {{ props.amount }}
    </h3>
  </div>
</template>
