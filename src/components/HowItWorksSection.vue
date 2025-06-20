<template>
  <section id="como-funciona" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Cómo <span class="gradient-text">Funciona</span>?
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Obtén tu lectura personalizada en solo 3 simples pasos
        </p>
      </div>

      <!-- Steps -->
      <div class="relative">
        <!-- Connection Line -->
        <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/20 via-primary-400/40 to-primary-500/20 transform -translate-y-1/2 z-0"></div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          <div v-for="(step, index) in steps" :key="index" 
               class="text-center group animate-slide-up"
               :style="{ animationDelay: `${index * 0.2}s` }">
            
            <!-- Step Number -->
            <div class="relative mb-8">
              <div class="w-20 h-20 mx-auto bg-gradient-to-br from-primary-800 to-primary-900 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300 glow-effect">
                {{ index + 1 }}
              </div>
              
              <!-- Step Icon -->
              <div class="absolute -bottom-2 -right-2 w-12 h-12 bg-black border-2 border-primary-400 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <component :is="step.icon" class="w-6 h-6 text-primary-400" />
              </div>
            </div>
            
            <!-- Step Content -->
            <div class="glass-card p-6 hover:bg-white/10 transition-all duration-300">
              <h3 class="text-2xl font-bold text-white mb-4">{{ step.title }}</h3>
              <p class="text-gray-300 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Demo Card -->
      <div class="mt-16 text-center">
        <div class="glass-card max-w-2xl mx-auto p-8">
          <div class="flex items-center justify-center mb-6">
            <div class="text-6xl animate-float">📱</div>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">¿Listo para comenzar?</h3>
          <p class="text-gray-300 mb-6">
            Descarga Hand IA ahora y descubre lo que las líneas de tu mano revelan sobre tu personalidad y futuro.
          </p>
          <a href="#descargar" class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-800 to-primary-900 rounded-xl text-white font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105">
            <Download class="w-5 h-5" />
            <span>Descargar Gratis</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Camera, Brain, FileText, Download } from 'lucide-vue-next'

const steps = [
  {
    icon: Camera,
    title: 'Escanea tu Mano',
    description: 'Toma una foto clara de tu mano usando la cámara integrada de la aplicación. Nuestra tecnología guía el proceso para obtener la mejor imagen.'
  },
  {
    icon: Brain,
    title: 'Análisis con IA',
    description: 'Gemini AI analiza automáticamente las líneas, forma y características de tu mano usando algoritmos avanzados de reconocimiento de patrones.'
  },
  {
    icon: FileText,
    title: 'Recibe tu Lectura',
    description: 'Obtén un análisis detallado y personalizado sobre tu personalidad, características y tendencias basado en la interpretación de tu mano.'
  }
]
</script>