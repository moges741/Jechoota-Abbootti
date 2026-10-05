<template>
  <section class="min-h-screen bg-gradient-to-b from-black via-[#3A0A00] to-black text-white py-20 px-6">
    
    <div class="max-w-4xl mx-auto">
      
      <!-- Title -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          About This Spiritual Quotes Page
        </h1>
        <div class="w-24 h-1 bg-[#FFCC00] mx-auto rounded-full"></div>
      </div>

      <!-- Glass Card -->
      <div class="bg-gradient-to-b from-black via-[#3A0A00] to-blacker/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 space-y-8 shadow-xl">

        <!-- Purpose -->
        <div>
          <h2 class="text-2xl font-semibold text-yellow-400 mb-3">
            ✨ Purpose
          </h2>
          <p class="text-gray-100 leading-relaxed">
            This page shares spiritual quotes inspired by faith fathers to help students grow spiritually,
            develop good character, and strengthen unity in campus life.
          </p>
        </div>

        <!-- Source Note -->
        <div>
          <h2 class="text-2xl font-semibold text-yellow-400 mb-3">
            📖 Translation Note
          </h2>
          <p class="text-gray-100 leading-relaxed">
            Quotes are translated and compiled by an ordinary individual. They may not perfectly represent
            the original spiritual meaning. They are shared for inspiration and learning purposes only.
          </p>
        </div>

        <!-- Campus Use -->
        <div>
          <h2 class="text-2xl font-semibold text-yellow-400 mb-3">
            🏫 Campus Use
          </h2>
          <p class="text-gray-100 leading-relaxed">
            This content is mainly intended for campus students. There is currently no official permission
            from church institutions, so please use respectfully.
          </p>
        </div>

        <!-- Feedback -->
        <div>
          <h2 class="text-2xl font-semibold text-yellow-400 mb-3">
            💬 Feedback & Contribution
          </h2>
          <p class="text-gray-100 leading-relaxed mb-4">
            If you have feedback, corrections, or want to share Jechoota, please contact us.
          </p>

          <NuxtLink
            to="/contact"
            class="inline-block px-6 py-3 bg-[#FFCC00] text-black font-semibold rounded-xl hover:scale-105 transition"
          >
            Go to Contact Page
          </NuxtLink>
        </div>

      </div>
    </div>

  </section>
</template>
