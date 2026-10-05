<script setup>
import { ref, onMounted } from 'vue'

const categories = [
  { name: "Kadhannaa", slug: "kadhannaa" },
  { name: "Jaalala", slug: "jaalala" },
  { name: "Amantaa", slug: "amantaa" },
  { name: "Of Bituu", slug: "of-bituu" },
  { name: "Sooma", slug: "sooma" },
  { name: "Hiriyyaa Gaarii", slug: "hiriyyaa-gaarii" },
  { name: "Qulqullummaa", slug: "qulqullummaa" },
  { name: "Abdii", slug: "abdii" },
  { name: "Of Eeggannaa", slug: "of-eeggannaa" },
  { name: "Waa'ee Dubroo Maariyaam", slug: "waaee-dubroo-maariyaam" },
  { name: "Gorsa", slug: "gorsa" },
  { name: "Obsa", slug: "obsa" },
  { name: "Gaabbii", slug: "gaabbii" }
]

const selectedCategory = ref(null)
const floatingCrosses = ref([])
const lightOrbs = ref([])
const isLoaded = ref(false)

onMounted(() => {
  // Generate random floating crosses
  floatingCrosses.value = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 3 + 2, 
    duration: Math.random() * 15 + 15,
    delay: -(Math.random() * 30) 
  }))

  // Generate glowing light orbs/particles
  lightOrbs.value = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 6 + 2, // px size
    duration: Math.random() * 10 + 10,
    delay: -(Math.random() * 20)
  }))

  // Trigger entrance animations
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <div class="relative min-h-screen flex flex-col justify-center items-center text-white pt-24 sm:pt-28 md:pt-32 lg:pt-36 overflow-hidden bg-black">
    
    <!-- Ken Burns animated background image -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center animate-kenBurns" style="background-image: url('/images/spiritual-bg.jpg')"></div>
    </div>

    <!-- Dark gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-[#5D1000]/60 to-black z-0 mix-blend-multiply"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0 opacity-80"></div>

    <!-- Floating Crosses Background Animation -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div 
        v-for="cross in floatingCrosses" 
        :key="`cross-${cross.id}`"
        class="absolute text-[#FFCC00]/20 flex items-center justify-center float-animation drop-shadow-[0_0_15px_rgba(255,204,0,0.4)]"
        :style="{
          left: `${cross.left}%`,
          fontSize: `${cross.size}rem`,
          animationDuration: `${cross.duration}s`,
          animationDelay: `${cross.delay}s`
        }"
      >
        ✝
      </div>

      <!-- Glowing Light Particles -->
      <div 
        v-for="orb in lightOrbs" 
        :key="`orb-${orb.id}`"
        class="absolute rounded-full bg-[#FFCC00] float-orb-animation"
        :style="{
          left: `${orb.left}%`,
          width: `${orb.size}px`,
          height: `${orb.size}px`,
          animationDuration: `${orb.duration}s`,
          animationDelay: `${orb.delay}s`,
          boxShadow: `0 0 ${orb.size * 2}px ${orb.size}px rgba(255, 204, 0, 0.4)`
        }"
      ></div>
    </div>

    <!-- Main Content -->
    <div class="mb-10 relative z-10 text-center px-6 max-w-5xl w-full">
      
      <h1 
        class="text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-[#FFCC00] animate-titleGlow transform transition-all duration-1000"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        Spiritual Quotes
      </h1>

      <p 
        class="text-lg md:text-xl text-gray-200 mb-12 drop-shadow-md transform transition-all duration-1000 delay-300"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        Inspirational Wisdom from Faith Fathers ✨  <br class="hidden md:block">
        Strengthen Your Spirit. Guide Your Life.
      </p>

      <div 
        class="flex justify-center mb-16 transform transition-all duration-1000 delay-500"
        :class="isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
      >
        <p
          class="
            relative px-8 py-4 text-sm md:text-lg text-white font-medium text-center
            rounded-2xl
            bg-white/5 backdrop-blur-xl
            border border-[#FFCC00]/50
            shadow-[0_0_30px_rgba(255,204,0,0.15)]
            transition-all duration-500
            hover:scale-105 hover:shadow-[0_0_40px_rgba(255,204,0,0.3)] hover:border-[#FFCC00]
            before:absolute before:inset-0 before:rounded-2xl
            before:p-[2px]
            before:bg-gradient-to-r before:from-[#FFCC00] before:via-white before:to-[#FFCC00]
            before:opacity-40 before:animate-pulseGlow
            before:-z-10
          "
        >
          Jechoota Abboottif kannneen gadii keessaa tuquudhaan dubbisuu dandeessu!
        </p>
      </div>

      <!-- Categories Grid with Staggered Entrance -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <div
          v-for="(cat, index) in categories"
          :key="cat.slug"
          class="transform transition-all duration-700 hover:-translate-y-2 group"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
          :style="{ transitionDelay: `${700 + (index * 100)}ms` }"
        >
          <NuxtLink 
            :to="`/${cat.slug}`" 
            class="block w-full h-full relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 py-4 px-4 shadow-lg hover:shadow-[0_0_25px_rgba(255,204,0,0.25)] hover:border-[#FFCC00]/50 transition-all duration-500"
          >
            <!-- Hover light effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            
            <span class="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300 font-semibold tracking-wider">
              {{ cat.name }}
            </span>
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* 1. Ken Burns Effect for the background image */
@keyframes kenBurns {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
.animate-kenBurns {
  animation: kenBurns 40s ease-in-out infinite;
}

/* 2. Main Title continuous glowing breathing effect */
@keyframes titleGlow {
  0%, 100% { text-shadow: 0 0 20px rgba(255,204,0,0.2), 0 0 40px rgba(255,204,0,0.1); }
  50% { text-shadow: 0 0 30px rgba(255,204,0,0.6), 0 0 60px rgba(255,204,0,0.4); }
}
.animate-titleGlow {
  animation: titleGlow 4s ease-in-out infinite;
}

/* 3. Floating Cross Animation */
@keyframes floatCross {
  0% { 
    transform: translateY(10vh) rotate(-15deg) scale(0.8); 
    opacity: 0; 
  }
  15% { opacity: 0.8; }
  85% { opacity: 0.8; }
  100% { 
    transform: translateY(-120vh) rotate(30deg) scale(1.1); 
    opacity: 0; 
  }
}
.float-animation {
  bottom: -100px;
  animation: floatCross linear infinite;
  animation-fill-mode: both;
}

/* 4. Glowing Light Particles (Orbs) Animation */
@keyframes floatOrb {
  0% {
    transform: translateY(10vh) scale(1);
    opacity: 0;
  }
  20% { opacity: 0.8; }
  80% { opacity: 0.8; }
  100% {
    transform: translateY(-120vh) scale(1.5);
    opacity: 0;
  }
}
.float-orb-animation {
  bottom: -50px;
  animation: floatOrb linear infinite;
  animation-fill-mode: both;
  filter: blur(1px);
}

/* 5. Subtitle border pulse glow */
@keyframes pulseGlow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.01); }
}
.animate-pulseGlow {
  animation: pulseGlow 3s ease-in-out infinite;
}

/* 6. Shimmer sweep effect on hover for grid items */
@keyframes shimmer {
  100% { transform: translateX(100%); }
}
.animate-shimmer {
  animation: shimmer 1.5s infinite;
}
</style>
