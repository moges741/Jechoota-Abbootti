<script setup>
import { HeartIcon, HomeIcon, BookOpenIcon, EnvelopeIcon, SparklesIcon } from '@heroicons/vue/24/solid'

const quickLinks = [
  { name: 'Home', icon: HomeIcon, href: '/' },
  { name: 'About', icon: BookOpenIcon, href: '/about' },
  { name: 'Contact', icon: EnvelopeIcon, href: '/contact' },
]
const words = ref("'እኔ አምላክህ እግዚአብሔር። አትፍራ፥ እረዳሃለሁ ብዬ ቀኝህን እይዛለሁና።'")
const bibleWord = ref("");

onMounted(() =>{
  let index = 0;
  const interval = setInterval(() => {
    if (index < words.value.length) {
      bibleWord.value += words.value[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, 300);
})
</script>

<template>
  <footer class="relative text-gray-200 overflow-hidden">


    <div
      class="absolute inset-0 bg-cover bg-center opacity-30"
      style="background-image: url('/images/footer-bg.png')"
    ></div>


    <div class="absolute inset-0 bg-[#5D1000]/90 backdrop-blur-sm"></div>

    <div class="relative z-10 max-w-7xl mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 font-sans">
        
      <div>
        <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <SparklesIcon class="w-6 h-6 text-yellow-400"/>
          Quick Links
        </h3>
        <ul class="space-y-3">
          <li
            v-for="link in quickLinks"
            :key="link.name"
            class="hover:text-yellow-400 transition-colors cursor-pointer flex items-center gap-2"
          >
            <component :is="link.icon" class="w-5 h-5"/>
            <a :href="link.href">{{ link.name }}</a>
          </li>
        </ul>
      </div>


      <div>
        <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <HeartIcon class="w-6 h-6 text-yellow-400"/>
          Connect with Us
        </h3>
        <p class="text-gray-200">
          Follow us on social media for daily updates.
        </p>
 <p class="text-gray-200">
    {{ bibleWord }}
   
  </p>    <span class="text-yellow-400 ml-2">
      ትንቢተ ኢሳይያስ 41:13
    </span>   </div>


     <div>
  <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
    <EnvelopeIcon class="w-6 h-6 text-yellow-400"/>
    Follow Us
  </h3>

  <div class="flex flex-col gap-4">
    <a 
      href="https://t.me/yaaiimooraaxwg" 
      target="_blank"
      class="flex items-center gap-3 group"
    >
      <img 
        src="/images/telegram.png" 
        alt="Telegram" 
        class="w-6 h-6 transition group-hover:scale-110"
      />
      <span class="text-white group-hover:text-yellow-400 transition">
        Yaa'ii Mooraa
      </span>
    </a>


    <a 
      href="https://t.me/kutaa_faaruu_jimma_jit" 
      target="_blank"
      class="flex items-center gap-3 group"
    >
      <img 
        src="/images/telegram.png" 
        alt="Telegram" 
        class="w-6 h-6 transition group-hover:scale-110"
      />
      <span class="text-white group-hover:text-yellow-400 transition">
        Kutaa Faaruu
      </span>
    </a>

  </div>
</div>


    </div>

    <!-- Footer bottom -->
    <div class="border-t border-gray-700 mt-10 pt-6 text-center text-gray-200 text-sm font-sans">
      © {{ new Date().getFullYear() }} Spiritual Wisdom. Crafted with
      <span class="text-pink-500 inline-flex items-center"><HeartIcon class="w-4 h-4 ml-1"/></span>
      and devotion.
    </div>
  </footer>
</template>

<style>
/* Optional soft glow animation */
@keyframes pulseSlow {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.05); }
}

.animate-pulse-slow {
  animation: pulseSlow 8s ease-in-out infinite;
}
</style>
