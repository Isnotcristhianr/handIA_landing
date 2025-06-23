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
          Política de <span class="gradient-text">Privacidad</span>
        </h1>
        <p class="text-xl text-gray-300">
          Tu privacidad es nuestra prioridad. Conoce cómo protegemos tus datos.
        </p>
        <p class="text-sm text-gray-400 mt-4">Última actualización: Enero 2025</p>
      </div>

      <!-- Privacy Content -->
      <div class="space-y-8">
        <!-- Introducción -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield class="w-6 h-6 mr-3 text-primary-400" />
            Introducción
          </h2>
          <p class="text-gray-300 leading-relaxed">
            En Hand IA, nos comprometemos a proteger tu privacidad y datos personales. Esta política explica 
            cómo recopilamos, utilizamos y protegemos tu información cuando usas nuestra aplicación de 
            quiromancia con inteligencia artificial.
          </p>
        </div>

        <!-- Información que recopilamos -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Database class="w-6 h-6 mr-3 text-primary-400" />
            Información que Recopilamos
          </h2>
          <div class="space-y-4">
            <div class="border-l-4 border-primary-500 pl-4">
              <h3 class="text-lg font-semibold text-white mb-2">Información de Cuenta</h3>
              <p class="text-gray-300">Email, nombre y foto de perfil cuando te registras con Google o Apple.</p>
            </div>
            <div class="border-l-4 border-primary-500 pl-4">
              <h3 class="text-lg font-semibold text-white mb-2">Imágenes de Manos</h3>
              <p class="text-gray-300">Fotos de tu mano que tomas para el análisis quiromántico.</p>
            </div>
            <div class="border-l-4 border-primary-500 pl-4">
              <h3 class="text-lg font-semibold text-white mb-2">Datos de Análisis</h3>
              <p class="text-gray-300">Resultados y interpretaciones generadas por nuestra IA.</p>
            </div>
            <div class="border-l-4 border-primary-500 pl-4">
              <h3 class="text-lg font-semibold text-white mb-2">Información Técnica</h3>
              <p class="text-gray-300">Datos de uso de la app, logs de errores y información del dispositivo.</p>
            </div>
          </div>
        </div>

        <!-- Cómo usamos tu información -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Settings class="w-6 h-6 mr-3 text-primary-400" />
            Cómo Usamos tu Información
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white/5 p-4 rounded-xl">
              <h3 class="text-white font-semibold mb-2">Análisis Quiromántico</h3>
              <p class="text-gray-300 text-sm">Procesamos las imágenes de tu mano con IA para generar lecturas personalizadas.</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl">
              <h3 class="text-white font-semibold mb-2">Historial Personal</h3>
              <p class="text-gray-300 text-sm">Guardamos tus lecturas para que puedas acceder a ellas cuando quieras.</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl">
              <h3 class="text-white font-semibold mb-2">Mejora del Servicio</h3>
              <p class="text-gray-300 text-sm">Analizamos patrones de uso para mejorar la precisión de nuestros algoritmos.</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl">
              <h3 class="text-white font-semibold mb-2">Soporte Técnico</h3>
              <p class="text-gray-300 text-sm">Utilizamos logs para diagnosticar y resolver problemas técnicos.</p>
            </div>
          </div>
        </div>

        <!-- Seguridad -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Lock class="w-6 h-6 mr-3 text-primary-400" />
            Medidas de Seguridad
          </h2>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
              <p class="text-gray-300"><strong class="text-white">Encriptación:</strong> Todos los datos se transmiten y almacenan con encriptación AES-256.</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
              <p class="text-gray-300"><strong class="text-white">Firebase Security:</strong> Utilizamos Firebase con App Check y reglas de seguridad estrictas.</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
              <p class="text-gray-300"><strong class="text-white">Autenticación:</strong> Autenticación segura con Google y Apple, sin almacenar contraseñas.</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
              <p class="text-gray-300"><strong class="text-white">Acceso Limitado:</strong> Solo personal autorizado puede acceder a los sistemas de datos.</p>
            </div>
          </div>
        </div>

        <!-- Tus Derechos -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <UserCheck class="w-6 h-6 mr-3 text-primary-400" />
            Tus Derechos
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-white font-semibold mb-2">Acceso a tus Datos</h3>
              <p class="text-gray-300 text-sm">Puedes solicitar una copia de todos los datos que tenemos sobre ti.</p>
            </div>
            <div>
              <h3 class="text-white font-semibold mb-2">Corrección de Datos</h3>
              <p class="text-gray-300 text-sm">Puedes actualizar o corregir tu información personal en cualquier momento.</p>
            </div>
            <div>
              <h3 class="text-white font-semibold mb-2">Eliminación de Datos</h3>
              <p class="text-gray-300 text-sm">Puedes solicitar la eliminación completa de tu cuenta y todos tus datos.</p>
            </div>
            <div>
              <h3 class="text-white font-semibold mb-2">Portabilidad</h3>
              <p class="text-gray-300 text-sm">Puedes exportar tus datos en un formato legible por máquina.</p>
            </div>
          </div>
        </div>

        <!-- Contacto -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Mail class="w-6 h-6 mr-3 text-primary-400" />
            Contacto sobre Privacidad
          </h2>
          <p class="text-gray-300 mb-4">
            Si tienes preguntas sobre esta política de privacidad o quieres ejercer tus derechos, contáctanos:
          </p>
          <div class="flex items-center space-x-4">
            <Mail class="w-5 h-5 text-primary-400" />
            <span class="text-white">privacidad@handia.app</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import { Shield, Database, Settings, Lock, UserCheck, Mail } from 'lucide-vue-next'
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'
</script>