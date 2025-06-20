<template>
  <section id="descargar" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="glass-card p-8 md:p-12 text-center relative overflow-hidden">
        <!-- Background Gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/5 -z-10"></div>
        
        <!-- Content -->
        <div class="relative z-10">
          <div class="text-6xl mb-8 animate-float">🔮</div>
          
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Descarga <span class="gradient-text">Hand IA</span>
          </h2>
          
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya han descubierto los secretos ocultos en las líneas de sus manos.
          </p>
          
          <!-- Download Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#" class="group flex items-center space-x-3 bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-2xl border border-white/20 hover:border-primary-400 transition-all duration-300 transform hover:scale-105">
              <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span class="text-black font-bold text-xs">📱</span>
              </div>
              <div class="text-left">
                <div class="text-xs text-gray-400">Descargar en</div>
                <div class="text-lg font-semibold">App Store</div>
              </div>
            </a>
            
            <a href="#" class="group flex items-center space-x-3 bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-2xl border border-white/20 hover:border-primary-400 transition-all duration-300 transform hover:scale-105">
              <div class="w-8 h-8 bg-gradient-to-br from-yellow-400 to-green-400 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-xs">▶</span>
              </div>
              <div class="text-left">
                <div class="text-xs text-gray-400">Disponible en</div>
                <div class="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>
          
          <!-- Features List -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div v-for="(feature, index) in features" :key="index" 
                 class="flex items-center space-x-3 text-gray-300">
              <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span>{{ feature }}</span>
            </div>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
            <div v-for="(stat, index) in stats" :key="index" class="text-center">
              <div class="text-3xl font-bold gradient-text mb-2">{{ stat.value }}</div>
              <div class="text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  'Análisis con IA Gemini 2.0',
  'Completamente Gratuito',
  'Sin Anuncios Invasivos',
  'Historial de Lecturas',
  'Seguridad Garantizada',
  'Soporte Multiidioma'
]

const stats = [
  { value: '50K+', label: 'Descargas' },
  { value: '4.8★', label: 'Calificación' },
  { value: '200K+', label: 'Lecturas Realizadas' }
]
</script>