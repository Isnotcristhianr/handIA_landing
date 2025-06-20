<template>
  <section id="caracteristicas" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Características <span class="gradient-text">Revolucionarias</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Descubre por qué Hand IA es la app de quiromancia más avanzada del
          mundo
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="glass-card p-8 hover:bg-white/10 transition-all duration-300 group transform hover:-translate-y-2"
          :class="{ 'animate-slide-up': true }"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div
            class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <component :is="feature.icon" class="w-8 h-8 text-white" />
          </div>

          <h3 class="text-2xl font-bold text-white mb-4">
            {{ feature.title }}
          </h3>
          <p class="text-gray-300 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Brain,
  Shield,
  Smartphone,
  History,
  Sparkles,
  Users,
} from "lucide-vue-next";
import { ChevronRight } from "lucide-vue-next";

const features = [
  {
    icon: Brain,
    title: "IA Gemini 2.5",
    description:
      "Utiliza la última tecnología de Google AI para análisis precisos y detallados de las líneas de tu mano con interpretaciones personalizadas.",
  },
  {
    icon: Shield,
    title: "Seguridad Total",
    description:
      "Protección avanzada con Firebase App Check, autenticación segura y encriptación de datos para mantener tu privacidad.",
  },
  {
    icon: Smartphone,
    title: "Diseño Moderno",
    description:
      "Interfaz elegante con efectos glassmorphism de IOs 26, tema oscuro y navegación intuitiva para una experiencia visual superior.",
  },
  {
    icon: History,
    title: "Historial Completo",
    description:
      "Guarda todas tus lecturas organizadas por fecha, con análisis detallados y navegación fácil entre sesiones anteriores.",
  },
  {
    icon: Sparkles,
    title: "Análisis Detallado",
    description:
      "Interpretación profunda de líneas principales, montes palmares, forma de mano y características únicas de tu personalidad.",
  },
  {
    icon: Users,
    title: "Multi-plataforma",
    description:
      "Disponible para Android e iOS con sincronización en la nube y autenticación con Google y Apple.",
  },
];
</script>
