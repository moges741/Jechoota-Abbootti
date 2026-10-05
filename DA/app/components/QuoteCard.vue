<script setup>
defineProps({
  quote: String,
  author: String
})
</script>

<template>
  <div
    class="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl transition duration-500 hover:scale-[1.02] hover:bg-white/10"
  >

    <div class="absolute top-6 left-6 text-6xl text-white/20 font-serif">
      “
    </div>


    <p class="text-xl md:text-2xl leading-relaxed text-white font-light tracking-wide text-center">
      {{ quote }}
    </p>


    <div class="mt-8 text-center">
      <span class="inline-block w-12 h-[1px] bg-white/40 mb-4"></span>
      <p class="text-sm md:text-base text-gray-100 uppercase tracking-widest">
        {{ author }}
      </p>
    </div>
  </div>
</template>
