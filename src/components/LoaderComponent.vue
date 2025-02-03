<template>
  <main class="min-h-screen space-y-2 flex flex-col justify-center items-center">
    <div class="loader"></div>
    <p class="text-white text-xl mt-4">Cargando. Espere Porfavor</p>
  </main>
</template>

/* HTML: */
.

<style>
.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: #ffed4a;
  animation: l15 1s infinite linear;
}
.loader::before,
.loader::after {    
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: l15 2s infinite;
}
.loader::after {
  margin: 8px;
  animation-duration: 3s;
}
@keyframes l15{ 
  100%{transform: rotate(1turn)}
}
</style>
