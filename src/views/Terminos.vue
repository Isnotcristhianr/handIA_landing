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
          Términos y <span class="gradient-text">Condiciones</span>
        </h1>
        <p class="text-xl text-gray-300">
          Condiciones de uso de la aplicación Hand IA
        </p>
        <p class="text-sm text-gray-400 mt-4">Última actualización: Enero 2025</p>
      </div>

      <!-- Terms Content -->
      <div class="space-y-8">
        <!-- Aceptación -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <FileText class="w-6 h-6 mr-3 text-primary-400" />
            Aceptación de Términos
          </h2>
          <p class="text-gray-300 leading-relaxed">
            Al descargar, instalar o usar Hand IA, aceptas estar sujeto a estos términos y condiciones. 
            Si no estás de acuerdo con alguno de estos términos, no uses la aplicación.
          </p>
        </div>

        <!-- Descripción del Servicio -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Smartphone class="w-6 h-6 mr-3 text-primary-400" />
            Descripción del Servicio
          </h2>
          <div class="space-y-4">
            <p class="text-gray-300">
              Hand IA es una aplicación móvil que utiliza inteligencia artificial para analizar imágenes 
              de manos y proporcionar interpretaciones basadas en principios de quiromancia.
            </p>
            <div class="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
              <p class="text-yellow-200 text-sm">
                <strong>Importante:</strong> Los análisis proporcionados son para entretenimiento y reflexión personal. 
                No deben considerarse como consejos médicos, legales o financieros profesionales.
              </p>
            </div>
          </div>
        </div>

        <!-- Uso Aceptable -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <CheckCircle class="w-6 h-6 mr-3 text-primary-400" />
            Uso Aceptable
          </h2>
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-white">Puedes:</h3>
            <div class="space-y-2">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p class="text-gray-300">Usar la aplicación para análisis personal de quiromancia</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p class="text-gray-300">Guardar y revisar tus lecturas anteriores</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p class="text-gray-300">Compartir resultados con amigos y familiares</p>
              </div>
            </div>

            <h3 class="text-lg font-semibold text-white mt-6">No puedes:</h3>
            <div class="space-y-2">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p class="text-gray-300">Usar la aplicación para fines comerciales sin autorización</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p class="text-gray-300">Intentar hackear, modificar o hacer ingeniería inversa</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p class="text-gray-300">Subir contenido ofensivo, ilegal o inapropiado</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Propiedad Intelectual -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Copyright class="w-6 h-6 mr-3 text-primary-400" />
            Propiedad Intelectual
          </h2>
          <div class="space-y-4">
            <p class="text-gray-300">
              Hand IA, su código, diseño, algoritmos de IA y contenido son propiedad exclusiva del desarrollador 
              y están protegidos por leyes de derechos de autor y propiedad intelectual.
            </p>
            <div class="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
              <p class="text-blue-200 text-sm">
                Las imágenes que subas y los análisis generados para ti permanecen como tu propiedad personal.
              </p>
            </div>
          </div>
        </div>

        <!-- Limitación de Responsabilidad -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <AlertTriangle class="w-6 h-6 mr-3 text-primary-400" />
            Limitación de Responsabilidad
          </h2>
          <div class="space-y-4">
            <p class="text-gray-300">
              Hand IA se proporciona "tal como está" sin garantías de ningún tipo. No nos hacemos responsables por:
            </p>
            <div class="space-y-2">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p class="text-gray-300">Decisiones tomadas basándose en los análisis de la aplicación</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p class="text-gray-300">Interrupciones del servicio o errores técnicos</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p class="text-gray-300">Pérdida de datos debido a problemas técnicos</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Modificaciones -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Edit class="w-6 h-6 mr-3 text-primary-400" />
            Modificaciones de los Términos
          </h2>
          <p class="text-gray-300">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. 
            Los cambios importantes se notificarán a través de la aplicación o por email. 
            El uso continuado de la aplicación después de los cambios constituye tu aceptación de los nuevos términos.
          </p>
        </div>

        <!-- Contacto -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Mail class="w-6 h-6 mr-3 text-primary-400" />
            Contacto Legal
          </h2>
          <p class="text-gray-300 mb-4">
            Para consultas legales sobre estos términos y condiciones:
          </p>
          <div class="flex items-center space-x-4">
            <Mail class="w-5 h-5 text-primary-400" />
            <span class="text-white">legal@handia.app</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import { FileText, Smartphone, CheckCircle, Copyright, AlertTriangle, Edit, Mail } from 'lucide-vue-next'
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'
</script>