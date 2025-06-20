<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
            <img src="/logo/logo.png" alt="Hand IA" class="w-10 h-10 rounded" />
          <span class="text-xl font-bold gradient-text">Hand IA</span>
        </div>
        
        <!-- Navigation Links -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#inicio" class="text-white hover:gradient-text transition-colors duration-200">Inicio</a>
            <a href="#caracteristicas" class="text-gray-300 hover:gradient-text transition-colors duration-200">Características</a>
            <a href="#como-funciona" class="text-gray-300 hover:gradient-text transition-colors duration-200">Cómo Funciona</a>
            <a href="#descargar" class="text-gray-300 hover:gradient-text transition-colors duration-200">Descargar</a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-400 hover:text-white focus:outline-none">
            <Menu v-if="!isMobileMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-xl">
        <a href="#inicio" @click="closeMobileMenu" class="block px-3 py-2 text-white hover:text-primary-400">Inicio</a>
        <a href="#caracteristicas" @click="closeMobileMenu" class="block px-3 py-2 text-gray-300 hover:text-primary-400">Características</a>
        <a href="#como-funciona" @click="closeMobileMenu" class="block px-3 py-2 text-gray-300 hover:text-primary-400">Cómo Funciona</a>
        <a href="#descargar" @click="closeMobileMenu" class="block px-3 py-2 text-gray-300 hover:text-primary-400">Descargar</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Hand, Menu, X } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>