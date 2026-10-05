<script setup>
import {
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/vue/24/outline'

const contacts = [
  {
    role: "Developer",
    name: "Moges Sisay",
    email: "mogesse741@gmail.com",
    phone: "+251924433166",
    description:
      "Software Engineering Student (MERN Stack Developer) and Creator of Jechoota Abbootti's web",
    telegram: "@moges741"
  },
  {
    role: "Quotes Provider",
    name: "Ayantu Tesfaye",
    email: "ayantutesfaye311@gmail.com",
    phone: "+251966500071",
    description:
      "Biomedical Engineering Student and Spiritual Quotes Proviver",
    telegram: "@GimsasMKA"
  }
]
</script>

<template>
  <div
    class="relative min-h-screen bg-cover bg-center flex items-start md:items-center justify-center text-white"
    style="background-image: url('/images/contact-bg.jpg')"
  >

    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black via-[#3A0A00] to-black/90 backdrop-blur-sm"></div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-6xl px-6 py-24 md:py-20 pb-16 md:pb-0">

      <!-- Header -->
      <div class="text-center mb-16 md:mb-20">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
          Contact
        </h1>
        <p class="text-gray-100 mt-4 text-lg">
          Connect with the minds behind Jechoota Abbootti
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        <div
          v-for="person in contacts"
          :key="person.role"
          class="group relative bg-gradient-to-b from-black via-[#3A0A00] to-blacker/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-500 hover:bg-white/5 hover:scale-[1.02]"
        >

          <!-- Glow Hover -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div class="relative z-10">

            <!-- Role -->
            <p class="text-sm uppercase tracking-widest text-yellow-400 mb-3">
              {{ person.role }}
            </p>

            <!-- Name -->
            <div class="flex items-center gap-3 mb-6">
              <UserIcon class="w-6 h-6 text-gray-100" />
              <h2 class="text-xl md:text-2xl font-semibold">
                {{ person.name }}
              </h2>
            </div>

            <!-- Description -->
            <p class="text-gray-100 leading-relaxed mb-8 text-sm md:text-base">
              {{ person.description }}
            </p>

            <!-- Contacts -->
            <div class="space-y-4">

              <a
                :href="`mailto:${person.email}`"
                class="flex items-center gap-3 text-gray-200 hover:text-yellow-400 transition duration-300 break-all"
              >
                <EnvelopeIcon class="w-5 h-5 flex-shrink-0" />
                <span>{{ person.email }}</span>
              </a>

              <a
                :href="`tel:${person.phone}`"
                class="flex items-center gap-3 text-gray-200 hover:text-yellow-400 transition duration-300"
              >
                <PhoneIcon class="w-5 h-5 flex-shrink-0" />
                <span>{{ person.phone }}</span>
              </a>

              <a
                :href="`https://t.me/${person.telegram.replace('@', '')}`"
                target="_blank"
                class="flex items-center gap-3 text-gray-200 hover:text-yellow-400 transition duration-300"
              >
                <ChatBubbleLeftRightIcon class="w-5 h-5 flex-shrink-0" />
                <span>{{ person.telegram }}</span>
              </a>

            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>
