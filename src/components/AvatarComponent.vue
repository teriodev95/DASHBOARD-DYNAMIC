<script setup lang="ts">

interface Props{
    gerencia: string|undefined
}
const props = defineProps<Props>()
</script>

<template>
    <div class="shrink-0 group block">
  <div class="flex items-center">
    <img class="inline-block shrink-0 size-[62px] rounded-full" src="../assets/Business Plan-bro.svg" alt="Avatar">
    <div class="ms-3">
      <h3 class="font-semibold text-customWhite">{{props.gerencia}}</h3>
      
    </div>
  </div>
</div>
</template>