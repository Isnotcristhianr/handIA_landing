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
          <span class="gradient-text">Contacto</span>
        </h1>
        <p class="text-xl text-gray-300">
          Estamos aquí para ayudarte con cualquier consulta sobre Hand IA
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Contact Form -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Nombre completo</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20"
                placeholder="Tu nombre"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Correo electrónico</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Asunto</label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20"
              >
                <option value="">Selecciona un asunto</option>
                <option value="soporte-tecnico">Soporte Técnico</option>
                <option value="problema-app">Problema con la App</option>
                <option value="sugerencia">Sugerencia</option>
                <option value="colaboracion">Colaboración</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 resize-none"
                placeholder="Describe tu consulta o problema..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-6 py-3 bg-gradient-to-r from-primary-800 to-primary-900 rounded-xl text-white font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2">
                <Send class="w-5 h-5" />
                <span>Enviar Mensaje</span>
              </span>
              <span v-else class="flex items-center justify-center space-x-2">
                <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Enviando...</span>
              </span>
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <!-- Contact Methods -->
          <div class="glass-card p-8">
            <h2 class="text-2xl font-bold text-white mb-6">Información de contacto</h2>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center">
                  <Mail class="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 class="text-white font-semibold">Email</h3>
                  <p class="text-gray-300">soporte@handia.app</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center">
                  <Clock class="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 class="text-white font-semibold">Horario de atención</h3>
                  <p class="text-gray-300">Lunes a Viernes: 9:00 - 18:00 (GMT-5)</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center">
                  <MessageCircle class="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 class="text-white font-semibold">Tiempo de respuesta</h3>
                  <p class="text-gray-300">Menos de 24 horas</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Developer Info -->
          <div class="glass-card p-8">
            <h2 class="text-2xl font-bold text-white mb-6">Desarrollador</h2>
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-800 to-primary-900 rounded-full flex items-center justify-center">
                <User class="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Cristhian Recalde</h3>
                <p class="text-gray-300">Desarrollador Full Stack</p>
              </div>
            </div>
            <p class="text-gray-300 mb-4">
              Especialista en desarrollo móvil con Flutter y tecnologías de IA. 
              Apasionado por crear aplicaciones innovadoras que combinan tradición y tecnología.
            </p>
            <a 
              href="https://github.com/Isnotcristhianr0" 
              target="_blank"
              class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
            >
              <Github class="w-5 h-5" />
              <span>Ver perfil en GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import { ref } from 'vue'
import { Mail, Clock, MessageCircle, User, Github, Send } from 'lucide-vue-next'
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simular envío del formulario
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Aquí iría la lógica real de envío
  console.log('Formulario enviado:', form.value)
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
  
  // Mostrar mensaje de éxito (podrías usar una librería de notificaciones)
  alert('¡Mensaje enviado correctamente! Te responderemos pronto.')
}
</script>