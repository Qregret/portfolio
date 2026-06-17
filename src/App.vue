<script setup lang="ts">
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
</script>

<template>
  <div 
    :class="[
      'font-sans bg-slate-50 dark:bg-slate-900 transition-colors duration-300 flex flex-col',
      ['/', '/timeline', '/contact'].includes(route.path) ? 'h-screen h-[100dvh] overflow-hidden' : 'min-h-screen min-h-[100dvh]'
    ]"
  >
    <Navbar />
    <main 
      class="flex-grow flex flex-col"
      :class="['/', '/timeline', '/contact'].includes(route.path) ? 'overflow-y-hidden' : ''"
    >
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer class="shrink-0" />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
