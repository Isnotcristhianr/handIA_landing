<template>
  <div class="min-h-screen bg-black pt-16">
    <NavBar />
    <!-- Background Effects -->
    <div class="fixed inset-0 z-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Centro de <span class="gradient-text">Ayuda</span>
        </h1>
        <p class="text-xl text-gray-300">
          Encuentra respuestas a las preguntas más frecuentes sobre Hand IA
        </p>
      </div>

      <!-- FAQ Sections -->
      <div class="space-y-8">
        <!-- Instalación y Configuración -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Download class="w-6 h-6 mr-3 text-primary-400" />
            Instalación y Configuración
          </h2>
          <div class="space-y-4">
            <div class="border-l-4 border-primary-500 pl-4">
              <h3 class="text-lg font-semibold text-white mb-2">¿Cómo descargo Hand IA?</h3>
              <p class="text-gray-300">Hand IA está disponible gratuitamente en Google Play Store y App Store. Busca "Hand IA" y descarga la aplicación oficial.</p>
            </div>
            <div class="border-l-4 border-primary-500 pl-4">
              <h3 class="text-lg font-semibold text-white mb-2">¿Qué dispositivos son compatibles?</h3>
              <p class="text-gray-300">Hand IA es compatible con Android 6.0+ e iOS 12.0+. Requiere cámara para tomar fotos de la mano y conexión a internet para el análisis con IA.</p>
            </div>
          </div>
        </div>

        <!-- Uso de la Aplicación -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Smartphone class="w-6 h-6 mr-3 text-primary-400" />
            Uso de la Aplicación
          </h2>
          <div class="space-y-4">
            <div class="border-l-4 border-primary-500 pl-4">
              <h3 class="text-lg font-semibold text-white mb-2">¿Cómo funciona el análisis?</h3>
              <p class="text-gray-300">Toma una foto clara de tu mano, nuestra IA Gemini 2.5 analiza las líneas y características, y recibes un análisis detallado de tu personalidad y tendencias.</p>
            </div>
            <div class="border-l-4 border-primary-500 pl-4">
              <h3 class="text-lg font-semibold text-white mb-2">¿Puedo guardar mis lecturas?</h3>
              <p class="text-gray-300">Sí, todas tus lecturas se guardan automáticamente en tu historial personal. Puedes acceder a ellas en cualquier momento desde la sección "Mis Lecturas".</p>
            </div>
          </div>
        </div>

        <!-- Tecnología y Seguridad -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield class="w-6 h-6 mr-3 text-primary-400" />
            Tecnología y Seguridad
          </h2>
          <div class="space-y-4">
            <div class="border-l-4 border-primary-500 pl-4">
              <h3 class="text-lg font-semibold text-white mb-2">¿Qué tecnología utilizan?</h3>
              <p class="text-gray-300">Utilizamos Gemini AI 2.5 de Google, la tecnología de inteligencia artificial más avanzada para análisis de imágenes y interpretación de patrones.</p>
            </div>
            <div class="border-l-4 border-primary-500 pl-4">
              <h3 class="text-lg font-semibold text-white mb-2">¿Mis datos están seguros?</h3>
              <p class="text-gray-300">Absolutamente. Utilizamos Firebase con App Check, encriptación de datos y autenticación segura. Tus fotos y análisis están protegidos con los más altos estándares de seguridad.</p>
            </div>
          </div>
        </div>

        <!-- Problemas Técnicos -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <AlertCircle class="w-6 h-6 mr-3 text-primary-400" />
            Problemas Técnicos
          </h2>
          <div class="space-y-4">
            <div class="border-l-4 border-primary-500 pl-4">
              <h3 class="text-lg font-semibold text-white mb-2">La app no reconoce mi mano</h3>
              <p class="text-gray-300">Asegúrate de tomar la foto en un lugar bien iluminado, con la mano completamente visible y sin sombras. La palma debe estar limpia y extendida.</p>
            </div>
            <div class="border-l-4 border-primary-500 pl-4">
              <h3 class="text-lg font-semibold text-white mb-2">Error de conexión</h3>
              <p class="text-gray-300">Verifica tu conexión a internet. El análisis requiere conexión estable para comunicarse con nuestros servidores de IA.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="mt-12 text-center">
        <div class="glass-card p-8">
          <h3 class="text-2xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h3>
          <p class="text-gray-300 mb-6">Nuestro equipo de soporte está aquí para ayudarte</p>
          <router-link to="/contacto" class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-800 to-primary-900 rounded-xl text-white font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105">
            <Mail class="w-5 h-5" />
            <span>Contactar Soporte</span>
          </router-link>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script setup>
import { Download, Smartphone, Shield, AlertCircle, Mail } from 'lucide-vue-next'
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'
</script>