<script setup lang="ts">
interface Props {
  primerTitulo: string
  segundoTitulo: string
  tercerTitulo: string
  primerMonto: string | undefined
  segundoMonto: string | undefined
  tercerMonto: number | undefined
  /*
  
  rendimienmtoMonto: number|undefined
  descuentoMonto: number|undefined
  cobranzaPuraMonto: number|undefined
  */
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="grid border-2 rounded-xl shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x"
  >
    <div class="flex flex-col flex-[1_0_0%] bg-customBlue">
      <div class="p-4 flex-1 md:p-5">
        <h3 class="text-lg font-bold text-center text-customDark">{{ props.primerTitulo }}</h3>
        <p class="mt-1 text-4xl text-gray-700 text-center">{{ props.primerMonto }}</p>
      </div>
    </div>

    <div class="flex flex-col flex-[1_0_0%] bg-customBlue">
      <div class="p-4 flex-1 md:p-5">
        <h3 class="text-lg font-bold text-center text-customDark">{{ props.segundoTitulo }}</h3>
        <h3 class="mt-3 text-4xl text-gray-700 text-center">{{ props.segundoMonto }}</h3>
      </div>
    </div>

    <div class="flex flex-col flex-[1_0_0%] bg-customBlue">
      <div class="p-4 flex-1 md:p-5">
        <h3 class="text-lg font-bold text-center text-customDark">{{ props.tercerTitulo }}</h3>
        <p class="mt-1 text-4xl text-gray-700 text-center">{{ props.tercerMonto }}</p>
      </div>
    </div>
  </div>
</template>
