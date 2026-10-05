<script setup>
import { onMounted, ref } from 'vue'
import QuoteCard from '~/components/QuoteCard.vue'
import { amantaa } from '~/components/Amantaa/amantaaQuotes.js'

const visible = ref(false)

onMounted(() => {
  visible.value = true
})
</script>

<template>
  <div class="relative min-h-screen bg-gradient-to-br from-[#1A0500] via-[#3A0A00] to-[#5D1000] py-24 px-6 overflow-hidden">

  
    <div class="absolute top-32 -left-20 w-80 h-80 bg-[#FFCC00]/15 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-32 -right-20 w-80 h-80 bg-[#FFCC00]/15 rounded-full blur-[100px]"></div>

    <div class="relative z-10 max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Amantaa Quotes
        </h1>
        <p class="text-gray-200 mt-4">
          Strengthen Your Faith Through Sacred Wisdom
        </p>
      </div>

      <div
        class="space-y-12 transition-all duration-1000"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <QuoteCard
          v-for="item in amantaa"
          :key="item.id"
          :quote="item.quote"
          :author="item.author"
        />
      </div>
    </div>
  </div>
</template>

