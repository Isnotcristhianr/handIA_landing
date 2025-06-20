<template>
  <footer class="bg-dark-950 border-t border-white/10 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-b rounded flex items-center justify-center">
              <img src="/logo/logo.png" alt="Hand IA" class="w-10 h-10 rounded" />
            </div>
            <span class="text-2xl font-bold gradient-text">Hand IA</span>
          </div>
          <p class="text-gray-400 max-w-md mb-6">
            La aplicación de quiromancia más avanzada que combina sabiduría ancestral con inteligencia artificial moderna.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">
              <span class="sr-only">Twitter</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">
              <span class="sr-only">Instagram</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.017 0C8.396 0 7.968.013 6.744.06 5.522.108 4.677.277 3.915.525 3.117.787 2.44 1.175 1.787 1.828.775 2.84.384 4.002.06 5.226.013 6.45 0 6.878 0 10.499s.013 4.049.06 5.273c.047 1.224.216 2.069.465 2.831.262.798.65 1.475 1.303 2.128.653.653 1.33 1.041 2.128 1.303.762.249 1.607.418 2.831.465 1.224.047 1.652.06 5.273.06s4.049-.013 5.273-.06c1.224-.047 2.069-.216 2.831-.465.798-.262 1.475-.65 2.128-1.303.653-.653 1.041-1.33 1.303-2.128.249-.762.418-1.607.465-2.831.047-1.224.06-1.652.06-5.273s-.013-4.049-.06-5.273c-.047-1.224-.216-2.069-.465-2.831C21.213 1.175 20.825.498 20.172.845 19.519.192 18.842-.196 18.044-.458 17.282-.206 16.437-.037 15.213.01 13.989.058 13.561.07 9.94.07 6.319.07 5.891.058 4.667.01 3.443-.037 2.598-.206 1.836-.458 1.038-.196.361.192-.292.845-.945 1.498-1.333 2.128-1.595 2.89-.249 3.652-.418 4.876-.465 6.1-.06 7.544-.06 11.165s.013 5.065.06 6.289c.047 1.224.216 2.069.465 2.831.262.798.65 1.475 1.303 2.128.653.653 1.33 1.041 2.128 1.303.762.249 1.607.418 2.831.465 1.224.047 1.652.06 5.273.06s4.049-.013 5.273-.06c1.224-.047 2.069-.216 2.831-.465.798-.262 1.475-.65 2.128-1.303.653-.653 1.041-1.33 1.303-2.128.249-.762.418-1.607.465-2.831.047-1.224.06-1.652.06-5.273s-.013-4.049-.06-5.273c-.047-1.224-.216-2.069-.465-2.831-.262-.798-.65-1.475-1.303-2.128C20.825 1.495 20.148 1.107 19.35.845 18.588.596 17.743.427 16.519.38 15.295.333 14.867.32 11.246.32 7.625.32 7.197.333 5.973.38 4.749.427 3.904.596 3.142.845 2.344 1.107 1.667 1.495 1.014 2.148.361 2.8-.027 3.478-.289 4.276-.537 5.038-.708 5.882-.755 7.106-.802 8.33-.815 8.758-.815 12.379s.013 4.049.06 5.273c.047 1.224.216 2.069.465 2.831.262.798.65 1.475 1.303 2.128.653.653 1.33 1.041 2.128 1.303.762.249 1.607.418 2.831.465C7.968 23.987 8.396 24 12.017 24s4.049-.013 5.273-.06c1.224-.047 2.069-.216 2.831-.465.798-.262 1.475-.65 2.128-1.303.653-.653 1.041-1.33 1.303-2.128.249-.762.418-1.607.465-2.831.047-1.224.06-1.652.06-5.273s-.013-4.049-.06-5.273c-.047-1.224-.216-2.069-.465-2.831-.262-.798-.65-1.475-1.303-2.128-.653-.653-1.33-1.041-2.128-1.303-.762-.249-1.607-.418-2.831-.465C16.066.013 15.638 0 12.017 0zM12.017 5.838A6.162 6.162 0 1018.179 12a6.162 6.162 0 00-6.162-6.162zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Enlaces Rápidos</h3>
          <ul class="space-y-2">
            <li><a href="#inicio" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">Inicio</a></li>
            <li><a href="#caracteristicas" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">Características</a></li>
            <li><a href="#como-funciona" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">Cómo Funciona</a></li>
            <li><a href="#descargar" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">Descargar</a></li>
          </ul>
        </div>
        
        <!-- Support -->
        <div>
          <h3 class="text-white font-semibold mb-4">Soporte</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">Centro de Ayuda</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">Contacto</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">Privacidad</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">Términos</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
        <p class="text-gray-400 text-sm">
          © 2025 Hand IA. Todos los derechos reservados.
        </p>
        <p class="text-gray-400 text-sm mt-4 md:mt-0">
          Desarrollado con ❤️ por <a href="https://github.com/Isnotcristhianr0" class="text-primary-400 hover:text-primary-500 transition-colors duration-200">Cristhian Recalde</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Hand } from 'lucide-vue-next'
</script>