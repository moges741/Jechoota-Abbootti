<template>
  <div>
    <nav class="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 p-4">
      <div class="container mx-auto flex items-center justify-between">
        
        <div class="text-yellow-500 text-lg font-bold">
          <NuxtLink to="/"><span class="font1">J</span><span class="font2">echoota</span> <span class="font1">A</span><span class="font2">bbootti</span></NuxtLink>
        </div>

        <div class="hidden md:flex items-center gap-2">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="navLink px-3 py-2 rounded-md text-sm font-medium"
            :class="{ 'text-white': $route.path === link.path }"
          >
            {{ link.name }}
          </NuxtLink>
          
          <a
            href="https://github.com/yourusername"
            target="_blank"
            class="ml-4 social-icon"
          >
            <Github class="w-5 h-5 text-gray-100 hover:text-yellow-500 transition-colors" />
          </a>
        </div>

        <div class="flex items-center gap-4 md:hidden">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            class="social-icon"
          >
            <Github class="w-5 h-5 text-gray-100 hover:text-yellow-500 transition-colors" />
          </a>
          
          <button 
            @click="toggleMenu"
            class="flex flex-col gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span 
              :class="['bar', isOpen ? 'rotate-top' : '']">
            </span>
            <span 
              :class="['bar', isOpen ? 'opacity-0' : '']">
            </span>
            <span 
              :class="['bar', isOpen ? 'rotate-bottom' : '']">
            </span>
          </button>
        </div>
      </div>

      <transition name="slide">
        <div v-if="isOpen" 
             class="md:hidden absolute left-0 right-0 top-full bg-black/90 backdrop-blur-lg border-t border-gray-700">
          <ul class="flex flex-col items-center py-6 gap-4">
            <li v-for="link in navLinks" :key="link.path">
              <NuxtLink 
                :to="link.path"
                class="mobileLink px-4 py-3 text-base font-medium"
                :class="{ 'text-yellow-500': $route.path === link.path }"
                @click="closeMenu"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()
const isOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

watch(() => route.path, () => {
  closeMenu()
})

const handleEscape = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeMenu()
  }
}

const handleResize = () => {
  if (window.innerWidth >= 768 && isOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.font1{
  font-family: 'Jomolhari', serif;
  font-size: 30px;
}
.font2{
  font-family: 'Noto Sans Ethiopic', sans-serif;
  font-size: 18px;
}
.navLink {
  position: relative;
  color: #d1d5db;
  transition: color 0.3s;
}

.navLink:hover {
  color: white;
}

.navLink::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background: #eab308;
  transition: width 0.3s;
}

.navLink:hover::after {
  width: 100%;
}

/* Mobile Menu Bars */
.bar {
  width: 22px;
  height: 2.5px;
  background: #eab308;
  transition: all 0.3s ease;
}

.rotate-top {
  transform: rotate(45deg) translateY(6px);
}

.rotate-bottom {
  transform: rotate(-45deg) translateY(-6px);
}

.opacity-0 {
  opacity: 0;
}

/* Mobile Links */
.mobileLink {
  display: block;
  color: #d1d5db;
  transition: color 0.3s;
  text-align: center;
}

.mobileLink:hover {
  color: #eab308;
}

/* Dropdown Animation */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Social icon hover */
.social-icon:hover svg {
  color: #eab308;
}

/* Active link style */
.router-link-active {
  color: #eab308;
}
</style>