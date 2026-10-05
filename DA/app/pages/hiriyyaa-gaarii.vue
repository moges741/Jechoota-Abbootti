<script setup>
import { ref, onMounted } from 'vue'
import QuoteCard from '~/components/QuoteCard.vue'
import { hiriyyaaGaarii } from '~/components/HiriyyaaGaarii/hiriyyaaGaariiQuotes.js'

const visible = ref(false)

onMounted(() => {
  visible.value = true
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-[#1A0500] via-[#3A0A00] to-[#5D1000] py-24 px-6 relative overflow-hidden">

 
    <div class="absolute top-24 left-10 w-72 h-72 bg-[#FFCC00]/15 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-24 right-10 w-72 h-72 bg-[#FFCC00]/15 rounded-full blur-[100px]"></div>

    <div class="relative z-10 max-w-4xl mx-auto">

  
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Hiriyyaa Gaarii
        </h1>
        <p class="text-gray-200 mt-3">
          Wisdom About True Friendship
        </p>
      </div>

  
      <div
        class="space-y-12 transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <QuoteCard
          v-for="item in hiriyyaaGaarii"
          :key="item.id"
          :quote="item.quote"
          :author="item.author"
        />
      </div>

    </div>
  </div>
</template>
