<script setup lang="ts">
interface Props {
  debitoMiercoles: string | undefined
  debitoJueves: string | undefined
  debitoViernes: string | undefined
}

const props = defineProps<Props>()
</script>

<template>
  <ul class="flex flex-col">
    <li
      class="inline-flex items-center gap-x-2 py-4 px-4 text-sm font-medium bg-secondary text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
    >
      <div class="flex justify-between w-full">
        Debito Miercoles
        <span
          class="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-primary text-white"
          >{{ props.debitoMiercoles }}</span
        >
      </div>
    </li>
    <li
      class="inline-flex items-center gap-x-2 py-4 px-4 text-sm font-medium bg-secondary text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
    >
      <div class="flex justify-between w-full">
        Debito Jueves
        <span
          class="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-primary text-white"
          >{{ props.debitoJueves }}</span
        >
      </div>
    </li>
    <li
      class="inline-flex items-center gap-x-2 py-4 px-4 text-sm font-medium bg-secondary text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
    >
      <div class="flex justify-between w-full">
        Debito Viernes
        <span
          class="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-primary text-white"
          >{{ props.debitoViernes }}</span
        >
      </div>
    </li>
  </ul>
</template>
