<template>
  <div class="min-h-screen bg-black">
    <!-- Background Effects -->
    <div class="fixed inset-0 z-0">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float"
      ></div>
    </div>

    <!-- Navigation -->
    <NavBar />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Section -->
    <FeaturesSection />

    <!-- How It Works -->
    <HowItWorksSection />

    <!-- CTA Section -->
    <CTASection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import HeroSection from "../components/HeroSection.vue";
import FeaturesSection from "../components/FeaturesSection.vue";
import HowItWorksSection from "../components/HowItWorksSection.vue";
import CTASection from "../components/CTASection.vue";
import FooterSection from "../components/FooterSection.vue";
</script>
