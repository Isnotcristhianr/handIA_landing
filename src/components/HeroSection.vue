<template>
  <section id="inicio" class="relative min-h-screen flex items-center justify-center pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="space-y-8 animate-fade-in">
        <!-- Main Heading -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
          <span class="gradient-text">Hand IA</span>
          <br />
          <span class="text-white">El Futuro en tus</span>
          <br />
          <span class="text-primary-400">Manos</span>
        </h1>
        
        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Combina la sabiduría ancestral de la quiromancia con 
          <span class="text-primary-400 font-semibold">inteligencia artificial avanzada</span> 
          para descubrir los secretos ocultos en las líneas de tu mano.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a href="#descargar" class="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl text-white font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 glow-effect">
            <span class="flex items-center space-x-2">
              <Download class="w-5 h-5" />
              <span>Descargar Gratis</span>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </a>
          
          <button class="glass-button px-8 py-4 text-white font-semibold text-lg hover:text-primary-400 transition-all duration-300">
            <span class="flex items-center space-x-2">
              <Play class="w-5 h-5" />
              <span>Ver Demo</span>
            </span>
          </button>
        </div>
        
        <!-- Hand Illustration -->
        <div class="relative pt-16">
          <div class="glass-card max-w-md mx-auto p-8 animate-float">
            <div class="text-8xl text-primary-400 mb-4">🖐️</div>
            <p class="text-gray-300">Escanea tu mano con IA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Download, Play } from 'lucide-vue-next'
</script>