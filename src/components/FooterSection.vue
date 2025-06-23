<template>
  <footer class="bg-dark-950 border-t border-white/10 py-12 relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand Section -->
        <div class="col-span-1 md:col-span-2">
          <!-- Logo and Brand -->
          <div class="flex items-center space-x-3 mb-4">
            <a href="/" class="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
              <div class="w-10 h-10 bg-gradient-to-b rounded flex items-center justify-center">
                <img src="/logo/logo.png" alt="Hand IA" class="w-10 h-10 rounded" />
              </div>
              <span class="text-2xl font-bold gradient-text">Hand IA</span>
            </a>
          </div>
          
          <!-- Description -->
          <p class="text-gray-400 max-w-md mb-6 leading-relaxed">
            {{ brandInfo.description }}
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              :title="social.name"
              class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="sr-only">{{ social.name }}</span>
              <component :is="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <!-- Navigation Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Enlaces Rápidos</h3>
          <div class="space-y-2">
            <a href="#inicio" class="text-gray-400 hover:text-primary-400 transition-colors duration-200 block py-1">Inicio</a>
            <a href="#caracteristicas" class="text-gray-400 hover:text-primary-400 transition-colors duration-200 block py-1">Características</a>
            <a href="#como-funciona" class="text-gray-400 hover:text-primary-400 transition-colors duration-200 block py-1">Cómo Funciona</a>
            <a href="#descargar" class="text-gray-400 hover:text-primary-400 transition-colors duration-200 block py-1">Descargar</a>
          </div>
        </div>
        
        <!-- Support Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Soporte</h3>
          <nav>
            <ul class="space-y-2">
              <li v-for="link in supportLinks" :key="link.to">
                <router-link 
                  :to="link.to" 
                  class="text-gray-400 hover:text-primary-400 transition-colors duration-200 block py-1"
                >
                  {{ link.text }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p class="text-gray-400 text-sm">
          {{ footerInfo.copyright }}
        </p>
        <p class="text-gray-400 text-sm">
          {{ footerInfo.credits.text }} 
          <a 
            :href="footerInfo.credits.url" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-primary-400 hover:text-primary-500 transition-colors duration-200"
          >
            {{ footerInfo.credits.author }}
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Twitter, Instagram } from 'lucide-vue-next'

// Brand Information
const brandInfo = {
  description: 'La aplicación de quiromancia más avanzada que combina sabiduría ancestral con inteligencia artificial moderna.'
}

// Social Media Links
const socialLinks = [
  {
    name: 'Twitter',
    url: '#',
    icon: Twitter
  },
  {
    name: 'Instagram', 
    url: '#',
    icon: Instagram
  }
]

// Support Links
const supportLinks = [
  { to: '/centro-ayuda', text: 'Centro de Ayuda' },
  { to: '/contacto', text: 'Contacto' }, 
  { to: '/privacidad', text: 'Privacidad' },
  { to: '/terminos', text: 'Términos' }
]

// Footer Information
const footerInfo = {
  copyright: '© 2025 Hand IA. Todos los derechos reservados.',
  credits: {
    text: 'Desarrollado con ❤️ por',
    author: 'Cristhian Recalde',
    url: 'https://www.isnotcristhianr.dev/'
  }
}
</script>