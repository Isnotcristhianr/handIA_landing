<template>
  <section id="inicio" class="relative min-h-screen flex items-center justify-center pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="space-y-8 animate-fade-in">
        <!-- Main Heading -->
         <br>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
          <span class="gradient-text">Hand IA</span>
          <br />
          <span class="text-4xl text-white">El Futuro en tus <label class="gradient-text">Manos</label></span>
        </h1>
        
        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Combina la sabiduría ancestral de la quiromancia con 
          <span class="gradient-text font-semibold">inteligencia artificial avanzada</span> 
          para descubrir los secretos ocultos en las líneas de tu mano.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a href="#descargar" class="group relative px-8 py-4 bg-primary-900 rounded-2xl text-white font-semibold text-lg  transition-all duration-300 transform hover:scale-105 ">
            <span class="flex items-center space-x-2">
              <Download class="w-5 h-5" />
              <span>Descarga Gratis</span>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </a>
          
          <button class="glass-button px-8 py-4 text-white font-semibold text-lg hover:text-primary-50 hover:bg-primary-900 transition-all duration-300">
            <span class="flex items-center space-x-2">
              <Play class="w-5 h-5" />
              <span>Ver Demo</span>
            </span>
          </button>
        </div>
        
        <!-- Phone Mockup -->
        <div class="relative pt-8 md:pt-16">
          <div class="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto animate-float">
            <img 
              src="/mockup/demo.jpeg" 
              alt="Hand IA App Demo" 
              class="w-full h-auto mx-auto rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-white/10 hover:border-primary-400 transition-all duration-300 transform hover:scale-105"
            />
            
            <!-- Floating Elements -->
            <div class="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-primary-500/20 backdrop-blur-sm rounded-full p-2 sm:p-3">
              <div class="w-4 h-4 sm:w-6 sm:h-6 bg-primary-900 rounded-full animate-ping absolute"></div>
              <div class="w-4 h-4 sm:w-6 sm:h-6 bg-primary-900 rounded-full"></div>
            </div>
            
            <div class="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-primary-500/20 backdrop-blur-sm rounded-full p-1 sm:p-2">
              <span class="text-lg sm:text-2xl p-1 sm:p-2">🔮</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Download, Play } from 'lucide-vue-next'
</script>